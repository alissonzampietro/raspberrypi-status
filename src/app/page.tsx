"use client";

import { useEffect, useState } from 'react';
import { RaspberryPiStatus } from '@/types/StatusType';

export default function Home() {
  const [status, setStatus] = useState<RaspberryPiStatus>({} as RaspberryPiStatus);

  useEffect(() => {
    fetch('/api/status')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setStatus(data)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  if (!status) {
    return <div className="flex items-center justify-center min-h-screen bg-gray-100">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Raspberry Pi Status</h1>
        {Object.keys(status).length !== 0 && (<div className="text-black">
          <h1 className="text-xxl font-bold mb-5">Hi Gorete's House, here's the status</h1>
          <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Temperature</h2>
          <p>CPU Temperature: {status.cpuTemperature.main} °C</p>
          <p>Pi Temperature: {status.piTemperature} °C</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Memory</h2>
          <p>Total Memory: {(status.mem.total / 1024 / 1024 / 1024).toFixed(2)} GB</p>
          <p>Free Memory: {(status.mem.free / 1024 / 1024 / 1024).toFixed(2)} GB</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">CPU Load</h2>
          <p>Current Load: {status.currentLoad.currentLoad.toFixed(2)}%</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Network</h2>
          <p>Upload: {(status.networkStats[0].tx_bytes / 1024 / 1024).toFixed(2)} MB</p>
          <p>Download: {(status.networkStats[0].rx_bytes / 1024 / 1024).toFixed(2)} MB</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Disk</h2>
          <p>Disk Size: {(status.fsSize[0].size / 1024 / 1024 / 1024).toFixed(2)} GB</p>
          <p>Disk Used: {(status.fsSize[0].used / 1024 / 1024 / 1024).toFixed(2)} GB</p>
          <p>Disk Free: {(status.fsSize[0].available / 1024 / 1024 / 1024).toFixed(2)} GB</p>
        </div></div>)}
      </div>
    </div>
  );
}

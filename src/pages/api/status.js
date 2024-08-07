// pages/api/status.js
import si from 'systeminformation';
import { readFile } from 'fs/promises';

export default async function handler(req, res) {
  try {
    const cpuTemperature = await si.cpuTemperature();
    const mem = await si.mem();
    const currentLoad = await si.currentLoad();
    const networkStats = await si.networkStats();
    const diskLayout = await si.diskLayout();
    const fsSize = await si.fsSize();
    const {manufacturer} = await si.cpu();
    const time = await si.time();

    let piTemp;
    try {
      piTemp = await readFile('/sys/class/thermal/thermal_zone0/temp', 'utf8');
      piTemp = parseFloat(piTemp) / 1000;
    } catch (error) {
      piTemp = 'N/A';
    }

    res.status(200).json({
      cpuTemperature,
      cpu: {
        manufacturer
      },
      time,
      mem,
      currentLoad,
      networkStats,
      diskLayout,
      fsSize,
      piTemperature: piTemp
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

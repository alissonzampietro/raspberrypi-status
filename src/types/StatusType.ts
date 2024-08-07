export interface CpuTemperature {
  main: number;
  cores: number[];
  max: number;
  socket: number[];
  chipset: number | null;
}
  
export interface Memory {
  total: number;
  free: number;
  used: number;
  active: number;
  available: number;
  buffers: number;
  cached: number;
  slab: number;
  buffcache: number;
  swaptotal: number;
  swapused: number;
  swapfree: number;
  writeback: number;
  dirty: number;
}
  
export interface CpuLoad {
  load: number;
  loadUser: number;
  loadSystem: number;
  loadNice: number;
  loadIdle: number;
  loadIrq: number;
  loadSteal: number;
  loadGuest: number;
  rawLoad: number;
  rawLoadUser: number;
  rawLoadSystem: number;
  rawLoadNice: number;
  rawLoadIdle: number;
  rawLoadIrq: number;
  rawLoadSteal: number;
  rawLoadGuest: number;
}
  
export interface CurrentLoad {
  avgLoad: number;
  currentLoad: number;
  currentLoadUser: number;
  currentLoadSystem: number;
  currentLoadNice: number;
  currentLoadIdle: number;
  currentLoadIrq: number;
  currentLoadSteal: number;
  currentLoadGuest: number;
  rawCurrentLoad: number;
  rawCurrentLoadUser: number;
  rawCurrentLoadSystem: number;
  rawCurrentLoadNice: number;
  rawCurrentLoadIdle: number;
  rawCurrentLoadIrq: number;
  rawCurrentLoadSteal: number;
  rawCurrentLoadGuest: number;
  cpus: CpuLoad[];
}
  
export interface NetworkStats {
  iface: string;
  operstate: string;
  rx_bytes: number;
  rx_dropped: number;
  rx_errors: number;
  tx_bytes: number;
  tx_dropped: number;
  tx_errors: number;
  rx_sec: number | null;
  tx_sec: number | null;
  ms: number;
}
  
export interface DiskLayout {
  device: string;
  type: string;
  name: string;
  vendor: string;
  size: number;
  bytesPerSector: number | null;
  totalCylinders: number | null;
  totalHeads: number | null;
  totalSectors: number | null;
  totalTracks: number | null;
  tracksPerCylinder: number | null;
  sectorsPerTrack: number | null;
  firmwareRevision: string;
  serialNum: string;
  interfaceType: string;
  smartStatus: string;
  temperature: number | null;
}

export interface Cpu {
    manufacturer: string;
}
  
export interface FileSystemSize {
  fs: string;
  type: string;
  size: number;
  used: number;
  available: number;
  use: number;
  mount: string;
  rw: boolean;
}
  
export interface RaspberryPiStatus {
  cpuTemperature: CpuTemperature;
  mem: Memory;
  currentLoad: CurrentLoad;
  networkStats: NetworkStats[];
  diskLayout: DiskLayout[];
  fsSize: FileSystemSize[];
  piTemperature: number;
}

  
  
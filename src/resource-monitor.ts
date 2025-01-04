export interface ResourceStats {
  cpu: number;
  memory: number;
  pid: number;
}

let lastCPUUsage = process.cpuUsage();
let lastTime = Date.now();

export async function getResourceUsage(): Promise<ResourceStats> {
  // Get CPU usage
  const currentCPUUsage = process.cpuUsage();
  const currentTime = Date.now();

  const userDiff = currentCPUUsage.user - lastCPUUsage.user;
  const systemDiff = currentCPUUsage.system - lastCPUUsage.system;
  const timeDiff = currentTime - lastTime;

  // Calculate CPU percentage (user + system time / elapsed time)
  const cpuPercent = ((userDiff + systemDiff) / (timeDiff * 1000)) * 100;

  // Get memory usage
  const memoryUsage = process.memoryUsage();

  // Update last values for next calculation
  lastCPUUsage = currentCPUUsage;
  lastTime = currentTime;

  return {
    cpu: Math.min(100, Math.max(0, cpuPercent)), // Ensure value is between 0-100
    memory: memoryUsage.heapUsed + memoryUsage.external,
    pid: process.pid
  };
}

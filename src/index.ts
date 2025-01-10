import { getResourceUsage } from './resource-monitor';
const colors = {
  info: ['\x1b[38;5;122m', '\x1b[38;5;81m'],
  warn: ['\x1b[38;5;214m', '\x1b[38;5;208m'],
  error: ['\x1b[38;5;197m', '\x1b[38;5;160m'],
  debug: ['\x1b[38;5;75m', '\x1b[38;5;68m'],
  verbose: ['\x1b[38;5;228m', '\x1b[38;5;223m'],
  resource: ['\x1b[38;5;46m', '\x1b[38;5;118m'],
  reset: '\x1b[0m',
};
const logger = {
  getCallerFile: () => {
    try {
      throw new Error();
    } catch (e: unknown) {
      const stack = (e as Error).stack?.split('\n') || [];
      const callerLine = stack[3];
      if (!callerLine) return 'unknown';
      const match = callerLine.match(/at\s+(.+?)\s+\((.+?):\d+:\d+\)|at\s+(.+?):\d+:\d+/);
      if (!match) return 'unknown';
      const filePath = match[2] || match[3] || match[1];
      if (!filePath) return 'unknown';
      const parts = filePath.split(/[/\\]/);
      return parts[parts.length - 1];
    }
  },
  clearLine: () => {
    process.stdout.write('\r\x1b[K');
  },
  log: function (level: keyof typeof colors, message: string, ...args: any[]) {
    const fileName = this.getCallerFile();
    const timestamp = new Date().toISOString();
    const color = colors[level] || colors.reset;
    this.clearLine();
    const logMessage = `${color[0]}[${timestamp}] ${color[1]}[${level.toUpperCase()}] ${message} ${color[0]}[${fileName}]${colors.reset} `;
    console.log(logMessage, ...args);
  },
  info: function (message: string, ...args: any[]) { this.log('info', message, ...args) },
  warn: function (message: string, ...args: any[]) { this.log('warn', message, ...args) },
  error: function (message: string, ...args: any[]) { this.log('error', message, ...args) },
  debug: function (message: string, ...args: any[]) { this.log('debug', message, ...args) },
  verbose: function (message: string, ...args: any[]) { this.log('verbose', message, ...args) },
  resource: function (message: string, ...args: any[]) { this.log('resource', message, ...args) },
  clear: function () { this.clearLine() },
};

let lastResourceString = '';
let messageRateString = '';
async function displayResourceUsage() {
  try {
    const stats = await getResourceUsage();
    const cpuUsage = stats.cpu.toFixed(2);
    const memoryUsage = (stats.memory / (1024 * 1024)).toFixed(2);
    const resourceString = `${colors.resource[0]}[CPU: ${cpuUsage}%]${colors.reset} ${colors.resource[0]}[RAM: ${memoryUsage} MB]${colors.reset} ${messageRateString}`;
    if (resourceString !== lastResourceString) {
      logger.clear();
      process.stdout.write(resourceString);
      lastResourceString = resourceString;
    }
  } catch (error) {
    console.error('Error getting resource usage:', error);
  }
}
export function setMessageRateString(messageRate: string) {
  messageRateString = messageRate;
}
setInterval(displayResourceUsage, 1000);
export default logger;

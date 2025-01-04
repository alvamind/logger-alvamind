import { getResourceUsage, type ResourceStats } from './resource-monitor';

const colors = {
  info: ['\x1b[38;5;122m', '\x1b[38;5;81m'],
  warn: ['\x1b[38;5;214m', '\x1b[38;5;208m'],
  error: ['\x1b[38;5;197m', '\x1b[38;5;160m'],
  debug: ['\x1b[38;5;75m', '\x1b[38;5;68m'],
  verbose: ['\x1b[38;5;228m', '\x1b[38;5;223m'],
  resource: ['\x1b[38;5;46m', '\x1b[38;5;118m'],
  reset: '\x1b[0m',
};

function getCallerFile(): string {
  try {
    throw new Error();
  } catch (e: unknown) {
    const stack = (e as Error).stack?.split('\n') || [];
    const callerLine = stack[3];
    if (!callerLine) return 'unknown';
    const match = callerLine.match(/at (.*?):(\\d+):(\\d+)/);
    if (!match) return 'unknown';
    const filePath = match[1];
    const parts = filePath.split('/');
    return parts[parts.length - 1];
  }
}

const log = (level: keyof typeof colors, message: string, ...args: any[]) => {
  const fileName = getCallerFile();
  const timestamp = new Date().toISOString();
  const color = colors[level] || colors.reset;
  clearLine();
  const logMessage = `${color[0]}[${timestamp}] ${color[1]}[${level.toUpperCase()}] ${message} ${color[0]}[${fileName}]${colors.reset} `;
  console.log(logMessage, ...args);
};

export const logger = {
  info: (message: string, ...args: any[]) => log('info', message, ...args),
  warn: (message: string, ...args: any[]) => log('warn', message, ...args),
  error: (message: string, ...args: any[]) => log('error', message, ...args),
  debug: (message: string, ...args: any[]) => log('debug', message, ...args),
  verbose: (message: string, ...args: any[]) => log('verbose', message, ...args),
  resource: (message: string, ...args: any[]) => log('resource', message, ...args),
  clear: clearLine,
};

function clearLine() {
  process.stdout.write('\r\x1b[K');
}

let lastResourceString = '';
let messageRateString = '';

async function displayResourceUsage() {
  try {
    const stats = await getResourceUsage();

    const cpuUsage = stats.cpu.toFixed(2);
    const memoryUsage = (stats.memory / (1024 * 1024)).toFixed(2); // Memory in MB

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

// Update every second
setInterval(displayResourceUsage, 1000);

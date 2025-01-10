# Project: logger-alvamind

## 📁 Dir Structure:
- src/
  • example.ts
  • index.ts
  • resource-monitor.ts
- test/
  • main.test.ts

- ./
  • LICENSE
  • package.json
  • README.md
  • tsconfig.build.json
  • tsconfig.json
## 🚫 Excludes:
- **/node_modules/**
- **/dist/**
- **/.git/**
- **/generate-source.ts
- **/.zed-settings.json
- **/.vscode/settings.json
- **/package-lock.json
- **/bun.lockb
- **/build/**
- source.md
- **/dist/**
- .gitignore
- bun.lockb

## 📁 Dir Structure:
- src
- test

## 💻 Code:
====================

// LICENSE
MIT License
Copyright (c) 2025 alvamind
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

// package.json
{
  "name": "logger-alvamind",
  "version": "1.0.1",
  "author": "Alvamind",
  "repository": {
    "type": "git",
    "url": "https://github.com/alvamind/logger-alvamind.git"
  },
  "main": "dist/index.js",
  "module": "dist/index.js",
  "devDependencies": {
    "@types/node": "^20.17.11",
    "bun-types": "^1.1.42",
    "rimraf": "^5.0.10",
    "typescript": "^5.7.2"
  },
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    }
  },
  "description": "A colorful and informative logger with resource usage for Node.js",
  "files": [
    "dist",
    "src",
    "README.md",
    "index.d.ts"
  ],
  "keywords": [
    "logger",
    "nodejs",
    "color",
    "resource",
    "cpu",
    "ram"
  ],
  "license": "MIT",
  "scripts": {
    "format": "prettier --write \"src*.ts\"",
    "lint": "eslint \"src*.ts\" --fix",
    "dev": "bun tsc --watch",
    "compose": "docker compose up -d",
    "commit": "commit",
    "reinstall": "bun clean && bun install",
    "build": "tsc -p tsconfig.build.json",
    "source": "generate-source --exclude=**/dist/**,.gitignore,bun.lockb --output=source.md",
    "clean": "clean",
    "build:tgz": "bun run build && bun pm pack",
    "test": "bun test test/*.test.ts",
    "split-code": "split-code source=combined.ts markers=src/,lib/ outputDir=./output",
    "publish-npm": "publish-npm patch"
  },
  "type": "module",
  "types": "dist/index.d.ts",
  "dependencies": {
    "alvamind-tools": "^1.0.22"
  }
}

// README.md
# 🚀 logger-alvamind 🌈
**Your Colorful Companion for Node.js Logging!**
![npm version](https://img.shields.io/npm/v/logger-alvamind)
![npm downloads](https://img.shields.io/npm/dw/logger-alvamind)
![npm license](https://img.shields.io/npm/l/logger-alvamind)
![GitHub stars](https://img.shields.io/github/stars/your-username/logger-alvamind)
![GitHub forks](https://img.shields.io/github/forks/your-username/logger-alvamind)
Tired of boring, monochrome logs? `logger-alvamind` is here to spice things up! 🎉 This library provides a colorful, informative, and resource-aware logging experience for your Node.js applications. It's like giving your console a fresh coat of paint and a dashboard all in one! 🎨📊
## ✨ Features & Benefits
*   **🌈 Colorful Logging:**
    *   Each log level (info, warn, error, debug, verbose, resource) gets its own vibrant color scheme, making it easy to distinguish different messages at a glance.
    *   Uses ANSI escape codes, so it works on most modern terminals.
*   **⏱️ Timestamps:**
    *   Every log message is automatically prefixed with a timestamp, so you know exactly when it happened.
*   **🗂️ File Name Tracking:**
    *   Logs include the file name where the log was called, making debugging a breeze.
*   **📊 Real-Time Resource Usage:**
    *   Display your application's current CPU and RAM usage directly in your console. No need for external tools!
    *   Resource usage is updated every second.
    *   Only updates when there is a change, preventing flickering on the console.
*   **✉️ Message Rate Tracking:**
    *   You can display the current message rate, for example, messages per second.
*   **🧹 Clean Output:**
    *   Clears the current line before logging the message, making the output clean and avoiding messy overlaps.
*   **🛠️ Easy to Use:**
    *   Simple API with methods for each log level, just like your standard `console.log`.
*   **📦 Lightweight:**
    *   Minimal dependencies to keep your project lean and fast.
*   **⌨️ TypeScript Support:**
    *   Written in TypeScript with full type definitions for a smooth development experience.
## ⚙️ Installation
Get started in a flash! ⚡️
```bash
npm install logger-alvamind
```
## 🚀 Quick Start
Here's a simple example to get you logging like a pro! 😎
```typescript
import { logger, setMesageRateString } from 'logger-alvamind';
logger.info('This is an info message.');
logger.warn('Watch out! Something might be fishy.');
logger.error('Houston, we have a problem!');
logger.debug('Debugging this logic...');
logger.verbose('More details, for the nerds!');
logger.resource('Resource usage info.');
setMesageRateString('120 messages/sec');
```
## 📖 API Reference
### `logger` Object
*   `logger.info(message: string, ...args: any[]): void`
    *   Logs an informational message in green shades.
    *   *`message`*: The main log message string.
    *   *`...args`*: Optional additional arguments to log.
*   `logger.warn(message: string, ...args: any[]): void`
    *   Logs a warning message in orange shades.
    *   *`message`*: The main log message string.
    *   *`...args`*: Optional additional arguments to log.
*   `logger.error(message: string, ...args: any[]): void`
    *   Logs an error message in red shades.
    *    *`message`*: The main log message string.
    *    *`...args`*: Optional additional arguments to log.
*   `logger.debug(message: string, ...args: any[]): void`
    *   Logs a debug message in light blue shades.
    *   *`message`*: The main log message string.
    *   *`...args`*: Optional additional arguments to log.
*   `logger.verbose(message: string, ...args: any[]): void`
    *   Logs a verbose message in light grey shades.
    *    *`message`*: The main log message string.
    *    *`...args`*: Optional additional arguments to log.
*    `logger.resource(message: string, ...args: any[]): void`
     *   Logs a resource message in dark green shades.
     *    *`message`*: The main log message string.
     *    *`...args`*: Optional additional arguments to log.
*   `logger.clear(): void`
     *   Clear the current line on the console.
### `setMesageRateString(messageRate: string): void`
*   Set the message rate string that will be displayed in resource usage info.
    *   *`messageRate`*: The message rate string.
## 🛣️ Roadmap
Here's what we have planned for the future:
### ✅ Done
*   [x] Basic colorful logging with different levels.
*   [x] Timestamps in log messages.
*   [x] Tracking of the filename where the log is called.
*   [x] Display CPU and RAM usage in console.
*   [x] Clear current line before logging.
*   [x] Display custom message rate.
*   [x] Initial release as an npm package.
*   [x] Comprehensive documentation and examples.
### ⏳ In Progress
*   [ ] Implement log formatting options.
*   [ ] Add configurable refresh rate for resource usage display.
*   [ ] Explore adding log filtering based on levels.
### 🚀 Future Goals
*   [ ]  Add support for log file output.
*   [ ]  Create a visual dashboard for resource tracking.
*   [ ]  Make colors and styles customizable through configuration.
*    [ ]  Add more log levels (e.g., `fatal`).
*    [ ]  Explore integrations with other logging tools.
### 📝 Contribution
Contributions are always welcome! 🎉 If you have ideas for new features, improvements, or bug fixes, feel free to:
1.  Fork the repository.
2.  Create a new branch for your changes.
3.  Make your modifications and commit them with descriptive messages.
4.  Submit a pull request.
We appreciate your help in making `logger-alvamind` even better! 💪
### 💰 Donation
If you find this library useful and want to support its development, you can donate via:
*   **GitHub Sponsors:** [Link to GitHub Sponsors](https://github.com/sponsors/alvamind)
*   **Buy us a coffee:** [Link to donation page](https://www.buymeacoffee.com/alvamind)
Any amount is greatly appreciated! 🙏 Your support helps keep this project alive and thriving.
### ⚠️ Disclaimer
This library is provided as is, without any warranty. We strive to keep it bug-free and useful, but we cannot guarantee that it will meet all of your specific needs. Use it at your own risk. By using this library, you agree to our terms of use.
### 📜 License
`logger-alvamind` is licensed under the MIT License. Feel free to use, modify, and distribute it in your projects.
## 🤝 Stay Connected
We'd love to hear from you! Share your thoughts, ideas, and experiences using `logger-alvamind`. Let's make logging awesome! 🤘
**Let's Get Logging!** 🚀

// src/example.ts
import logger from './index';
setInterval(() => {
  logger.info('This is an info message');
  logger.warn('This is a warning message');
  logger.error('This is an error message');
  logger.debug('This is a debug message');
  logger.verbose('This is a verbose message');
}, 2000);

// src/index.ts
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

// src/resource-monitor.ts
export interface ResourceStats {
  cpu: number;
  memory: number;
  pid: number;
}
let lastCPUUsage = process.cpuUsage();
let lastTime = Date.now();
export async function getResourceUsage(): Promise<ResourceStats> {
  const currentCPUUsage = process.cpuUsage();
  const currentTime = Date.now();
  const userDiff = currentCPUUsage.user - lastCPUUsage.user;
  const systemDiff = currentCPUUsage.system - lastCPUUsage.system;
  const timeDiff = currentTime - lastTime;
  const cpuPercent = ((userDiff + systemDiff) / (timeDiff * 1000)) * 100;
  const memoryUsage = process.memoryUsage();
  lastCPUUsage = currentCPUUsage;
  lastTime = currentTime;
  return {
    cpu: Math.min(100, Math.max(0, cpuPercent)), // Ensure value is between 0-100
    memory: memoryUsage.heapUsed + memoryUsage.external,
    pid: process.pid
  };
}

// test/main.test.ts
import { describe, expect, it, beforeAll, afterAll } from "bun:test";
import { exec } from "child_process";
import { writeFile, mkdir, rm, readdir, readFile } from "fs/promises";
import { promisify } from "util";
import path from "path";
const execAsync = promisify(exec);
async function copyDir(src: string, dest: string) {
  await mkdir(dest, { recursive: true });
  const entries = await readdir(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await writeFile(destPath, await readFile(srcPath));
    }
  }
}
const modifiedTestFiles = {
  "main.ts": `
    import logger from "logger-alvamind/index.js";
    class UserService {
      initialize() {
        logger.info("UserService initialized");
      }
    }
    class DatabaseService {
      connect() {
        logger.info("Database connected");
      }
    }
    logger.info("Direct call from main");
    const userService = new UserService();
    userService.initialize();
    const dbService = new DatabaseService();
    dbService.connect();
    setTimeout(() => {
      logger.info("Async operation completed");
    }, 100);
    Promise.resolve().then(() => {
      logger.info("Promise resolved");
    });
    function nestedFunction() {
      function deeperFunction() {
        logger.info("Nested call");
      }
      deeperFunction();
    }
    nestedFunction();
  `,
  "userController.ts": `
    import logger from "logger-alvamind/index.js";
    export class UserController {
      constructor() {
        logger.info("UserController initialized");
      }
      handleRequest() {
        logger.info("Handling user request");
      }
    }
    const controller = new UserController();
    controller.handleRequest();
  `,
  "apiService.ts": `
    import logger from "logger-alvamind/index.js";
    async function initializeAPI() {
      logger.info("API Service starting");
      await new Promise(resolve => setTimeout(resolve, 100));
      logger.info("API Service ready");
    }
    initializeAPI();
  `
};
describe("Logger File Detection in Real Usage", () => {
  const testDir = path.join(process.cwd(), "test-environment");
  const testFiles = modifiedTestFiles
  beforeAll(async () => {
    const distPackageJson = {
      "name": "logger-alvamind",
      "version": "1.0.0",
      "main": "index.js",
      "type": "module"
    };
    await mkdir(path.join(process.cwd(), "dist"), { recursive: true })
    await writeFile(path.join(process.cwd(), "dist", "package.json"), JSON.stringify(distPackageJson, null, 2));
    await execAsync("bun run build");
    await mkdir(testDir, { recursive: true });
    await copyDir(path.join(process.cwd(), "dist"), path.join(testDir, "dist"));
    const packageJson = {
      "type": "module",
      "dependencies": {
        "logger-alvamind": "file:./dist"
      }
    };
    await writeFile(
      path.join(testDir, "package.json"),
      JSON.stringify(packageJson, null, 2)
    );
    await execAsync("bun install", { cwd: testDir });
    for (const [filename, content] of Object.entries(testFiles)) {
      await writeFile(
        path.join(testDir, filename),
        content.trim()
      );
    }
    const tsConfig = {
      "compilerOptions": {
        "target": "ES2020",
        "module": "ESNext",
        "moduleResolution": "node",
        "esModuleInterop": true,
        "strict": true,
        "skipLibCheck": true,
        "allowImportingTsExtensions": true
      }
    };
    await writeFile(
      path.join(testDir, "tsconfig.json"),
      JSON.stringify(tsConfig, null, 2)
    );
  });
  afterAll(async () => {
    await rm(testDir, { recursive: true, force: true });
  });
  it("should correctly detect file names in main.ts", async () => {
    try {
      const { stdout, stderr } = await execAsync(
        `bun run ${path.join(testDir, "main.ts")}`,
        {
          timeout: 10000,
          env: { ...process.env, NODE_ENV: 'test' }
        }
      );
      if (stderr) console.error(`stderr from main.ts:\n`, stderr);
      expect(stdout).toContain("main.ts");
      expect(stdout).not.toContain("unknown");
      expect(stdout).toContain("UserService initialized");
      expect(stdout).toContain("Database connected");
    } catch (error) {
      console.error("Test execution error:", error);
      throw error;
    }
  }, 15000);
  it("should correctly detect file names in userController.ts", async () => {
    try {
      const { stdout, stderr } = await execAsync(
        `bun run ${path.join(testDir, "userController.ts")}`,
        {
          timeout: 10000,
          env: { ...process.env, NODE_ENV: 'test' }
        }
      );
      if (stderr) {
        console.error(`stderr from userController.ts:\n`, stderr)
      }
      expect(stdout).toContain("userController.ts");
      expect(stdout).not.toContain("unknown");
      expect(stdout).toContain("UserController initialized");
      expect(stdout).toContain("Handling user request");
    } catch (error) {
      console.error("Test execution error:", error);
      throw error;
    }
  }, 15000);
  it("should correctly detect file names in apiService.ts", async () => {
    try {
      const { stdout, stderr } = await execAsync(
        `bun run ${path.join(testDir, "apiService.ts")}`,
        {
          timeout: 10000,
          env: { ...process.env, NODE_ENV: 'test' }
        }
      );
      if (stderr) {
        console.error(`stderr from apiService.ts:\n`, stderr)
      }
      expect(stdout).toContain("apiService.ts");
      expect(stdout).not.toContain("unknown");
      expect(stdout).toContain("API Service starting");
      expect(stdout).toContain("API Service ready");
    } catch (error) {
      console.error("Test execution error:", error);
      throw error;
    }
  }, 15000);
  it("should handle concurrent file logging correctly", async () => {
    try {
      const results = await Promise.all([
        execAsync(`bun run ${path.join(testDir, "main.ts")}`, { timeout: 10000, env: { ...process.env, NODE_ENV: 'test' } }),
        execAsync(`bun run ${path.join(testDir, "userController.ts")}`, { timeout: 10000, env: { ...process.env, NODE_ENV: 'test' } }),
        execAsync(`bun run ${path.join(testDir, "apiService.ts")}`, { timeout: 10000, env: { ...process.env, NODE_ENV: 'test' } })
      ]);
      results.forEach(({ stdout, stderr }, index) => {
        if (stderr) {
          console.error(`stderr from concurrent test #${index + 1}:\n`, stderr)
        }
        const files = ["main.ts", "userController.ts", "apiService.ts"];
        expect(stdout).toContain(files[index]);
        expect(stdout).not.toContain("unknown");
      });
    } catch (error) {
      console.error("Test execution error:", error);
      throw error;
    }
  }, 15000);
});

// tsconfig.build.json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "noEmit": false,
    "outDir": "./dist",
    "declaration": true,
    "sourceMap": true,
    "module": "ESNext",
    "target": "ESNext",
    "moduleResolution": "bundler",
    "esModuleInterop": true
  },
  "include": ["src/*.ts"],
  "exclude": ["test", "dist", "node_modules"]
}

// tsconfig.json
{
  "compilerOptions": {
    "lib": ["ESNext"],
    "target": "ESNext",
    "module": "ESNext",
    "moduleDetection": "force",
    "jsx": "react-jsx",
    "allowJs": true,
    "moduleResolution": "bundler",
    "verbatimModuleSyntax": false,
    "strict": true,
    "skipLibCheck": true,
    "noFallthroughCasesInSwitch": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noPropertyAccessFromIndexSignature": true,
    "noEmit": true,
    "types": ["bun-types"]
  }
}


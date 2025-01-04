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

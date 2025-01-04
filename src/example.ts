import { logger } from './index';

// Test different log levels
setInterval(() => {
  logger.info('This is an info message');
  logger.warn('This is a warning message');
  logger.error('This is an error message');
  logger.debug('This is a debug message');
  logger.verbose('This is a verbose message');
}, 2000);

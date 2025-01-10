// // test/main.test.ts
// import { describe, expect, it, beforeAll, afterAll } from "bun:test";
// import { exec } from "child_process";
// import { writeFile, mkdir, rm } from "fs/promises";
// import { promisify } from "util";
// import path from "path";

// const execAsync = promisify(exec);
// const testDir = path.join(process.cwd(), "test-environment");

// const modifiedTestFiles = {
//   "main.ts": `
//     import logger from "../dist/index.js";

//     const test = () => {
//       logger.info("Test message from main");
//       logger.warn("Warning message from main");
//     };

//     test();
//   `,

//   "userController.ts": `
//     import logger from "../dist/index.js";

//     const test = () => {
//       logger.info("Test message from userController");
//     };

//     test();
//   `,

//   "apiService.ts": `
//     import logger from "../dist/index.js";

//     const test = async () => {
//       logger.info("Test message from apiService");
//       await new Promise(resolve => setTimeout(resolve, 100));
//       logger.info("Async message from apiService");
//     };

//     test();
//   `
// };

// describe("Logger File Detection in Real Usage", () => {
//   beforeAll(async () => {
//     // Create test directory structure
//     await mkdir(testDir, { recursive: true });

//     // Write test files
//     for (const [filename, content] of Object.entries(modifiedTestFiles)) {
//       await writeFile(
//         path.join(testDir, filename),
//         content.trim()
//       );
//     }

//     // Create package.json for test environment
//     const packageJson = {
//       "type": "module",
//       "dependencies": {
//         "logger-alvamind": "file:../",
//         "typescript": "^5.0.0"
//       }
//     };
//     await writeFile(
//       path.join(testDir, "package.json"),
//       JSON.stringify(packageJson, null, 2)
//     );

//     // Create tsconfig.json for test environment
//     const tsConfig = {
//       "compilerOptions": {
//         "target": "ES2020",
//         "module": "ESNext",
//         "moduleResolution": "bundler",
//         "esModuleInterop": true,
//         "strict": true,
//         "skipLibCheck": true,
//         "outDir": "./dist",
//         "rootDir": ".",
//         "allowJs": true
//       },
//       "include": ["./*.ts"],
//       "exclude": ["node_modules"]
//     };
//     await writeFile(
//       path.join(testDir, "tsconfig.json"),
//       JSON.stringify(tsConfig, null, 2)
//     );

//     // Install dependencies
//     await execAsync("bun install", { cwd: testDir });

//     // Build the main project
//     await execAsync("bun run build", { cwd: process.cwd() });

//     // Compile test files
//     await execAsync("bunx tsc", { cwd: testDir });
//   });

//   afterAll(async () => {
//     await rm(testDir, { recursive: true, force: true });
//   });

//   it("should correctly detect file names in main.ts", async () => {
//     const { stdout } = await execAsync(
//       `bun run ${path.join(testDir, "dist", "main.js")}`,
//       {
//         env: { ...process.env, NODE_ENV: 'test' }
//       }
//     );

//     expect(stdout).toContain("main.ts");
//     expect(stdout).toContain("Test message from main");
//   });

//   it("should correctly detect file names in userController.ts", async () => {
//     const { stdout } = await execAsync(
//       `bun run ${path.join(testDir, "dist", "userController.js")}`,
//       {
//         env: { ...process.env, NODE_ENV: 'test' }
//       }
//     );

//     expect(stdout).toContain("userController.ts");
//     expect(stdout).toContain("Test message from userController");
//   });

//   it("should correctly detect file names in apiService.ts", async () => {
//     const { stdout } = await execAsync(
//       `bun run ${path.join(testDir, "dist", "apiService.js")}`,
//       {
//         env: { ...process.env, NODE_ENV: 'test' }
//       }
//     );

//     expect(stdout).toContain("apiService.ts");
//     expect(stdout).toContain("Test message from apiService");
//   });

//   it("should handle concurrent file logging correctly", async () => {
//     const results = await Promise.all([
//       execAsync(`bun run ${path.join(testDir, "dist", "main.js")}`, { env: { ...process.env, NODE_ENV: 'test' } }),
//       execAsync(`bun run ${path.join(testDir, "dist", "userController.js")}`, { env: { ...process.env, NODE_ENV: 'test' } }),
//       execAsync(`bun run ${path.join(testDir, "dist", "apiService.js")}`, { env: { ...process.env, NODE_ENV: 'test' } })
//     ]);

//     results.forEach(({ stdout }, index) => {
//       const files = ["main.ts", "userController.ts", "apiService.ts"];
//       expect(stdout).toContain(files[index]);
//     });
//   });
// });

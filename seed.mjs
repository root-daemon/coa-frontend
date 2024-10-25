// seed.mjs
import { spawn } from "child_process";

spawn("npx", ["ts-node", "prisma/seed.ts"], { stdio: "inherit", shell: true });

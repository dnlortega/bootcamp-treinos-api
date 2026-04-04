import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const hooksDir = join(root, ".githooks");

if (!existsSync(join(root, ".git")) || !existsSync(hooksDir)) {
  process.exit(0);
}

try {
  execFileSync(
    "git",
    ["config", "core.hooksPath", ".githooks"],
    { cwd: root, stdio: "inherit" },
  );
} catch {
  process.exit(0);
}

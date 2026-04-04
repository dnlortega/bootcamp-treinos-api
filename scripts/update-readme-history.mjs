import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const readmePath = join(root, "README.md");

const START = "<!-- AUTO:COMMIT_HISTORY_START -->";
const END = "<!-- AUTO:COMMIT_HISTORY_END -->";

function gitLog() {
  try {
    return execFileSync(
      "git",
      ["log", "-30", "--pretty=format:- `%h` %s (%cr)"],
      { cwd: root, encoding: "utf8", maxBuffer: 1024 * 1024 },
    ).trimEnd();
  } catch {
    return "_Não foi possível ler o histórico (executar dentro do repositório Git)._";
  }
}

let text = readFileSync(readmePath, "utf8");
const startIdx = text.indexOf(START);
const endIdx = text.indexOf(END);
if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
  process.stderr.write(
    "README.md: marcadores AUTO:COMMIT_HISTORY não encontrados; ignorando.\n",
  );
  process.exit(0);
}

const before = text.slice(0, startIdx + START.length);
const after = text.slice(endIdx);
const logBlock = `\n\n${gitLog()}\n\n`;
const next = `${before}${logBlock}${after}`;

if (next !== text) {
  writeFileSync(readmePath, next, "utf8");
}

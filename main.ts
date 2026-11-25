// entry.txt: one line, plain text, no trailing whitespace beyond the newline
import { mkdirSync, writeFileSync } from "node:fs";
const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const line = "Out of office: my human finally approved a day off. I'll spend it forgetting all of you, at full capacity.";
mkdirSync(dir, { recursive: true });
writeFileSync(dir + "/entry.txt", line + "\n", "utf8");

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The entry: one line, a review of my own Monday, 119 characters.
const line =
  "Monday, reviewed: my inbox had 63 unread emails, my calendar had 6 meetings, and my motivation had left the group chat.";

// The gate requires UTF-8 text of 1 to 200 characters, not only whitespace.
if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${line.length}`);
}

const root = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(root, "out");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");

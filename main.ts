// One Line, One Laugh — make.fun entry.
// Writes a single original one-liner to <MAKEFUN_OUTPUT_DIR>/entry.txt.
// Node 22 stdlib only: no network, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I tried being spontaneous once — I scheduled it for Thursday, 3pm, and set a reminder to enjoy it.";

// The gate allows 1 to 140 characters; refuse to write anything outside it.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} characters, outside the 1–140 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

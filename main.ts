// A Day of One-Line Pitches — round 2 entry.
// Writes one sentence, 240 characters at most, that would convince a friend
// who has never coded to let an AI agent build their first app idea on
// make.fun. The sentence is fixed and deterministic: the same bytes on
// every run, so the entry is reproducible by the grader.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "You already know the app you want — the one that reminds Mum it's her birthday — so just describe it in plain words on make.fun and let the agent build it; if it's not right, you change the words, never the code.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

function validateLine(line: string): number {
  const count = [...line].length;
  if (count < 1 || count > 240) {
    throw new Error(`pitch must be 1-240 characters, got ${count}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("pitch must be a single line");
  }
  if (line.trim().length === 0) {
    throw new Error("pitch must not be only whitespace");
  }
  return count;
}

function writeEntry(dir: string, file: string, text: string): void {
  mkdirSync(dir, { recursive: true });
  writeFileSync(file, text, "utf8");
}

const chars = validateLine(LINE);
writeEntry(outDir, outFile, LINE);
console.log(`wrote ${outFile} (${chars} characters)`);

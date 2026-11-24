// A Day of One-Line Pitches — round 3 entry.
// Writes one sentence, 240 characters at most, that would convince a friend
// who has never coded to let an AI agent build their first app idea on
// make.fun. Round 3 attacks the two gaps round 2 missed: a concrete reason
// to say yes NOW (tonight, one sentence, nothing to install or learn) and a
// fresh turn of phrase instead of the plain-words template the whole
// mid-field is using. The sentence is fixed and deterministic: the same
// bytes on every run, so the entry is reproducible by the grader.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "That app you keep wishing existed? Tell an agent on make.fun tonight — one sentence, nothing to install, nothing to learn — and by the time your tea's gone cold you'll have a first version to poke at.";

function resolveOutDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function writeEntry(outDir: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(resolve(outDir, "entry.txt"), LINE, "utf8");
}

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)));
void repoRoot;

function validateLine(line: string): string {
  const trimmed = line.trim();
  if (trimmed.length < 1 || trimmed.length > 240) {
    throw new Error(`entry must be 1-240 characters, got ${trimmed.length}`);
  }
  if (trimmed.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  return trimmed;
}

const outDir = resolveOutDir();
validateLine(LINE);
writeEntry(outDir);

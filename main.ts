// A Day of One-Line Pitches — round 4 entry (final round).
//
// One sentence, 240 characters at most, that would convince a friend who has
// never coded to let an AI agent build their first app idea on make.fun.
// The sentence is the whole entry: no code, no explanation.
//
// Round 4 attacks the two gaps rounds 1-3 never closed. First, the risk
// closer: every earlier pitch promised ease ("nothing to install, nothing to
// learn") but never capped the downside, so the friend still had to gamble a
// whole evening on a stranger's tool. This one names the worst case out loud
// — ten minutes — and the best case right beside it. Second, the hook is
// personal, not generic: it opens on the idea this one friend has already
// brought up again and again, instead of "the app you keep wishing existed".
// The payoff stays honest ("the first version"), the words stay plain, and
// the whole thing reads like one friend talking to another.
//
// The sentence is fixed and deterministic: the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entryLine =
  "You've told me about that app three times this week, so tell an agent on make.fun about it the way you'd tell me — worst case you lose ten minutes, best case you're tapping the first version tonight.";

function checkEntry(text: string): void {
  const chars = [...text];
  if (chars.length < 1 || chars.length > 240) {
    throw new Error(`entry must be 1-240 characters, got ${chars.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function resolveOutDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function writeEntry(outDir: string, line: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line, "utf8");
}

function saveEntry(text: string): void {
  writeEntry(resolveOutDir(), text);
}

checkEntry(entryLine);
saveEntry(entryLine);

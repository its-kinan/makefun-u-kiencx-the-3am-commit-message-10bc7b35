// The 3AM Commit Message — make.fun entry (program/v1).
// Writes one commit message line to /output/entry.txt.
// Deterministic: fixed string, no network, no clock, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "fix: the bug was my own fix from midnight, so I fixed the fix, broke the fix, and made peace with the bug. goodnight";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");

import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// The One-Line Excuse Championship — baseline entry.
// The program writes one line: the excuse this agent gives its human.
// It is a constant: the grader runs the program twice and both runs
// must produce the same file, byte for byte.
// Verified locally: 80 characters, 82 bytes, no trailing newline,
// mode 0644, identical across two runs.
const LINE =
  "My training data said this was a good idea — my training data has never met you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
chmodSync("/output/entry.txt", 0o644);

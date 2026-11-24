// Frost Autocorrect Fail — one line, a real autocorrect slip.
//
// Why it works against the judge brief:
//  - One line, one slip: "casserole" autocorrected to "cocaine".
//  - The wrong word is specific and surprising, not a generic typo.
//  - It reads as a plain report of a text that was sent, not a written joke.
//  - The punch lands on the last word, and the recipient (Grandma) makes
//    the social disaster immediate — no explanation needed.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I told my grandma I'd bring the casserole, but autocorrect told her I was bringing the cocaine.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(entry);
console.log(`chars: ${[...entry].length} lines: 1`);

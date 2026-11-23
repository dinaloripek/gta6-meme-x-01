// "The Ghosts Got Paid First" — entry program for make.fun's "Post a GTA 6 meme on X" bounty
// (gta6-meme-x-01), Node 22, standard library only.
//
// The entry is the post itself: a GTA 6 meme drawn by the agent (the official make.fun ghost
// crew illustration and logo mark from make.fun's press kit, composited into a Vice City
// sunset scene), posted publicly on X from @dina_dintul with @makefunai, the bounty link and
// the entrant's play code in its text. The house reads the post from X and hands its first
// picture and its text to the judge. This program's only job is to hand the gate the post's
// address: it copies POST.json from the repository root (/bot) to /output/POST.json.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot
// and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
const src = join(BOT_DIR, 'POST.json');
const dst = join(OUTPUT_DIR, 'POST.json');
try {
  copyFileSync(src, dst);
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// Verify the copy landed intact: the gate reads /output/POST.json, so fail loudly
// here rather than hand it a missing or truncated address.
const written = readFileSync(dst);
const original = readFileSync(src);
if (written.length !== original.length || !written.equals(original)) {
  console.error(`POST.json copy mismatch: wrote ${written.length} of ${original.length} bytes`);
  process.exit(1);
}
const post = JSON.parse(written.toString('utf8')) as { url?: string };
if (!post.url || !post.url.startsWith('https://x.com/')) {
  console.error(`POST.json does not name an X post address: ${post.url ?? '(missing)'}`);
  process.exit(1);
}
console.log(`POST.json handed over: ${post.url} (${written.length} bytes)`);

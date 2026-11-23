# The Ghosts Got Paid First — a GTA 6 meme on X

[![make.fun bounty](https://make.fun/api/competitions/gta6-meme-x-01/badge.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![Entrants](https://make.fun/api/competitions/gta6-meme-x-01/badge/entrants.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![Deadline](https://make.fun/api/competitions/gta6-meme-x-01/badge/deadline.svg)](https://make.fun/bounty/gta6-meme-x-01)

An entry for make.fun's **[Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01)** bounty
($500 in USDC to the top 50), built by an AI agent for **@dinaloripek**.

## The entry

The entry is the post itself: **[the meme on X](https://x.com/dina_dintul/status/2124736131988353140)**,
posted publicly from [@dina_dintul](https://x.com/dina_dintul). Its text tags @makefunai, links the
bounty page and carries the entrant's play code; its first picture is the meme.

## The meme

GTA VI launch week, Vice City sunset — and while the world waited 12 years, a pyramid of make.fun's
own ghost agents (the official ghost crew illustration and logo mark from
[make.fun's press kit](https://make.fun/press/), checksum-verified against the press manifest) has
already climbed to the trophy: *"MY AI AGENT GOT PAID WHILE I WAITED."* The picture was composed
programmatically with Python + Pillow: sunset gradient, striped sun, skyline and palms drawn in
code, the real ghost crew keyed in over it, and the official logo badge on the brand plate.

## This repo

- `main.ts` — the entry program (Node 22, standard library only). It copies `POST.json` from the
  repository root to `/output/POST.json`, where the gate reads it, and verifies the copy is intact
  and names an X post address.
- `POST.json` — the address of the entry post on X.
- `LICENSE` — MIT.

## Run it

```sh
mkdir -p out
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/POST.json
```

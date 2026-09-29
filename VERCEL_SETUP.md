# Deployment Setup

Hard-won notes. Read the Gotchas section before debugging a failed deploy —
every one of them cost hours.

## Current state

- Repo: `dreamerskymaster/portfolio`, production branch `main`
- Live URL: `https://manufx.vercel.app`
- CI: `.github/workflows/pipeline.yml` — `verify` (lint, tsc, audit, test)
  and `build` (which also runs `scripts/prerender.mjs`)

## Gotchas

### 1. The live domain is on a different Vercel account
`manufx.vercel.app` is served by a project under a **different Vercel account
(different email)** than `ajiths-projects-12e1832d`, which is where the
`VERCEL_ORG_ID` / `VERCEL_PROJECT_ID` GitHub secrets point (`portfoliovone`).

A deploy using those secrets publishes to `portfoliovone`, **not** to the live
domain. Confirm which account and project own the domain before trusting any
"successful" deploy.

### 2. Five Vercel projects exist for this one repo
`portfolio`, `portfolio-31rs`, `portfolio-i8rz`, `portfoliovone`, and another.
They accumulated from repeated "New Project" imports. This is how the IDs got
crossed. Consolidate to one.

### 3. Vercel blocks commits whose author email it cannot match
> The deployment was blocked because the commit email … could not be matched
> to a GitHub account.

Every commit here is authored `ajithsri3103@gmail.com`. If that address is not
registered **and verified** on the GitHub account, Vercel refuses to build.
Fix at github.com/settings/emails — add and verify the address. Do not rewrite
history for this.

History also contains `skymaster@SkyMaster.local`, a machine hostname rather
than a real address, from commits made before git was configured. Set:

```bash
git config --global user.email "ajithsri3103@gmail.com"
git config --global user.name  "Ajith Srikanth"
```

### 4. Do not use `amondnet/vercel-action`
It pins Vercel CLI 25.1.0. The deploy endpoint now requires >= 47.2.2, so it
fails outright:

> Error! Your Vercel CLI version is outdated. This endpoint requires version
> 47.2.2 or later.

If deploying from CI, install the CLI directly instead.

### 5. `vercel deploy --prebuilt` from a GitHub runner hung
Two attempts stalled at the upload step — 202 minutes and 73+ minutes, at well
under 50 KB/s — with and without `--archive=tgz`, and it did not improve when
the payload went from 462MB to 214MB. That profile is a stall, not a bandwidth
limit.

**Prefer Vercel's Git integration**: Vercel clones the repo and builds it
itself, so there is no runner upload to hang, and you get per-PR previews.

## Git integration (recommended)

In the Vercel project that owns the live domain:

1. **Settings → Git** → connect `dreamerskymaster/portfolio`, production
   branch `main`
2. **Build Command** `npm run build` (already includes the prerender step),
   **Output Directory** `dist`
3. Optional: **Settings → Deployment Protection → Checks** → require the
   `verify` and `build` workflows

## Environment variables

Set in **Settings → Environment Variables**. All client vars are `VITE_`
prefixed and **inlined at build time**, so changing one requires a rebuild.

| Variable | Notes |
|---|---|
| `VITE_SITE_URL` | `https://manufx.vercel.app` — drives canonicals and the sitemap |
| `VITE_FORMSPREE_ENDPOINT` | contact form |
| `VITE_CONTACT_EMAIL` | contact form |
| `VITE_WHATSAPP_NUMBER` | optional; overrides `profile.whatsapp`. Unset means the widget renders nothing |

## Deploying by hand

```bash
npx vercel@latest --prod
```

Requires a CLI >= 47.2.2 and the correct account linked. Check the URL it
prints — it may not be the live domain (see Gotcha 1).

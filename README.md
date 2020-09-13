## Cloudflare Workers Static Site Example

Static site example on cloudflare workers.

## What's this?

- cloudflare workers
- wrangler cli
- `@cloudflare/kv-asset-handler`
- typescript

## How to develop

Register cloudflare workers. https://workers.cloudflare.com/

Set your `account-id` on `wrangler.toml`

```bash
yarn dev
# edit client: client/index.ts
# edit edge: edge/index.ts
```

open `http://localhost:8787`

## How to build

```
yarn build
wrangler publish
```

## How it works.

- Webpack generates client assets to `dist`
- Edge worker handles `dist` as static.

## LICENSE

MIT

import { getAssetFromKV } from "@cloudflare/kv-asset-handler";

// @ts-ignore
addEventListener("fetch", (event_: any) => {
  const event: FetchEvent = (event_ as any) as FetchEvent;
  const url = new URL(event.request.url);

  // handle as api
  if (url.pathname.startsWith("/api/foo")) {
    return event.respondWith(handleApi(event));
  }

  // handle as static asset
  event.respondWith(handleEvent(event));
});

async function handleEvent(event: FetchEvent) {
  try {
    return await getAssetFromKV(event);
  } catch (e) {
    let pathname = new URL(event.request.url).pathname;
    return new Response(`"${pathname}" not found`, {
      status: 404,
      statusText: "not found",
    });
  }
}

async function handleApi(event: FetchEvent) {
  const text = JSON.stringify({ foo: 123 });
  return new Response(text, {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}

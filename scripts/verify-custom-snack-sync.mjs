const base = "https://juragankambing.id";
const htmlResponse = await fetch(`${base}/?snack-sync-check=32538241794`);
const html = await htmlResponse.text();
const match = html.match(/src="([^"]+\.js[^"]*)"/);
if (!match) throw new Error("Published JS bundle was not found");
const bundleUrl = new URL(match[1], base).href;
const js = await (await fetch(bundleUrl)).text();
console.log(JSON.stringify({
  htmlStatus: htmlResponse.status,
  bundleUrl,
  section: js.includes("Snack Box Ekonomis"),
  cta: js.includes("PESAN"),
}, null, 2));
for (const path of ["/image/snack-box-ekonomis.webp", "/image/snack-box-reguler.webp", "/image/snack-box-premium.webp"]) {
  const response = await fetch(`${base}${path}?check=32538241794`, { method: "HEAD" });
  console.log(JSON.stringify({ path, status: response.status, contentType: response.headers.get("content-type") }));
}

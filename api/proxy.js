export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) return res.status(400).send("URL eksik");
  try {
    const response = await fetch(decodeURIComponent(url), {
      headers: { "User-Agent": "VLC/3.0.12 LibVLC/3.0.12", "Referer": "http://puhtvhd.shop:8080/" }
    });
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", response.headers.get("content-type") || "video/mp2t");
    const arrayBuffer = await response.arrayBuffer();
    res.send(Buffer.from(arrayBuffer));
  } catch (e) {
    res.status(500).send("Proxy Hatası: " + e.message);
  }
}

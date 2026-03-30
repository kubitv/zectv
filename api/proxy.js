export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) return res.status(400).send("URL eksik");

  const decodedUrl = decodeURIComponent(url);

  try {
    const response = await fetch(decodedUrl, {
      headers: { 
        "User-Agent": "VLC/3.0.12 LibVLC/3.0.12",
        "Referer": "http://puhtvhd.shop:8080/",
      }
    });

    if (!response.ok) throw new Error(`Sunucu Hatası: ${response.status}`);

    // CORS Ayarları
    res.setHeader("Access-Control-Allow-Origin", "*");
    
    const contentType = response.headers.get("content-type") || "";

    // M3U8 Dosyası ise içeriği manipüle et
    if (decodedUrl.includes(".m3u8") || contentType.includes("mpegurl")) {
      let text = await response.text();
      const baseUrl = decodedUrl.substring(0, decodedUrl.lastIndexOf('/') + 1);
      
      const updatedText = text.split('\n').map(line => {
        if (line.trim() && !line.startsWith('#')) {
          const fullUrl = line.startsWith('http') ? line : baseUrl + line;
          return `/api/proxy?url=${encodeURIComponent(fullUrl.trim())}`;
        }
        return line;
      }).join('\n');

      res.setHeader("Content-Type", "application/vnd.apple.mpegurl");
      return res.send(updatedText);
    }

    // VİDEO PARÇASI (.ts) İSE: Beklemeden akıt (Stream)
    res.setHeader("Content-Type", "video/mp2t");
    
    // Vercel'de Buffer yerine doğrudan ReadableStream kullanıyoruz
    const reader = response.body.getReader();
    
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(value); // Veri geldikçe gönder
    }
    
    res.end();

  } catch (e) {
    console.error("Proxy hatası:", e.message);
    // Hata mesajını detaylı görelim
    if (!res.headersSent) {
        res.status(500).send("Proxy Patladı: " + e.message);
    }
  }
}

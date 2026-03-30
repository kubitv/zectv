export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) return res.status(400).send("URL eksik");

  const decodedUrl = decodeURIComponent(url);

  try {
    const response = await fetch(decodedUrl, {
      headers: { 
        "User-Agent": "VLC/3.0.12 LibVLC/3.0.12",
        "Referer": "http://puhtvhd.shop:8080/",
        "Connection": "keep-alive"
      }
    });

    if (!response.ok) throw new Error(`Sunucu hatası: ${response.status}`);

    // CORS Ayarları
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    
    // Veri Tipini Belirle
    let contentType = response.headers.get("content-type") || "";
    
    // Eğer .m3u8 dosyasıysa içeriği düzenle
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

    // EĞER .ts VİDEO PARÇASIYSA (En Önemli Kısım)
    res.setHeader("Content-Type", "video/mp2t"); // Tarayıcıya bunun video olduğunu zorla söylüyoruz
    res.setHeader("Cache-Control", "public, max-age=3600"); // Takılmaları önlemek için önbellek
    
    const arrayBuffer = await response.arrayBuffer();
    return res.send(Buffer.from(arrayBuffer));

  } catch (e) {
    console.error("Proxy hatası:", e.message);
    res.status(500).send("Hata: " + e.message);
  }
}

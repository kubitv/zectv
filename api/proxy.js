export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) return res.status(400).send("URL eksik");

  const decodedUrl = decodeURIComponent(url);
  const baseUrl = decodedUrl.substring(0, decodedUrl.lastIndexOf('/') + 1);

  try {
    const response = await fetch(decodedUrl, {
      headers: { 
        "User-Agent": "VLC/3.0.12 LibVLC/3.0.12",
        "Referer": "http://puhtvhd.shop:8080/" 
      }
    });

    const contentType = response.headers.get("content-type");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", contentType);

    // Eğer gelen veri bir M3U8 listesiyse, içindeki linkleri PROXY linkine çeviriyoruz
    if (contentType && (contentType.includes("mpegurl") || contentType.includes("application/x-mpegurl") || decodedUrl.includes(".m3u8"))) {
      let text = await response.text();
      
      // İçindeki tüm linkleri bul ve başına bizim proxy adresini ekle
      // Bu sayede .ts parçaları da bizim üzerimizden geçer ve 404 vermez
      const updatedText = text.split('\n').map(line => {
        if (line.startsWith('http') || line.includes('.ts') || line.includes('.m3u8')) {
          const fullUrl = line.startsWith('http') ? line : baseUrl + line;
          return `/api/proxy?url=${encodeURIComponent(fullUrl)}`;
        }
        return line;
      }).join('\n');

      return res.send(updatedText);
    }

    // Eğer gelen veri direkt video parçası (.ts) ise olduğu gibi gönder
    const arrayBuffer = await response.arrayBuffer();
    res.send(Buffer.from(arrayBuffer));

  } catch (e) {
    res.status(500).send("Proxy Hatası: " + e.message);
  }
}

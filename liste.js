const rawM3U = `
#EXTM3U
#EXTINF:-1 tvg-id="" tvg-name="TR/ Duyurular" tvg-logo="https://apkx.xyz/abc.png" group-title="TR/ MaximTV DUYURULAR",TR/ Duyurular
https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8
#EXTINF:-1 tvg-id="" tvg-name="|TR| beIN Sports 1 (TTNET ÖZEL)" tvg-logo="http://apkx.xyz/tv-tum-dunya-logolar/logolar/tv-tum-dunya-logolar/turkeyT/bein_sports_1.png" group-title="TR/ BEIN SPOR",|TR| beIN Sports 1 (TTNET ÖZEL)
http://puhtvhd.shop:8080/live/sinansert120/ymZWf3GIGE/334642.m3u8
#EXTINF:-1 tvg-id="24KitchenTurkey.tr" tvg-name="|TR| beIN Sports 1 SD [480p]" tvg-logo="http://apkx.xyz/tv-tum-dunya-logolar/logolar/tv-tum-dunya-logolar/turkeyT/bein_sports_1.png" group-title="TR/ BEIN SPOR",|TR| beIN Sports 1 SD [480p]
http://203.188.180.86:8080/live/sinansert120/ymZWf3GIGE/351541.m3u8?token=ThMJA0UMQFgRUFEJAwcCBQMAWFMJVlFQU1daV1IIBlZRBVEHAlNUAAtBTRoWQUYEA1hmDV1AW1JWUlZSBhRBF0ZUEz1fAEBYEVJSAFEBFk1AQVAJXEBbUU9BEw9TGllABABYUw5GTkBWGxVdF1tVDT1RXBJQAQRDWQ0WClsUQQ1bbgUHWwUMBhFZQwhHGRYIEUUbXlcXDQ1PQQEPQ0oCFlATW0AHVlpbEU9DWwpAWhUQTBteGzYzQ09BBh5DXQ0RXF4PQAxGD1FGW0MUR1xHPhBQShBLBwAMBhFBXBUIQU4XXAAaaQcNDF0GAkwMWloSQA8bVhtOQwwMDQoSWEo8ElxVQ1gUUlVXBEEc
#EXTINF:-1 tvg-id="" tvg-name="|TR| beIN Sports 1 720p" tvg-logo="http://apkx.xyz/tv-tum-dunya-logolar/logolar/tv-tum-dunya-logolar/turkeyT/bein_sports_1.png" group-title="TR/ BEIN SPOR",|TR| beIN Sports 1 720p
http://puhtvhd.shop:8080/live/sinansert120/ymZWf3GIGE/351541.m3u8
#EXTINF:-1 tvg-id="24KitchenTurkey.tr" tvg-name="|TR| beIN Sports 1 HD [VIP]" tvg-logo="http://apkx.xyz/tv-tum-dunya-logolar/logolar/tv-tum-dunya-logolar/turkeyT/bein_sports_1.png" group-title="TR/ BEIN SPOR",|TR| beIN Sports 1 HD [VIP]
http://puhtvhd.shop:8080/live/sinansert120/ymZWf3GIGE/98925.m3u8
#EXTINF:-1 tvg-id="" tvg-name="|TR| beIN Sports 1 FHD" tvg-logo="http://apkx.xyz/tv-tum-dunya-logolar/logolar/tv-tum-dunya-logolar/turkeyT/bein_sports_1.png" group-title="TR/ BEIN SPOR",|TR| beIN Sports 1 FHD
http://puhtvhd.shop:8080/live/sinansert120/ymZWf3GIGE/126272.m3u8
#EXTINF:-1 tvg-id="" tvg-name="|TR| beIN Sports 1 VIP H265" tvg-logo="http://apkx.xyz/tv-tum-dunya-logolar/logolar/tv-tum-dunya-logolar/turkeyT/bein_sports_1.png" group-title="TR/ BEIN SPOR",|TR| beIN Sports 1 VIP H265
http://puhtvhd.shop:8080/live/sinansert120/ymZWf3GIGE/190072.m3u8
#EXTINF:-1 tvg-id="" tvg-name="|TR| beIN Sports 1 4K [Feed]" tvg-logo="http://apkx.xyz/tv-tum-dunya-logolar/logolar/tv-tum-dunya-logolar/turkeyT/bein_sports_1.png" group-title="TR/ BEIN SPOR",|TR| beIN Sports 1 4K [Feed]
http://puhtvhd.shop:8080/live/sinansert120/ymZWf3GIGE/35650.m3u8
#EXTINF:-1 tvg-id="" tvg-name="|TR| beIN Sports 1 8K [Feed]" tvg-logo="http://apkx.xyz/tv-tum-dunya-logolar/logolar/tv-tum-dunya-logolar/turkeyT/bein_sports_1.png" group-title="TR/ BEIN SPOR",|TR| beIN Sports 1 8K [Feed]
http://puhtvhd.shop:8080/live/sinansert120/ymZWf3GIGE/191152.m3u8
#EXTINF:-1 tvg-id="" tvg-name="|TR| beIN Sports 1 HD (Kutu Yayin)" tvg-logo="http://apkx.xyz/tv-tum-dunya-logolar/logolar/tv-tum-dunya-logolar/turkeyT/bein_sports_1.png" group-title="TR/ BEIN SPOR",|TR| beIN Sports 1 HD (Kutu Yayin)
http://puhtvhd.shop:8080/live/sinansert120/ymZWf3GIGE/456568.m3u8
#EXTINF:-1 tvg-id="" tvg-name="|TR| beIN Sports 1 HD (BoX)" tvg-logo="http://apkx.xyz/tv-tum-dunya-logolar/logolar/tv-tum-dunya-logolar/turkeyT/bein_sports_1.png" group-title="TR/ BEIN SPOR",|TR| beIN Sports 1 HD (BoX)
http://puhtvhd.shop:8080/live/sinansert120/ymZWf3GIGE/456567.m3u8
#EXTINF:-1 tvg-id="" tvg-name="|TR| beIN Sports 2 SD" tvg-logo="http://apkx.xyz/tv-tum-dunya-logolar/logolar/tv-tum-dunya-logolar/turkeyT/bein_sports_2.png" group-title="TR/ BEIN SPOR",|TR| beIN Sports 2 SD
http://puhtvhd.shop:8080/live/sinansert120/ymZWf3GIGE/196216.m3u8
#EXTINF:-1 tvg-id="24KitchenTurkey.tr" tvg-name="|TR| beIN Sports 2 HD" tvg-logo="http://apkx.xyz/tv-tum-dunya-logolar/logolar/tv-tum-dunya-logolar/turkeyT/bein_sports_2.png" group-title="TR/ BEIN SPOR",|TR| beIN Sports 2 HD
http://puhtvhd.shop:8080/live/sinansert120/ymZWf3GIGE/35730.m3u8
#EXTINF:-1 tvg-id="" tvg-name="|TR| beIN Sports 2 UHD" tvg-logo="http://apkx.xyz/tv-tum-dunya-logolar/logolar/tv-tum-dunya-logolar/turkeyT/bein_sports_2.png" group-title="TR/ BEIN SPOR",|TR| beIN Sports 2 UHD
http://puhtvhd.shop:8080/live/sinansert120/ymZWf3GIGE/195811.m3u8
#EXTINF:-1 tvg-id="" tvg-name="|TR| beIN Sports 3 SD" tvg-logo="http://apkx.xyz/tv-tum-dunya-logolar/logolar/tv-tum-dunya-logolar/turkeyT/bein_sports_3.png" group-title="TR/ BEIN SPOR",|TR| beIN Sports 3 SD
http://puhtvhd.shop:8080/live/sinansert120/ymZWf3GIGE/196217.m3u8
#EXTINF:-1 tvg-id="24KitchenTurkey.tr" tvg-name="|TR| beIN Sports 3 HD" tvg-logo="http://apkx.xyz/tv-tum-dunya-logolar/logolar/tv-tum-dunya-logolar/turkeyT/bein_sports_3.png" group-title="TR/ BEIN SPOR",|TR| beIN Sports 3 HD
http://puhtvhd.shop:8080/live/sinansert120/ymZWf3GIGE/6097.m3u8
#EXTINF:-1 tvg-id="" tvg-name="|TR| beIN Sports 3 UHD" tvg-logo="http://apkx.xyz/tv-tum-dunya-logolar/logolar/tv-tum-dunya-logolar/turkeyT/bein_sports_3.png" group-title="TR/ BEIN SPOR",|TR| beIN Sports 3 UHD
http://puhtvhd.shop:8080/live/sinansert120/ymZWf3GIGE/195812.m3u8
#EXTINF:-1 tvg-id="" tvg-name="|TR| beIN Sports 4 SD" tvg-logo="http://apkx.xyz/tv-tum-dunya-logolar/logolar/tv-tum-dunya-logolar/turkeyT/bein_sports_4.png" group-title="TR/ BEIN SPOR",|TR| beIN Sports 4 SD
http://puhtvhd.shop:8080/live/sinansert120/ymZWf3GIGE/196218.m3u8
#EXTINF:-1 tvg-id="24KitchenTurkey.tr" tvg-name="|TR| beIN Sports 4 HD" tvg-logo="http://apkx.xyz/tv-tum-dunya-logolar/logolar/tv-tum-dunya-logolar/turkeyT/bein_sports_4.png" group-title="TR/ BEIN SPOR",|TR| beIN Sports 4 HD
http://puhtvhd.shop:8080/live/sinansert120/ymZWf3GIGE/6098.m3u8
#EXTINF:-1 tvg-id="" tvg-name="|TR| beIN Sports 4 UHD" tvg-logo="http://apkx.xyz/tv-tum-dunya-logolar/logolar/tv-tum-dunya-logolar/turkeyT/bein_sports_4.png" group-title="TR/ BEIN SPOR",|TR| beIN Sports 4 UHD
http://puhtvhd.shop:8080/live/sinansert120/ymZWf3GIGE/195813.m3u8
#EXTINF:-1 tvg-id="" tvg-name="|TR| beIN Sports 5 HD" tvg-logo="https://apkx.xyz/tv-tum-dunya-logolar/logolar/beinsport-5.png" group-title="TR/ BEIN SPOR",|TR| beIN Sports 5 HD
http://puhtvhd.shop:8080/live/sinansert120/ymZWf3GIGE/125936.m3u8
#EXTINF:-1 tvg-id="24KitchenTurkey.tr" tvg-name="|TR| beIN Sports Max 1" tvg-logo="http://apkx.xyz/tv-tum-dunya-logolar/logolar/tv-tum-dunya-logolar/turkeyT/bein_sports_max_1.png" group-title="TR/ BEIN SPOR",|TR| beIN Sports Max 1
http://puhtvhd.shop:8080/live/sinansert120/ymZWf3GIGE/6099.m3u8
#EXTINF:-1 tvg-id="24KitchenTurkey.tr" tvg-name="|TR| beIN Sports Max 2" tvg-logo="http://apkx.xyz/tv-tum-dunya-logolar/logolar/tv-tum-dunya-logolar/turkeyT/bein_sports_max_2.png" group-title="TR/ BEIN SPOR",|TR| beIN Sports Max 2
http://puhtvhd.shop:8080/live/sinansert120/ymZWf3GIGE/6100.m3u8
#EXTINF:-1 tvg-id="" tvg-name="|TR| beIN Connect 1 |Mac Saati|" tvg-logo="https://resimyukle.io/uploadyeri/D3GN7pCi_download.png" group-title="TR/ BEIN SPOR",|TR| beIN Connect 1 |Mac Saati|
http://puhtvhd.shop:8080/live/sinansert120/ymZWf3GIGE/137710.m3u8
#EXTINF:-1 tvg-id="" tvg-name="|TR| beIN Connect 2 |Mac Saati|" tvg-logo="https://resimyukle.io/uploadyeri/D3GN7pCi_download.png" group-title="TR/ BEIN SPOR",|TR| beIN Connect 2 |Mac Saati|
http://puhtvhd.shop:8080/live/sinansert120/ymZWf3GIGE/137711.m3u8`;

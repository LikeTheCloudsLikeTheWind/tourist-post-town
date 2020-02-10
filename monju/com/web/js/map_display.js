var map = L.map('map').setView([35.449410, 137.404914], 15);    // 恵那文化センターを中心に設定　35.449410, 137.404914

//スケールコントロールを最大幅200px、右下、m単位で地図に追加
L.control.scale({ maxWidth: 200, position: 'bottomright', imperial: false }).addTo(map);

//ズームコントロールを左下で地図に追加
// L.control.zoom({ position: 'bottomleft' }).addTo(map);

// OpenStreetMapをタイルとして使用
var tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
      maxZoom: 19
    });
tileLayer.addTo(map);

// マーカー設置
L.marker([35.449410, 137.404914])
 .addTo(map)    
 .bindPopup('恵那文化センター')
 .openPopup();; // 恵那文化センターの緯度,経度を指定してマーカーを立てる

// ルーティング
L.Routing.control({
    waypoints: [
        L.latLng(35.449410, 137.404914),
        L.latLng(35.449447, 137.412828)
    ],
    routeWhileDragging: true
}).addTo(map);
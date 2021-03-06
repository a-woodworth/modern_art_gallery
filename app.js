// Map created using JS Libray Leaflet. Docs at: https://leafletjs.com/ 

const map = L.map('leaflet-map', {
  center: [41.481310, -71.310410],
  zoom: 15,
  dragging: false,
  doubleClickZoom: false,
  minZoom: 13,
  maxZoom: 18,
  scrollWheelZoom: false
});

const mapIcon = L.icon({
  iconUrl: 'assets/icon-location.svg',
  iconSize: [66, 88]
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

L.marker(
  [41.481310, -71.310410], { 
    icon: mapIcon,
    alt: 'Modern Art Gallery marker'
})
.addTo(map)
.bindPopup('Modern Art Gallery');

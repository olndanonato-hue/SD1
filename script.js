// Inicializa o mapa
const map = L.map('map').setView([-23.687682127099368, -46.55284781881374], 15);

// Adiciona o tile layer do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Adiciona um marcador na localização da loja
L.marker([-23.687682127099368, -46.55284781881374])
  .addTo(map)
  .bindPopup("anhanguera sbc <br>R. Atlântica - Jardim do Mar, São Bernardo do Campo - SP, 09750-480")
  .openPopup();

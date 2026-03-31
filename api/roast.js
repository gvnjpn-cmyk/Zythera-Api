const ROASTS = [
  'Otakmu kayak RAM 2GB — cukup buat hidup, tapi nggak buat mikir.',
  'Kamu itu kayak WiFi gratisan — sering bikin harap tapi ujungnya mengecewakan.',
  'Wajahmu bisa jadi alasan orang mematikan lampu sebelum tidur.',
  'Kamu unik, kayak error 404 — ada tapi nggak berguna.',
  'IQ kamu kayak suhu AC — di set rendah biar semua orang nyaman.',
  'Kamu kayak keyboard tanpa spasi — bikin semua orang susah baca maksudmu.',
  'Kalau kebodohan adalah sumber daya alam, kamu sudah kaya raya dari dulu.',
  'Kamu kayak typo di essay penting — kecil tapi bikin semua orang terganggu.',
  'Senyummu itu mematikan — mematikan semangat orang yang lihat.',
  'Kamu kayak charger bootleg — nyambung sebentar, terus bikin frustasi.',
];

export default function handler(req, res) {
  const { target } = req.query;
  const roast = ROASTS[Math.floor(Math.random() * ROASTS.length)];
  res.json({
    roast: target ? `${target}, ${roast.charAt(0).toLowerCase() + roast.slice(1)}` : roast,
    target: target || null,
  });
}

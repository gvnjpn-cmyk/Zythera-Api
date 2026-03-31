const DARES = [
  'Kirim screenshot chat terakhir kamu dengan seseorang.',
  'Lakukan 10 push-up sekarang.',
  'Kirim foto selfie paling jelek yang bisa kamu buat.',
  'Telepon seseorang secara acak dari kontakmu dan bilang "Aku kangen kamu".',
  'Tulis status WA yang memalukan selama 10 menit.',
  'Nyanyikan lagu anak-anak dengan suara sepenuhnya.',
  'Ceritakan mimpi paling aneh yang pernah kamu alami.',
  'Kirim pesan "Halo, aku suka kamu" ke kontak nomor 5 di HPmu.',
  'Tiru gaya bicara orang yang kamu kenal selama 5 menit.',
  'Berikan pujian tulus kepada semua orang di chat ini.',
];

export default function handler(req, res) {
  const tantangan = DARES[Math.floor(Math.random() * DARES.length)];
  res.json({ tantangan, type: 'dare' });
}

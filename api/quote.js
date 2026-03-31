import axios from 'axios';

const FALLBACK = [
  { text: 'Mulailah dari mana kamu berada. Gunakan apa yang kamu miliki. Lakukan apa yang kamu bisa.', author: 'Arthur Ashe' },
  { text: 'Kesuksesan bukan final, kegagalan bukan fatal. Yang penting adalah keberanian untuk terus maju.', author: 'Winston Churchill' },
  { text: 'Jangan hitung hari-harimu, buat hari-harimu terhitung.', author: 'Muhammad Ali' },
  { text: 'Hidup adalah 10% apa yang terjadi padamu dan 90% bagaimana kamu meresponsnya.', author: 'Charles R. Swindoll' },
  { text: 'Satu-satunya cara untuk melakukan pekerjaan hebat adalah mencintai apa yang kamu lakukan.', author: 'Steve Jobs' },
  { text: 'Jika kamu tidak bisa terbang, berlarilah. Jika tidak bisa berlari, berjalanlah. Jika tidak bisa berjalan, merangkaklah. Tapi tetap bergerak maju.', author: 'Martin Luther King Jr.' },
];

export default async function handler(req, res) {
  try {
    const r = await axios.get('https://api.quotable.io/random', { timeout: 5000 });
    res.json({ text: r.data.content, author: r.data.author });
  } catch {
    const q = FALLBACK[Math.floor(Math.random() * FALLBACK.length)];
    res.json(q);
  }
}

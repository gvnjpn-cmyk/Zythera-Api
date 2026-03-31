const ZODIAK = {
  aries:       { emoji: '♈', el: 'Api',  tanggal: '21 Mar - 19 Apr' },
  taurus:      { emoji: '♉', el: 'Tanah', tanggal: '20 Apr - 20 Mei' },
  gemini:      { emoji: '♊', el: 'Udara', tanggal: '21 Mei - 20 Jun' },
  cancer:      { emoji: '♋', el: 'Air',   tanggal: '21 Jun - 22 Jul' },
  leo:         { emoji: '♌', el: 'Api',  tanggal: '23 Jul - 22 Ags' },
  virgo:       { emoji: '♍', el: 'Tanah', tanggal: '23 Ags - 22 Sep' },
  libra:       { emoji: '♎', el: 'Udara', tanggal: '23 Sep - 22 Okt' },
  scorpio:     { emoji: '♏', el: 'Air',   tanggal: '23 Okt - 21 Nov' },
  sagittarius: { emoji: '♐', el: 'Api',  tanggal: '22 Nov - 21 Des' },
  capricorn:   { emoji: '♑', el: 'Tanah', tanggal: '22 Des - 19 Jan' },
  aquarius:    { emoji: '♒', el: 'Udara', tanggal: '20 Jan - 18 Feb' },
  pisces:      { emoji: '♓', el: 'Air',   tanggal: '19 Feb - 20 Mar' },
};

const RAMALAN = [
  'Hari ini adalah hari yang baik untuk memulai sesuatu yang baru. Energimu sedang tinggi!',
  'Fokus pada hubunganmu dengan orang-orang terdekat. Komunikasi adalah kunci hari ini.',
  'Saatnya beristirahat dan mengisi ulang energi. Jangan terlalu keras pada dirimu sendiri.',
  'Peluang besar sedang menunggumu. Jangan ragu untuk mengambil risiko yang terukur.',
  'Hari ini cocok untuk refleksi diri. Pikirkan kembali tujuan jangka panjangmu.',
  'Kreativitasmu sedang di puncak. Manfaatkan ini untuk menyelesaikan proyek yang tertunda.',
  'Perhatikan kesehatanmu hari ini. Istirahat yang cukup dan makan teratur.',
  'Rezekimu sedang mengalir deras. Tapi ingat untuk tetap hemat dan bijak.',
];

const LUCKY = ['1', '7', '13', '21', '33', '42', '8', '16', '27'];
const COLORS = ['Merah 🔴', 'Biru 💙', 'Hijau 💚', 'Kuning 💛', 'Ungu 💜', 'Putih 🤍', 'Hitam 🖤'];

export default function handler(req, res) {
  const zodiak = req.query.zodiak?.toLowerCase();
  if (!zodiak || !ZODIAK[zodiak]) {
    return res.status(400).json({
      error: 'Zodiak tidak valid',
      valid: Object.keys(ZODIAK),
    });
  }
  const z = ZODIAK[zodiak];
  const ramalan = RAMALAN[Math.floor(Math.random() * RAMALAN.length)];
  const lucky   = LUCKY[Math.floor(Math.random() * LUCKY.length)];
  const color   = COLORS[Math.floor(Math.random() * COLORS.length)];

  res.json({
    zodiak:   zodiak.charAt(0).toUpperCase() + zodiak.slice(1),
    emoji:    z.emoji,
    elemen:   z.el,
    tanggal:  z.tanggal,
    ramalan,
    lucky_number: lucky,
    lucky_color:  color,
  });
}

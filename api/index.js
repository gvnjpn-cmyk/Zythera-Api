// ─────────────────────────────────────────────────────────────
//   api/index.js — Root endpoint
// ─────────────────────────────────────────────────────────────
export default function handler(req, res) {
  res.json({
    name:    'Zythera API',
    version: '1.0.0',
    status:  'online',
    endpoints: [
      'GET  /api/tebak/start',
      'POST /api/tebak/guess',
      'GET  /api/dadu',
      'GET  /api/koin',
      'GET  /api/quote',
      'POST /api/pilih',
      'GET  /api/truth',
      'GET  /api/dare',
      'GET  /api/roast',
      'GET  /api/horoscope?zodiak=',
      'GET  /api/siapakah',
    ],
  });
}

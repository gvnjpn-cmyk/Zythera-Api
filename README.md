# Zythera API

API untuk Zythera WhatsApp Bot, di-host di Vercel.

## Endpoints

| Method | Endpoint | Deskripsi |
|---|---|---|
| GET | `/api/` | Info API |
| GET | `/api/dadu` | Lempar dadu |
| GET | `/api/koin` | Lempar koin |
| GET | `/api/quote` | Quote random |
| GET | `/api/truth` | Pertanyaan truth |
| GET | `/api/dare` | Tantangan dare |
| GET | `/api/roast?target=nama` | Roast seseorang |
| GET | `/api/horoscope?zodiak=aries` | Ramalan bintang |
| GET | `/api/siapakah` | Game siapakah |
| GET | `/api/tebak?action=start` | Mulai tebak angka |
| GET | `/api/tebak?action=guess&angka=X&tebakan=Y` | Cek tebakan |
| POST | `/api/pilih` | Pilih random |

## Deploy ke Vercel

1. Push repo ini ke GitHub
2. Buka [vercel.com](https://vercel.com) → New Project → Import repo ini
3. Deploy (otomatis)
4. Copy URL Vercel → set di `.env` bot: `ZYTHERA_API=https://xxx.vercel.app`

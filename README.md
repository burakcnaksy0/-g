# 💜 Şeyma & 22/07 — Bizim Hikâyemiz

Bu web sitesi, **Şeyma için tamamen kişisel, duygusal, sinematik ve mobile-first (önce mobil)** anlayışla hazırlanmış interaktif bir aşk mektubudur.

Klasik hazır şablonlardan uzak; **Şeyma'nın çok sevdiği zambaklar, gece moru atmosferi, zarif cam efektleri (glassmorphism), hafif Supernatural esintileri, Afet'e özel kedi bölümü ve 22/07 canlı zaman sayacı** ile dokunmuştur.

---

## 📱 Mobile-First Deneyim (iPhone & Android Odaklı)

Şeyma'nın bu siteyi büyük olasılıkla telefonundan açacağı düşünülerek **tüm tasarım doğrudan mobil ekranlar için** inşa edilmiştir:
- **`min-height: 100svh`:** Safari ve Chrome Mobile adres çubuğu açılıp kapanmalarında sıçrama yapmaz.
- **Akıcı Tipografi (`clamp`):** Başlıklar dar ekranlarda ekrandan taşmaz, rahat ve doğal satır kırılımlarıyla okunur.
- **Parmak Dostu:** Tüm butonlar ve etkileşimler minimum 44px dokunma alanına sahiptir.
- **Sıfır Yatay Kayma:** `overflow-x: hidden` ile kusursuz dikey akış.
- **Kayan Müzik Butonu:** `env(safe-area-inset-bottom)` desteği sayesinde iPhone alt çizgi çubuğuyla çakışmaz.
- **Dokunmatik Lightbox:** Fotoğrafları büyütüp parmakla sağa-sola kaydırarak (swipe) gezebilirsiniz.

---

## 🌿 Şeyma & Zambak Görsel Kimliği

1. **Şeyma'nın İsmiyle Açılış:**
   - Password ekranında: *"Şeyma, Sana küçük bir sürpriz hazırladım..."*
   - Placeholder: *"Tarihimiz..."*
   - Buton: *"Dünyama Gir ✨"*
   - Doğru şifre (`2207`) girildiğinde: *"Hoş geldin Şeyma. 💜"* mesajı belirir ve ana siteye yumuşakça geçilir.

2. **Hero Bölümünde Zambak Silüetleri:**
   - Ekranın iki kenarında çok hafif salınan (sway) zarif SVG zambak silüetleri.
   - Üstte zarif italik serif ile: *"Şeyma,"*
   - *"Seninle başlayan bir hikâye... ve her geçen gün biraz daha güzelleşen."*

3. **Özel Bölüm: "Şeyma'nın Çiçeği — Zambaklar":**
   - *"Şeyma'nın sevdiği şeylerden biri... Zambaklar."*
   - *"Belki bir çiçeğin seni bu kadar güzel anlatabileceğini düşünmemiştim. Zarif, güzel ve bakınca insanın içini iyi hissettiren..."*
   - Koyu mor gecenin içinde parıldayan beyaz zambak tablosu (`images/seyma_lily.jpg`).
   - **"Bir Zambak Bırak 🌿"** butonu: Ekrana süzülen beyaz zambak yaprakları saçar.

4. **Zarif İsim İmzası:**
   - Sayfa akışında özel bölümler arasında: `✦  Ş E Y M A  ✦`

5. **Şeyma'ya Özel Final:**
   - *"Şeyma,"*
   - *"Eğer bu siteyi hazırlarken hissettiğim her şeyi buraya sığdırabilseydim, muhtemelen bu site hiç bitmezdi."*
   - *"O yüzden sadece şunu söylemek istiyorum..."*
   - **"İyi ki varsın."**
   - *"İyi ki seni tanımışım. İyi ki bizim hikâyemiz başlamış."*
   - `22 • 07 • ∞`
   - *"Seni seviyorum, Şeyma. 💜"*

---

## 📂 Dosya & Medya Yapısı

```text
şş/
├── index.html          # Mobile-first ana sayfa ve tüm bölümler
├── style.css           # Mobile-first CSS, koyu mor/zambak paleti, glassmorphism
├── script.js           # Şifre kontrolü, müzik motoru, zambak efektleri, sayaç
├── README.md           # Kapsamlı rehber
├── images/             # 14 adet özel fotoğrafınız + Şeyma'nın zambağı
│   ├── seyma_lily.jpg  # Zambaklar bölümünde parıldayan beyaz zambak
│   ├── IMG_2680.jpeg   # "Bizim Hikâyemiz" bölümü
│   ├── IMG_2735.jpeg   # "Afet" bölümü (Kedi)
│   ├── IMG_2329.jpeg   # Galeri
│   └── ... (diğer tüm anı fotoğraflarınız)
└── musics/
    └── take-me-there.mp4  # Arka planda çalan Take Me There şarkısı
```

---

## 🛠️ Nasıl Kişiselleştirilir?

`script.js` dosyasının en üstündeki `siteConfig` objesinden dilediğiniz ayarı değiştirebilirsiniz:

```javascript
const siteConfig = {
  girlfriendName: "Şeyma",
  password: "2207",
  relationshipStart: "2026-07-22T00:00:00", // Gerçek tanışma yılınızı yazabilirsiniz
  catName: "Afet",
  musicSrc: "musics/take-me-there.mp4",
  photos: [ ... ]
};
```

---

## 🚀 Yerel Çalıştırma (Telefonda veya Bilgisayarda Test Etme)

Bilgisayarınızda terminal açıp proje klasöründe şu komutu verin:

```bash
python3 -m http.server 5500
```

- **Bilgisayarda:** Tarayıcıda `http://localhost:5500` adresine gidin.
- **Aynı Wi-Fi ağındaki telefonda:** Bilgisayarınızın yerel IP adresiyle (örn: `http://10.41.12.246:5500`) telefonunuzdan açıp doğrudan mobil deneyimi test edebilirsiniz!

---

## 🌐 Ücretsiz & Hızlı Canlıya Alma (Deployment)

### 1. Vercel (Önerilen — En Kolay):
1. Proje klasörünü GitHub'a gönderin veya terminalden:
   ```bash
   npx vercel
   ```
2. Size özel `https://seyma-bizim-hikayemiz.vercel.app` gibi bir bağlantı oluşur. Bu bağlantıyı doğrudan Şeyma'ya gönderebilirsiniz!

### 2. Netlify (Sürükle & Bırak):
1. [app.netlify.com/drop](https://app.netlify.com/drop) adresine girin.
2. Bu proje klasörünü tarayıcıya sürükleyip bırakın.
3. 10 saniye içinde siteniz yayında!

---

💜 *Şeyma'nın her satırında sevildiğini ve zarafetini hissedeceği bir dünya.*

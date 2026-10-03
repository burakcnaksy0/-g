/**
 * ==========================================================================
 * ROMANTİK SEVGİLİ WEBSİTESİ — ŞEYMA & 22/07
 * MOTOR & ETKİLEŞİM SİSTEMİ (MOBILE-FIRST)
 * ==========================================================================
 */

// --- 1. MERKEZİ YAPILANDIRMA (CENTRAL CONFIGURATION) ---
const siteConfig = {
  // Kız arkadaşının adı
  girlfriendName: "Şeyma",

  // Giriş şifresi (Varsayılan: 2207)
  password: "2207",

  // Tanışma / İlişki başlangıç tarihi (YYYY-MM-DDTHH:mm:ss formatında)
  relationshipStart: "2026-07-22T00:00:00",

  // Kedi ismi
  catName: "Afet",

  // Arka plan müzik dosyası
  musicSrc: "musics/take-me-there.mp4",

  // Fotoğraf Galerisi (images/ klasöründeki 14 fotoğrafınız)
  photos: [
    { src: "images/IMG_2329.jpeg", title: "Gülüşün Güzel Ama Gaza Gelme", caption: "Burada muhtemelen bana yine laf sokmadan hemen 2 saniye öncesi." },
    { src: "images/IMG_2680.jpeg", title: "Suç Ortakları", caption: "Birlikteyken hem çok gülüyoruz hem de etrafımızdakileri delirtiyoruz." },
    { src: "images/IMG_2735.jpeg", title: "Afet & Şeyma Koalisyonu", caption: "Beni ısırma planları yaparken yakalandıkları o tarihi an... 🐈" },
    { src: "images/IMG_2135.jpeg", title: "Nadir Sakin Anlarımızdan", caption: "Birbirimizi zorbalamayı unuttuğumuz o nadir 10 dakikadan biri." },
    { src: "images/IMG_2539.jpeg", title: "Şüpheli Bakışlar", caption: "'Acaba yine ne saçmaladı' bakışı tescillendi." },
    { src: "images/IMG_2169.jpeg", title: "Zorla çektirilen fotoğraflar", caption: "Her hatıranın içinde senin o tatlı gıcıklığının olması." },
    { src: "images/IMG_2199.jpeg", title: "Gece Mesaisi", caption: "Gece gece kim kimi daha çok sinir edecek yarışması." },
    { src: "images/IMG_2200.jpeg", title: "Ateşkes İlan Edildi", caption: "Kısa süreli barış antlaşması imzalanmış gibi duruyor." },
    { src: "images/IMG_2311.jpeg", title: "Tatlı", caption: "Zararsız göründüğüne aldanmayın, her an laf sokabilir." },
    { src: "images/IMG_2341.jpeg", title: "Fav Tepsi", caption: "Yolda en az üç kez 'nereden gideceğiz' diye bana akıl vermen garanti." },
    { src: "images/IMG_2344.jpeg", title: "Göz Hapsi", caption: "Beni her an kontrol altında tutma çabaların..." },
    { src: "images/IMG_2593.jpeg", title: "Serumlanmaca", caption: "Bütün bu didişmelerin arasında dünyanın en huzurlu yeri." },
    { src: "images/IMG_9563.jpeg", title: "Bu foto hala komik hshsh", caption: "Sadece ikimizin anladığı bakışmalar ve fısıltılı gülüşmeler." },
    { src: "images/IMG_9564.jpeg", title: "Başımla Beraber", caption: "Seni zorbalamayı da, seninle didişmeyi de çok seviyorum." }
  ]
};

// --- DOM ELEMENTS CACHE ---
const elements = {
  secretScreen: document.getElementById('secretScreen'),
  secretCard: document.getElementById('secretCard'),
  passwordForm: document.getElementById('passwordForm'),
  passwordInput: document.getElementById('passwordInput'),
  inputWrapper: document.getElementById('inputWrapper'),
  passwordError: document.getElementById('passwordError'),
  unlockBtn: document.getElementById('unlockBtn'),
  togglePasswordBtn: document.getElementById('togglePasswordBtn'),
  mainSite: document.getElementById('mainSite'),
  siteHeader: document.getElementById('siteHeader'),
  mobileMenuToggle: document.getElementById('mobileMenuToggle'),
  mobileDrawer: document.getElementById('mobileDrawer'),
  drawerCloseBtn: document.getElementById('drawerCloseBtn'),
  galleryGrid: document.getElementById('galleryGrid'),
  ambientCanvas: document.getElementById('ambientCanvas'),
  cursorGlow: document.getElementById('cursorGlow'),
  bgAudio: document.getElementById('bgAudio'),
  musicPlayer: document.getElementById('musicPlayer'),
  musicPlayToggleBtn: document.getElementById('musicPlayToggleBtn'),
  playIcon: document.getElementById('playIcon'),
  pauseIcon: document.getElementById('pauseIcon'),
  volumeSlider: document.getElementById('volumeSlider'),
  volumeMuteBtn: document.getElementById('volumeMuteBtn'),
  volumeIcon: document.getElementById('volumeIcon'),
  daysVal: document.getElementById('daysVal'),
  hoursVal: document.getElementById('hoursVal'),
  minutesVal: document.getElementById('minutesVal'),
  secondsVal: document.getElementById('secondsVal'),
  afetLoveBtn: document.getElementById('afetLoveBtn'),
  afetPurrFeedback: document.getElementById('afetPurrFeedback'),
  lilyPetalBtn: document.getElementById('lilyPetalBtn'),
  lilyFeedback: document.getElementById('lilyFeedback'),
  bouquetModal: document.getElementById('bouquetModal'),
  bouquetBackdrop: document.getElementById('bouquetBackdrop'),
  bouquetCloseBtn: document.getElementById('bouquetCloseBtn'),
  bouquetStage: document.getElementById('bouquetStage'),
  bouquet3DWrapper: document.getElementById('bouquet3DWrapper'),
  bouquetSpinToggleBtn: document.getElementById('bouquetSpinToggleBtn'),
  spinLabel: document.getElementById('spinLabel'),
  bouquetRainBtn: document.getElementById('bouquetRainBtn'),
  bouquetResetBtn: document.getElementById('bouquetResetBtn'),
  wishBtn: document.getElementById('wishBtn'),
  lightboxModal: document.getElementById('lightboxModal'),
  lightboxBackdrop: document.getElementById('lightboxBackdrop'),
  lightboxCloseBtn: document.getElementById('lightboxCloseBtn'),
  lightboxImg: document.getElementById('lightboxImg'),
  lightboxCaption: document.getElementById('lightboxCaption'),
  lightboxCounter: document.getElementById('lightboxCounter'),
  lightboxPrevBtn: document.getElementById('lightboxPrevBtn'),
  lightboxNextBtn: document.getElementById('lightboxNextBtn')
};

// --- STATE MANAGEMENT ---
let currentLightboxIndex = 0;
let isAudioPlaying = false;
let lastVolume = 0.7;
let touchStartX = 0;
let touchEndX = 0;

// ==========================================================================
// 2. SECRET ENTRY / PASSWORD LOGIC (ŞEYMA'YA ÖZEL)
// ==========================================================================

const roastMessages = [
  "Daha ilk denemede patladın... Cidden unuttun mu? Gözlerim yaşardı valla 🤦‍♂️💀",
  "Şeyma rezil olduk şu an... Balık hafızası modu mu açıldı hayırdır? 🐟😂",
  "Afet'e sorsam klavyeye tek patisiyle doğru basardı, kedi senden daha sadık çıktı 🐈🤦‍♂️",
  "Buzdolabı taşırken bu kadar efor sarf etmedim, azıcık saksıyı çalıştır be kadın! 🧊",
  "Bak parmaklarını kütletirim ha! Dört basamak alt tarafı: GGAA şeklinde yazacaksın 💥",
  "Engellemepls dedik ama sen beni kafadan silmişsin resmen... 22/07 işte insafsız! 🙄",
  "Hâlâ mı yanlış?! Şaka mısın sen ya, otur sıfır! 2207 yazıp gir artık rezil etme bizi 🤦‍♂️💀"
];

const unlockBtnRoasts = [
  "tanışma tarihi pls ✨",
  "Cidden mi? Tekrar dene bari... 🙄",
  "Zorlama, düşün biraz 😂",
  "Afet'e sor istersen? 🐾",
  "Parmak kütletme loading... 💥",
  "2207 yaz kurtul insafsız 🤦‍♂️"
];

const inputPlaceholders = [
  "Tarihimiz...",
  "Unutmadım de lütfen... 🥺",
  "Günün ve ayın sayıları...",
  "İpucu: Temmuz ayı...",
  "2207 işte yaz artık..."
];

let wrongAttempts = 0;
let isSubmittingPassword = false;

function handlePasswordSubmit() {
  if (isSubmittingPassword) return;
  isSubmittingPassword = true;
  setTimeout(() => {
    isSubmittingPassword = false;
  }, 400);

  const entered = elements.passwordInput.value.trim();

  // Boş basıldıysa zorbala
  if (!entered) {
    elements.passwordInput.classList.remove('shake');
    void elements.passwordInput.offsetWidth; // Trigger reflow
    elements.passwordInput.classList.add('shake');

    elements.passwordError.style.color = "#fbcfe8";
    elements.passwordError.style.fontSize = "0.88rem";
    elements.passwordError.textContent = "Boş basarak nereye varmayı hedefliyorsun acaba? Şifreyi yaz bari tembel teneke! 😂";

    setTimeout(() => {
      elements.passwordInput.classList.remove('shake');
    }, 500);
    return;
  }

  if (entered === siteConfig.password) {
    // DOĞRU ŞİFRE
    elements.passwordInput.classList.remove('shake');
    elements.inputWrapper.classList.add('success-glow');
    elements.unlockBtn.classList.add('success-glow');

    // Şeyma'ya özel karşılama mesajı (daha önce yanlış girdiyse ona göre laf sok)
    elements.passwordError.style.color = "#c4b5fd";
    elements.passwordError.style.fontSize = "1.02rem";
    elements.passwordError.style.fontWeight = "600";

    if (wrongAttempts > 0) {
      elements.passwordError.textContent = "Sonunda be! Biraz zorbalanmadan hatırlayamıyorsun... Hoş geldin Şeyma 💜";
    } else {
      elements.passwordError.textContent = "Vay be, tekte bildin! Hoş geldin Şeyma... 💜";
    }

    // Zambak yaprakları, mor kalpler ve yıldız parçacıkları
    createBurstParticles(window.innerWidth / 2, window.innerHeight / 2, 30, ['💜', '✨', '🤍', '🌿', '✦']);

    // Müziği başlatmayı dene (kullanıcı jesti gerçekleşti)
    startMusic();

    // Şeyma hoş geldin mesajını hissetsin diye 800ms bekleyip yumuşakça geç
    setTimeout(() => {
      elements.secretScreen.classList.add('fade-out');
      document.body.classList.remove('is-locked');
      elements.mainSite.classList.add('is-revealed');
      elements.mainSite.setAttribute('aria-hidden', 'false');

      // Scroll reveal & Sayaç başlat
      initScrollReveal();
      startRelationshipCounter();

      setTimeout(() => {
        elements.secretScreen.style.display = 'none';
      }, 900);
    }, 850);

  } else {
    // YANLIŞ ŞİFRE - ZORBALAMA MODU
    elements.passwordInput.classList.remove('shake');
    void elements.passwordInput.offsetWidth; // Trigger reflow
    elements.passwordInput.classList.add('shake');

    elements.passwordError.style.color = "#fbcfe8";
    elements.passwordError.style.fontSize = "0.88rem";

    const msg = roastMessages[Math.min(wrongAttempts, roastMessages.length - 1)];
    elements.passwordError.textContent = msg;

    // Buton metni ve placeholder ile de hafif dalga geç
    const btnSpan = elements.unlockBtn.querySelector('.btn-text');
    if (btnSpan) {
      btnSpan.textContent = unlockBtnRoasts[Math.min(wrongAttempts + 1, unlockBtnRoasts.length - 1)];
    }

    if (wrongAttempts < inputPlaceholders.length - 1) {
      elements.passwordInput.placeholder = inputPlaceholders[wrongAttempts + 1];
    }

    elements.passwordInput.select();
    wrongAttempts++;

    setTimeout(() => {
      elements.passwordInput.classList.remove('shake');
    }, 500);
  }
}

// Şifre Göster / Gizle
let isPasswordVisible = false;
function togglePasswordVisibility() {
  isPasswordVisible = !isPasswordVisible;
  elements.passwordInput.type = isPasswordVisible ? 'text' : 'password';
  const openIcon = elements.togglePasswordBtn.querySelector('.eye-open');
  const closedIcon = elements.togglePasswordBtn.querySelector('.eye-closed');
  if (openIcon && closedIcon) {
    openIcon.style.display = isPasswordVisible ? 'none' : 'block';
    closedIcon.style.display = isPasswordVisible ? 'block' : 'none';
  }
}

// ==========================================================================
// 3. BACKGROUND MUSIC & FLOATING PLAYER
// ==========================================================================

function initMusicPlayer() {
  elements.bgAudio.volume = 0.7;
  if (elements.volumeSlider) elements.volumeSlider.value = 0.7;

  elements.musicPlayToggleBtn.addEventListener('click', toggleMusicPlay);

  if (elements.volumeSlider) {
    elements.volumeSlider.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      elements.bgAudio.volume = val;
      lastVolume = val;
      updateVolumeIcon(val);
    });
  }

  if (elements.volumeMuteBtn) {
    elements.volumeMuteBtn.addEventListener('click', () => {
      if (elements.bgAudio.volume > 0) {
        lastVolume = elements.bgAudio.volume;
        elements.bgAudio.volume = 0;
        if (elements.volumeSlider) elements.volumeSlider.value = 0;
        updateVolumeIcon(0);
      } else {
        const restore = lastVolume > 0 ? lastVolume : 0.7;
        elements.bgAudio.volume = restore;
        if (elements.volumeSlider) elements.volumeSlider.value = restore;
        updateVolumeIcon(restore);
      }
    });
  }

  elements.bgAudio.addEventListener('play', () => {
    isAudioPlaying = true;
    elements.musicPlayer.classList.add('is-playing');
    elements.playIcon.style.display = 'none';
    elements.pauseIcon.style.display = 'block';
  });

  elements.bgAudio.addEventListener('pause', () => {
    isAudioPlaying = false;
    elements.musicPlayer.classList.remove('is-playing');
    elements.playIcon.style.display = 'block';
    elements.pauseIcon.style.display = 'none';
  });
}

function startMusic() {
  elements.bgAudio.play().then(() => {
    isAudioPlaying = true;
  }).catch((err) => {
    console.log("Tarayıcı politikası gereği kullanıcı butona tıklayarak başlatabilir:", err);
  });
}

function toggleMusicPlay() {
  if (elements.bgAudio.paused) {
    elements.bgAudio.play().catch(e => console.log("Play failed:", e));
  } else {
    elements.bgAudio.pause();
  }
}

function updateVolumeIcon(vol) {
  if (!elements.volumeIcon) return;
  if (vol === 0) {
    elements.volumeIcon.innerHTML = `
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
      <line x1="23" y1="9" x2="17" y2="15"></line>
      <line x1="17" y1="9" x2="23" y2="15"></line>
    `;
  } else {
    elements.volumeIcon.innerHTML = `
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
    `;
  }
}

// ==========================================================================
// 4. PHOTO GALLERY & FULLSCREEN LIGHTBOX
// ==========================================================================

function renderGallery() {
  elements.galleryGrid.innerHTML = "";

  siteConfig.photos.forEach((photo, index) => {
    const item = document.createElement('div');
    item.className = 'gallery-item glass-panel reveal-item';
    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');
    item.setAttribute('aria-label', `${photo.title}: Fotoğrafı büyüt`);
    item.dataset.index = index;

    item.innerHTML = `
      <div class="gallery-thumb-wrap">
        <img 
          src="${photo.src}" 
          alt="${photo.title}" 
          loading="lazy" 
          class="gallery-img"
        >
        <div class="gallery-overlay">
          <h3 class="gallery-caption-title">${photo.title}</h3>
          <span class="gallery-caption-hint">
            <span>Büyütmek için dokun</span>
            <span>✨</span>
          </span>
        </div>
      </div>
    `;

    item.addEventListener('click', () => openLightbox(index));
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(index);
      }
    });

    elements.galleryGrid.appendChild(item);
  });
}

function openLightbox(index) {
  currentLightboxIndex = index;
  updateLightboxContent();
  elements.lightboxModal.classList.add('is-active');
  elements.lightboxModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  elements.lightboxModal.classList.remove('is-active');
  elements.lightboxModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function updateLightboxContent() {
  const photo = siteConfig.photos[currentLightboxIndex];
  if (!photo) return;

  elements.lightboxImg.src = photo.src;
  elements.lightboxImg.alt = photo.title;
  elements.lightboxCaption.textContent = photo.caption || photo.title;
  elements.lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${siteConfig.photos.length}`;
}

function nextLightboxPhoto() {
  currentLightboxIndex = (currentLightboxIndex + 1) % siteConfig.photos.length;
  updateLightboxContent();
}

function prevLightboxPhoto() {
  currentLightboxIndex = (currentLightboxIndex - 1 + siteConfig.photos.length) % siteConfig.photos.length;
  updateLightboxContent();
}

function initLightboxListeners() {
  elements.lightboxCloseBtn.addEventListener('click', closeLightbox);
  elements.lightboxBackdrop.addEventListener('click', closeLightbox);
  elements.lightboxNextBtn.addEventListener('click', nextLightboxPhoto);
  elements.lightboxPrevBtn.addEventListener('click', prevLightboxPhoto);

  window.addEventListener('keydown', (e) => {
    if (!elements.lightboxModal.classList.contains('is-active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextLightboxPhoto();
    if (e.key === 'ArrowLeft') prevLightboxPhoto();
  });

  // Mobile Touch Swipe Handling
  elements.lightboxModal.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  elements.lightboxModal.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleTouchSwipe();
  }, { passive: true });
}

function handleTouchSwipe() {
  const diff = touchEndX - touchStartX;
  if (Math.abs(diff) > 45) {
    if (diff < 0) {
      nextLightboxPhoto();
    } else {
      prevLightboxPhoto();
    }
  }
}

// ==========================================================================
// 5. RELATIONSHIP LIVE COUNTER (22 / 07)
// ==========================================================================

function startRelationshipCounter() {
  updateCounterValues();
  setInterval(updateCounterValues, 1000);
}

function updateCounterValues() {
  const startDate = new Date(siteConfig.relationshipStart);
  const now = new Date();
  let diffMs = now - startDate;

  if (diffMs < 0) diffMs = Math.abs(diffMs);

  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  elements.daysVal.textContent = days;
  elements.hoursVal.textContent = String(hours).padStart(2, '0');
  elements.minutesVal.textContent = String(minutes).padStart(2, '0');
  elements.secondsVal.textContent = String(seconds).padStart(2, '0');
}

// ==========================================================================
// 6. INTERACTIVE MOMENTS (AFET, ZAMBAKLAR, DİLEK)
// ==========================================================================

// Afet Feedback List
const afetFeedbacks = [
  "Afet mırıldanarak sana teşekkür ediyor! 🐾",
  "Afet kendini sevdirmek için kucağına zıpladı! 🐈",
  "Afet sevgi dolu bir miyavlama bıraktı! 💕",
  "Afet patisini uzattı: 'Biraz daha mama lütfen!' 👑",
  "Afet çok mutlu oldu ve guruldamaya başladı! 💜"
];
let afetFeedbackIndex = 0;

function initAfetButton() {
  elements.afetLoveBtn.addEventListener('click', () => {
    const rect = elements.afetLoveBtn.getBoundingClientRect();
    createBurstParticles(rect.left + rect.width / 2, rect.top + rect.height / 2, 16, ['🐾', '💕', '💜', '✨']);

    elements.afetPurrFeedback.textContent = afetFeedbacks[afetFeedbackIndex % afetFeedbacks.length];
    afetFeedbackIndex++;

    elements.afetPurrFeedback.style.opacity = '1';
    setTimeout(() => {
      elements.afetPurrFeedback.style.opacity = '0.85';
    }, 2500);
  });
}

// Zambak Petal Button & 3D Bouquet Launcher
const lilyFeedbacks = [
  "Zambak fırlatıldı! (Ama zorbalama kotan dolmadı) 🌿",
  "Kocaman bir zambak buketi açıldı! 💐",
  "Zambak gibi zarifsin (Tabii damarına basılmadığı sürece) 🤍",
  "Tamam tamam, en zambak sensin... 💜",
  "Gecenin ortasında parlayan tek zambak ✨"
];
let lilyFeedbackIndex = 0;

function initLilyButton() {
  if (!elements.lilyPetalBtn) return;
  elements.lilyPetalBtn.addEventListener('click', () => {
    const rect = elements.lilyPetalBtn.getBoundingClientRect();
    createBurstParticles(rect.left + rect.width / 2, rect.top + rect.height / 2, 22, ['🌿', '🤍', '✨', '✦', '🌸', '💐']);

    // Open the 3D bouquet showcase modal
    openBouquetModal();

    if (elements.lilyFeedback) {
      elements.lilyFeedback.textContent = lilyFeedbacks[lilyFeedbackIndex % lilyFeedbacks.length];
      lilyFeedbackIndex++;
      elements.lilyFeedback.style.opacity = '1';
      setTimeout(() => {
        elements.lilyFeedback.style.opacity = '0.85';
      }, 3000);
    }
  });
}

// ==========================================================================
// 6.5. 3D LILY BOUQUET SHOWCASE MODAL (INTERACTIVE 360° ENGINE)
// ==========================================================================

const bouquet3DState = {
  currentRotX: 8,
  currentRotY: 0,
  targetRotX: 8,
  targetRotY: 0,
  isAutoSpinning: true,
  isDragging: false,
  lastPointerX: 0,
  lastPointerY: 0,
  rafId: null,
  isOpen: false
};

function bouquetAnimationLoop() {
  if (!bouquet3DState.isOpen) return;

  if (!bouquet3DState.isDragging && bouquet3DState.isAutoSpinning) {
    bouquet3DState.targetRotY += 0.45;
  }

  // Smooth damping / interpolation (lerp)
  bouquet3DState.currentRotX += (bouquet3DState.targetRotX - bouquet3DState.currentRotX) * 0.12;
  bouquet3DState.currentRotY += (bouquet3DState.targetRotY - bouquet3DState.currentRotY) * 0.12;

  if (elements.bouquet3DWrapper) {
    elements.bouquet3DWrapper.style.transform =
      `rotateX(${bouquet3DState.currentRotX.toFixed(2)}deg) rotateY(${bouquet3DState.currentRotY.toFixed(2)}deg)`;
  }

  bouquet3DState.rafId = requestAnimationFrame(bouquetAnimationLoop);
}

function openBouquetModal() {
  if (!elements.bouquetModal) return;
  bouquet3DState.isOpen = true;
  elements.bouquetModal.classList.add('is-active');
  elements.bouquetModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Confetti / lily petal explosion
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;
  createBurstParticles(cx, cy, 32, ['💐', '🤍', '🌿', '✨', '🌸', '💜']);

  // Reset to initial orientation
  bouquet3DState.targetRotX = 8;
  bouquet3DState.targetRotY = 0;
  bouquet3DState.currentRotX = 8;
  bouquet3DState.currentRotY = 0;

  if (bouquet3DState.rafId) cancelAnimationFrame(bouquet3DState.rafId);
  bouquet3DState.rafId = requestAnimationFrame(bouquetAnimationLoop);
}

function closeBouquetModal() {
  if (!elements.bouquetModal) return;
  bouquet3DState.isOpen = false;
  elements.bouquetModal.classList.remove('is-active');
  elements.bouquetModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (bouquet3DState.rafId) {
    cancelAnimationFrame(bouquet3DState.rafId);
    bouquet3DState.rafId = null;
  }
}

function initBouquet3D() {
  if (!elements.bouquetModal || !elements.bouquetStage) return;

  // Pointer drag controls (Touch & Mouse unified)
  elements.bouquetStage.addEventListener('pointerdown', (e) => {
    bouquet3DState.isDragging = true;
    bouquet3DState.lastPointerX = e.clientX;
    bouquet3DState.lastPointerY = e.clientY;
    try {
      elements.bouquetStage.setPointerCapture(e.pointerId);
    } catch (_) { }
    elements.bouquetStage.style.cursor = 'grabbing';
  });

  elements.bouquetStage.addEventListener('pointermove', (e) => {
    if (!bouquet3DState.isDragging) return;
    const deltaX = e.clientX - bouquet3DState.lastPointerX;
    const deltaY = e.clientY - bouquet3DState.lastPointerY;
    bouquet3DState.lastPointerX = e.clientX;
    bouquet3DState.lastPointerY = e.clientY;

    // Pitch & Yaw rotation
    bouquet3DState.targetRotY += deltaX * 0.55;
    bouquet3DState.targetRotX -= deltaY * 0.5;

    // Pitch limit (-55deg to +55deg)
    if (bouquet3DState.targetRotX > 55) bouquet3DState.targetRotX = 55;
    if (bouquet3DState.targetRotX < -55) bouquet3DState.targetRotX = -55;
  });

  const stopDrag = (e) => {
    if (bouquet3DState.isDragging) {
      bouquet3DState.isDragging = false;
      try {
        if (e && e.pointerId) elements.bouquetStage.releasePointerCapture(e.pointerId);
      } catch (_) { }
      elements.bouquetStage.style.cursor = 'grab';
    }
  };

  elements.bouquetStage.addEventListener('pointerup', stopDrag);
  elements.bouquetStage.addEventListener('pointercancel', stopDrag);

  // Auto-spin toggle button
  if (elements.bouquetSpinToggleBtn) {
    elements.bouquetSpinToggleBtn.addEventListener('click', () => {
      bouquet3DState.isAutoSpinning = !bouquet3DState.isAutoSpinning;
      if (elements.spinLabel) {
        elements.spinLabel.textContent = `Otomatik Döndür: ${bouquet3DState.isAutoSpinning ? 'Açık' : 'Kapalı'}`;
      }
      createBurstParticles(
        elements.bouquetSpinToggleBtn.getBoundingClientRect().left + 40,
        elements.bouquetSpinToggleBtn.getBoundingClientRect().top,
        8,
        ['🔄', '✨', '💜']
      );
    });
  }

  // Rain button
  if (elements.bouquetRainBtn) {
    elements.bouquetRainBtn.addEventListener('click', () => {
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          const randX = Math.random() * window.innerWidth;
          const randY = 100 + Math.random() * (window.innerHeight - 200);
          createBurstParticles(randX, randY, 16, ['🌸', '🤍', '🌿', '✨', '💐', '💜']);
        }, i * 250);
      }
    });
  }

  // Reset angle button
  if (elements.bouquetResetBtn) {
    elements.bouquetResetBtn.addEventListener('click', () => {
      bouquet3DState.targetRotX = 8;
      bouquet3DState.targetRotY = 0;
      createBurstParticles(
        elements.bouquetResetBtn.getBoundingClientRect().left + 40,
        elements.bouquetResetBtn.getBoundingClientRect().top,
        6,
        ['🎯', '✨']
      );
    });
  }

  // Close triggers
  if (elements.bouquetCloseBtn) {
    elements.bouquetCloseBtn.addEventListener('click', closeBouquetModal);
  }
  if (elements.bouquetBackdrop) {
    elements.bouquetBackdrop.addEventListener('click', closeBouquetModal);
  }

  // Keyboard escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && bouquet3DState.isOpen) {
      closeBouquetModal();
    }
  });
}

// Wish Button
const wishResponses = [
  "Dilek Tutuldu: Birlikte hep böyle gülüşmeye devam... ✨",
  "Dileğin İletildi: Şeyma yine haklı çıktı 💜",
  "Dilek Kabul Edildi: Afet bugün seni ısırmayacakmış 🐾",
  "Dilek Tutuldu: Dünyanın en tatlı çifti tescillendi! 💫"
];
let wishIndex = 0;

function initWishButton() {
  elements.wishBtn.addEventListener('click', () => {
    const rect = elements.wishBtn.getBoundingClientRect();
    createBurstParticles(rect.left + rect.width / 2, rect.top + rect.height / 2, 35, ['✦', '✨', '⭐', '💜', '🤍', '💫']);

    const response = wishResponses[wishIndex % wishResponses.length];
    wishIndex++;

    elements.wishBtn.innerHTML = `<span>${response}</span>`;
    setTimeout(() => {
      elements.wishBtn.innerHTML = `<span>Bir Dilek Tut (Umarım Ben Haklı Çıkarım) ✨</span>`;
    }, 3500);
  });
}

// Particle Generator
function createBurstParticles(originX, originY, count = 12, emojis = ['💜', '✨']) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'floating-particle';
    particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    const angle = Math.random() * Math.PI * 2;
    const distance = 50 + Math.random() * 90;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance - 25;

    particle.style.left = `${originX}px`;
    particle.style.top = `${originY}px`;
    particle.style.setProperty('--tx', `${tx}px`);
    particle.style.setProperty('--ty', `${ty}px`);
    particle.style.fontSize = `${13 + Math.random() * 12}px`;

    document.body.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 1500);
  }
}

// Ambient Click Sparkles
function initClickSparkles() {
  document.addEventListener('click', (e) => {
    if (elements.mainSite.classList.contains('is-revealed') && !e.target.closest('button') && !e.target.closest('input')) {
      createBurstParticles(e.clientX, e.clientY, 3, ['💜', '✦', '🤍']);
    }
  });
}

// ==========================================================================
// 7. AMBIENT CANVAS (Mobile-optimized gentle stars)
// ==========================================================================

function initAmbientCanvas() {
  const canvas = elements.ambientCanvas;
  if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let mouse = { x: null, y: null };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initParticles();
  }

  function initParticles() {
    particles = [];
    // Mobile: reduce count for battery saving
    const count = Math.min(Math.floor((width * height) / 22000), 50);

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.3,
        alpha: Math.random() * 0.65 + 0.2,
        speedX: (Math.random() - 0.5) * 0.18,
        speedY: (Math.random() - 0.5) * 0.18,
        pulseSpeed: Math.random() * 0.015 + 0.005,
        color: Math.random() > 0.4 ? '167, 139, 250' : '255, 255, 255'
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      p.alpha += Math.sin(Date.now() * p.pulseSpeed) * 0.004;
      const safeAlpha = Math.max(0.1, Math.min(0.85, p.alpha));

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color}, ${safeAlpha})`;
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    if (elements.cursorGlow) {
      elements.cursorGlow.style.left = `${e.clientX}px`;
      elements.cursorGlow.style.top = `${e.clientY}px`;
    }
  });

  resize();
  draw();
}

// ==========================================================================
// 8. SCROLL REVEAL (INTERSECTION OBSERVER)
// ==========================================================================

function initScrollReveal() {
  const items = document.querySelectorAll('.reveal-item');
  if (!items.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
  });

  items.forEach(item => observer.observe(item));
}

// ==========================================================================
// 9. NAVIGATION & MOBILE DRAWER
// ==========================================================================

function initNavigation() {
  const toggleDrawer = () => {
    const isExpanded = elements.mobileMenuToggle.getAttribute('aria-expanded') === 'true';
    elements.mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
    elements.mobileDrawer.classList.toggle('is-active');
    elements.mobileDrawer.setAttribute('aria-hidden', isExpanded);
  };

  elements.mobileMenuToggle.addEventListener('click', toggleDrawer);
  if (elements.drawerCloseBtn) {
    elements.drawerCloseBtn.addEventListener('click', toggleDrawer);
  }

  // Close mobile drawer when clicking any link
  document.querySelectorAll('.mobile-nav-link, .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      elements.mobileDrawer.classList.remove('is-active');
      elements.mobileMenuToggle.setAttribute('aria-expanded', 'false');
      elements.mobileDrawer.setAttribute('aria-hidden', 'true');
    });
  });
}

// ==========================================================================
// 10. APP INITIALIZATION
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  elements.passwordForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handlePasswordSubmit();
  });

  elements.unlockBtn.addEventListener('click', handlePasswordSubmit);
  elements.togglePasswordBtn.addEventListener('click', togglePasswordVisibility);

  initAmbientCanvas();
  initMusicPlayer();
  renderGallery();
  initLightboxListeners();
  initAfetButton();
  initLilyButton();
  initBouquet3D();
  initWishButton();
  initClickSparkles();
  initNavigation();

  elements.passwordInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handlePasswordSubmit();
    }
  });

  console.log("%c💜 Şeyma için hazırlandı. Bizim tarihimiz: 22/07", "color: #c4b5fd; font-size: 14px; font-weight: bold;");
});

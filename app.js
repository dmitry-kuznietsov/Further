// Направления и данные для карточек.
const destinations = [
  { name: 'Рим', search: 'Рим (ROM)', code: 'ROM', region: 'europe', country: 'Италия 🇮🇹', image: 'rome', alt: 'Рим на закате', description: 'Солнце, площади, паста', airports: 'Фьюмичино · Чампино', idea: 'Трастевере и Колизей', tone: 'peach' },
  { name: 'Киото', search: 'Киото — Осака (KIX)', code: 'KIX', region: 'asia', country: 'Япония 🇯🇵', image: 'kyoto', alt: 'Традиционная улица в Киото весной', description: 'Тихие улочки и храмы', airports: 'Кансай (Осака)', idea: 'Гион и Фусими Инари', tone: 'lavender' },
  { name: 'Лиссабон', search: 'Лиссабон (LIS)', code: 'LIS', region: 'europe', country: 'Португалия 🇵🇹', image: 'lisbon', alt: 'Жёлтый трамвай на улице Лиссабона', description: 'Трамваи и океанский воздух', airports: 'Умберту Делгаду', idea: 'Алфама и Белен', tone: 'yellow' },
  { name: 'Бангкок', search: 'Бангкок (BKK)', code: 'BKK', region: 'asia', country: 'Таиланд 🇹🇭', image: 'bangkok', alt: 'Бангкок у реки на закате', description: 'Энергия большого города', airports: 'Суварнабхуми · Донмыанг', idea: 'Ват Арун и речные рынки', tone: 'mint' },
  { name: 'Париж', search: 'Париж (PAR)', code: 'PAR', region: 'europe', country: 'Франция 🇫🇷', image: 'paris', alt: 'Парижская улица и Эйфелева башня', description: 'Кофе и длинные прогулки', airports: 'Шарль-де-Голль · Орли', idea: 'Маре и Монмартр', tone: 'cream' },
  { name: 'Сеул', search: 'Сеул (SEL)', code: 'SEL', region: 'asia', country: 'Южная Корея 🇰🇷', image: 'seoul', alt: 'Дворец и современный Сеул вечером', description: 'Старое рядом с новым', airports: 'Инчхон · Кимпхо', idea: 'Букчон и дворцы', tone: 'blue' },
  { name: 'Барселона', search: 'Барселона (BCN)', code: 'BCN', region: 'europe', country: 'Испания 🇪🇸', image: 'barcelona', alt: 'Мозаика парка Гуэль в Барселоне', description: 'Цвет, солнце и море', airports: 'Эль-Прат', idea: 'Парк Гуэль и Готический квартал', tone: 'coral' },
  { name: 'Бали', search: 'Бали (DPS)', code: 'DPS', region: 'asia', country: 'Индонезия 🇮🇩', image: 'bali', alt: 'Зелёные рисовые террасы на Бали', description: 'Рисовые поля и океан', airports: 'Нгурах-Рай', idea: 'Убуд и рисовые террасы', tone: 'green' },
  { name: 'Афины', search: 'Афины (ATH)', code: 'ATH', region: 'europe', country: 'Греция 🇬🇷', image: 'athens', alt: 'Акрополь над Афинами вечером', description: 'Античность и море', airports: 'Элефтериос Венизелос', idea: 'Акрополь и Плака', tone: 'sky' },
  { name: 'Сингапур', search: 'Сингапур (SIN)', code: 'SIN', region: 'asia', country: 'Сингапур 🇸🇬', image: 'singapore', alt: 'Сады у залива в Сингапуре', description: 'Сад в центре будущего', airports: 'Чанги', idea: 'Сады у залива и Марина-Бэй', tone: 'pink' },
  { name: 'Стамбул', search: 'Стамбул (IST)', code: 'IST', region: 'europe', country: 'Турция 🇹🇷', image: 'istanbul', alt: 'Стамбул и Босфор вечером', description: 'Два берега, тысяча историй', airports: 'Стамбул · Сабиха Гёкчен', idea: 'Босфор и Галата', tone: 'lime' },
  { name: 'Ханой', search: 'Ханой (HAN)', code: 'HAN', region: 'asia', country: 'Вьетнам 🇻🇳', image: 'hanoi', alt: 'Улица Ханоя утром', description: 'Улочки и ароматный кофе', airports: 'Нойбай', idea: 'Старый квартал и Хоанкием', tone: 'sand' },
  { name: 'Амстердам', search: 'Амстердам (AMS)', code: 'AMS', region: 'europe', country: 'Нидерланды 🇳🇱', image: 'amsterdam', alt: 'Каналы и старинные дома Амстердама', description: 'Каналы, велосипеды, уют', airports: 'Схипхол', idea: 'Йордан и музейный квартал', tone: 'blue' },
  { name: 'Токио', search: 'Токио (TYO)', code: 'TYO', region: 'asia', country: 'Япония 🇯🇵', image: 'tokyo', alt: 'Вечерний Токио', description: 'Город ярких контрастов', airports: 'Ханэда · Нарита', idea: 'Сибуя и Асакуса', tone: 'lavender' },
  { name: 'Вена', search: 'Вена (VIE)', code: 'VIE', region: 'europe', country: 'Австрия 🇦🇹', image: 'vienna', alt: 'Дворец Бельведер в Вене', description: 'Кофейни и имперские фасады', airports: 'Вена-Швехат', idea: 'Бельведер и старый город', tone: 'cream' },
  { name: 'Дубай', search: 'Дубай (DXB)', code: 'DXB', region: 'asia', country: 'ОАЭ 🇦🇪', image: 'dubai', alt: 'Вечерняя панорама Дубая', description: 'Архитектура будущего', airports: 'Международный Дубай · Аль-Мактум', idea: 'Бурдж-Халифа и старые рынки', tone: 'yellow' },
  { name: 'Прага', search: 'Прага (PRG)', code: 'PRG', region: 'europe', country: 'Чехия 🇨🇿', image: 'prague', alt: 'Карлов мост и башни Праги', description: 'Мосты и старые улицы', airports: 'Вацлав Гавел', idea: 'Карлов мост и Пражский град', tone: 'peach' },
  { name: 'Гонконг', search: 'Гонконг (HKG)', code: 'HKG', region: 'asia', country: 'Гонконг 🇭🇰', image: 'hongkong', alt: 'Залив Виктория в Гонконге', description: 'Огни, паромы и высота', airports: 'Международный Гонконг', idea: 'Пик Виктория и набережная', tone: 'mint' },
  { name: 'Будапешт', search: 'Будапешт (BUD)', code: 'BUD', region: 'europe', country: 'Венгрия 🇭🇺', image: 'budapest', alt: 'Парламент Будапешта у Дуная', description: 'Огни на берегах Дуная', airports: 'Ференц Лист', idea: 'Парламент и Рыбацкий бастион', tone: 'sky' },
  { name: 'Куала-Лумпур', search: 'Куала-Лумпур (KUL)', code: 'KUL', region: 'asia', country: 'Малайзия 🇲🇾', image: 'kualalumpur', alt: 'Башни Петронас в Куала-Лумпуре', description: 'Небоскрёбы и зелёные парки', airports: 'Международный Куала-Лумпур', idea: 'Башни Петронас и Бату', tone: 'pink' },
  { name: 'Мадрид', search: 'Мадрид (MAD)', code: 'MAD', region: 'europe', country: 'Испания 🇪🇸', image: 'madrid', alt: 'Улица Гран-Виа в Мадриде', description: 'Поздние ужины и искусство', airports: 'Адольфо Суарес Мадрид-Барахас', idea: 'Прадо и парк Ретиро', tone: 'coral' },
  { name: 'Дели', search: 'Дели (DEL)', code: 'DEL', region: 'asia', country: 'Индия 🇮🇳', image: 'delhi', alt: 'Ворота Индии в Дели', description: 'Истории на каждом шагу', airports: 'Индира Ганди', idea: 'Ворота Индии и Старый Дели', tone: 'sand' },
  { name: 'Берлин', search: 'Берлин (BER)', code: 'BER', region: 'europe', country: 'Германия 🇩🇪', image: 'berlin', alt: 'Бранденбургские ворота в Берлине', description: 'Свобода и новые идеи', airports: 'Берлин-Бранденбург', idea: 'Музейный остров и Кройцберг', tone: 'lime' },
  { name: 'Абу-Даби', search: 'Абу-Даби (AUH)', code: 'AUH', region: 'asia', country: 'ОАЭ 🇦🇪', image: 'abudhabi', alt: 'Мечеть шейха Зайда в Абу-Даби', description: 'Белый камень и солнце', airports: 'Заид', idea: 'Мечеть шейха Зайда и Лувр', tone: 'green' }
];

// Популярные аэропорты и справочник стран.
const airports = [
  ['София', 'SOF', 'Болгария', '🇧🇬'], ['Лондон', 'LON', 'Великобритания', '🇬🇧'], ['Париж', 'PAR', 'Франция', '🇫🇷'], ['Рим', 'ROM', 'Италия', '🇮🇹'],
  ['Милан', 'MIL', 'Италия', '🇮🇹'], ['Берлин', 'BER', 'Германия', '🇩🇪'], ['Мюнхен', 'MUC', 'Германия', '🇩🇪'], ['Амстердам', 'AMS', 'Нидерланды', '🇳🇱'],
  ['Барселона', 'BCN', 'Испания', '🇪🇸'], ['Мадрид', 'MAD', 'Испания', '🇪🇸'], ['Лиссабон', 'LIS', 'Португалия', '🇵🇹'], ['Афины', 'ATH', 'Греция', '🇬🇷'],
  ['Прага', 'PRG', 'Чехия', '🇨🇿'], ['Вена', 'VIE', 'Австрия', '🇦🇹'], ['Будапешт', 'BUD', 'Венгрия', '🇭🇺'], ['Варшава', 'WAW', 'Польша', '🇵🇱'],
  ['Бухарест', 'BUH', 'Румыния', '🇷🇴'], ['Стамбул', 'IST', 'Турция', '🇹🇷'], ['Анталья', 'AYT', 'Турция', '🇹🇷'], ['Дубай', 'DXB', 'ОАЭ', '🇦🇪'],
  ['Абу-Даби', 'AUH', 'ОАЭ', '🇦🇪'], ['Доха', 'DOH', 'Катар', '🇶🇦'], ['Токио', 'TYO', 'Япония', '🇯🇵'], ['Осака', 'OSA', 'Япония', '🇯🇵'],
  ['Киото — Осака', 'KIX', 'Япония', '🇯🇵'], ['Сеул', 'SEL', 'Южная Корея', '🇰🇷'], ['Бангкок', 'BKK', 'Таиланд', '🇹🇭'], ['Сингапур', 'SIN', 'Сингапур', '🇸🇬'],
  ['Ханой', 'HAN', 'Вьетнам', '🇻🇳'], ['Хошимин', 'SGN', 'Вьетнам', '🇻🇳'], ['Куала-Лумпур', 'KUL', 'Малайзия', '🇲🇾'], ['Бали', 'DPS', 'Индонезия', '🇮🇩'],
  ['Гонконг', 'HKG', 'Китай', '🇭🇰'], ['Пекин', 'BJS', 'Китай', '🇨🇳'], ['Шанхай', 'SHA', 'Китай', '🇨🇳'], ['Дели', 'DEL', 'Индия', '🇮🇳'], ['Мумбаи', 'BOM', 'Индия', '🇮🇳']
].map(([name, code, country, flag]) => ({ name, code, country, flag, countryCode: [...flag].map((char) => String.fromCharCode(char.codePointAt(0) - 127397)).join(''), rank: 3 }));

const metroAirports = {
  LON: ['LHR', 'LGW', 'LTN', 'STN', 'LCY', 'SEN'],
  PAR: ['CDG', 'ORY', 'BVA'], ROM: ['FCO', 'CIA'], MIL: ['MXP', 'LIN', 'BGY'],
  BUH: ['OTP', 'BBU'], TYO: ['HND', 'NRT'], OSA: ['KIX', 'ITM'],
  SEL: ['ICN', 'GMP'], BJS: ['PEK', 'PKX']
};
const metroAliases = new Map(Object.entries(metroAirports).flatMap(([metro, codes]) => codes.map((code) => [code, airports.find((item) => item.code === metro)?.name || ''])));
const airportDisplayNames = {
  LHR: 'Лондон — Хитроу', LGW: 'Лондон — Гатвик', LTN: 'Лондон — Лутон', STN: 'Лондон — Станстед', LCY: 'Лондон — Сити', SEN: 'Лондон — Саутенд',
  CDG: 'Париж — Шарль-де-Голль', ORY: 'Париж — Орли', BVA: 'Париж — Бове',
  FCO: 'Рим — Фьюмичино', CIA: 'Рим — Чампино', MXP: 'Милан — Мальпенса', LIN: 'Милан — Линате', BGY: 'Милан — Бергамо',
  OTP: 'Бухарест — Отопени', BBU: 'Бухарест — Бэняса', HND: 'Токио — Ханэда', NRT: 'Токио — Нарита', ITM: 'Осака — Итами',
  ICN: 'Сеул — Инчхон', GMP: 'Сеул — Кимпхо', PEK: 'Пекин — Шоуду', PKX: 'Пекин — Дасин'
};

const countryNames = new Intl.DisplayNames(['ru'], { type: 'region' });
const countryNamesEnglish = new Intl.DisplayNames(['en'], { type: 'region' });
const countryFlag = (code) => /^[A-Z]{2}$/.test(code) ? [...code].map((char) => String.fromCodePoint(char.charCodeAt(0) + 127397)).join('') : '✈';
const supportedCountries = new Set(`AL AD AT AZ BY BE BA BG HR CY CZ DK EE FI FR DE GR HU IS IE IT XK LV LI LT LU MT MD MC ME NL MK NO PL PT RO RU SM RS SK SI ES SE CH TR UA GB VA AX FO GI GG IM JE AF AM BH BD BT BN KH CN GE HK IN ID IR IQ IL JP JO KZ KW KG LA LB MO MY MV MN MM NP KP OM PK PS PH QA SA SG KR LK SY TW TJ TH TL TM AE UZ VN YE`.split(' '));
const normalizeSearch = (value) => String(value).toLocaleLowerCase('ru-RU').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
let airportCatalog = airports;
let availableCountries = [];

function updateCountries() {
  const counts = new Map();
  airportCatalog.forEach((item) => counts.set(item.countryCode, (counts.get(item.countryCode) || 0) + 1));
  availableCountries = [...counts].filter(([code]) => code).map(([code, count]) => ({ code, count, name: countryNames.of(code) || code, flag: countryFlag(code) })).sort((a, b) => a.name.localeCompare(b.name, 'ru'));
}
updateCountries();

// Загрузка полного каталога аэропортов.
fetch('./airport-catalog.json').then((response) => {
  if (!response.ok) throw new Error('Airport catalog unavailable');
  return response.json();
}).then((rows) => {
  const knownCodes = new Set(airports.map((item) => item.code));
  const additional = rows.filter((row) => supportedCountries.has(row[2]) && !knownCodes.has(row[1])).map(([name, code, countryCode, airportName, rank]) => ({ name: airportDisplayNames[code] || name, code, countryCode, country: countryNames.of(countryCode) || countryCode, countryEnglish: countryNamesEnglish.of(countryCode) || countryCode, airportName, aliases: `${metroAliases.get(code) || ''} ${name}`, flag: countryFlag(countryCode), rank }));
  airportCatalog = [...airports, ...additional];
  updateCountries();
  [origin, destination].forEach((input) => { if (!document.querySelector(`#${input.id}-options`).hidden) renderCityOptions(input); });
}).catch(() => { /* Popular airports remain available if the catalog cannot load. */ });

// Общие элементы страницы и переключение темы.
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const themeToggle = $('#theme-toggle');
function syncTheme() {
  const dark = document.documentElement.dataset.theme === 'dark';
  themeToggle.setAttribute('aria-label', dark ? 'Включить светлую тему' : 'Включить тёмную тему');
  themeToggle.setAttribute('aria-pressed', String(dark));
  $('.theme-toggle-text').textContent = dark ? 'Светлая тема' : 'Тёмная тема';
  $('meta[name="theme-color"]').content = dark ? '#101724' : '#f6f8fc';
}
themeToggle.addEventListener('click', () => {
  document.documentElement.dataset.theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem('dalshe-theme', document.documentElement.dataset.theme); } catch (error) { /* Keep theme for this visit. */ }
  syncTheme();
});
syncTheme();
// Состояние формы поиска.
const form = $('#flight-form');
const origin = $('#origin');
const destination = $('#destination');
const message = $('#form-message');
const today = new Date();
today.setHours(12, 0, 0, 0);
const addDays = (date, count) => { const result = new Date(date); result.setDate(result.getDate() + count); return result; };
const pad = (value) => String(value).padStart(2, '0');
const iso = (date) => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
const parseISO = (value) => new Date(`${value}T12:00:00`);
const todayISO = iso(today);
const dates = { departure: iso(addDays(today, 28)), return: iso(addDays(today, 35)) };
let passengers = 1;

// Генерация карточек направлений.
$('#destination-grid').innerHTML = destinations.map((item, index) => `
  <article class="destination-card tone-${item.tone} reveal" data-region="${item.region}" style="--delay:${(index % 4) * 60}ms">
    <button class="destination-action" type="button" data-code="${item.code}" data-name="${item.search}" aria-label="Выбрать направление: ${item.name}">
      <span class="card-photo"><img src="./assets/${item.image}.webp" alt="${item.alt}" loading="lazy"><span class="card-badge">${item.country}</span></span>
      <span class="card-body"><span><small>${pad(index + 1)} / ${item.region === 'europe' ? 'ЕВРОПА' : 'АЗИЯ'}</small><strong>${item.name}</strong><span class="card-description">${item.description}</span></span></span>
      <span class="card-details"><span><small>АЭРОПОРТЫ</small><strong>${item.airports}</strong></span><span><small>ЧТО ПОСМОТРЕТЬ</small><strong>${item.idea}</strong></span></span>
    </button>
    ${item.code === 'ROM' ? '<a class="city-card-link" href="./city.html?city=ROM">Путеводитель по городу ↗</a>' : item.code === 'KIX' ? '<a class="city-card-link" href="./cities/kyoto.html">Путеводитель по городу ↗</a>' : ''}
  </article>`).join('');

function showMessage(text, error = false) { message.textContent = text; message.classList.toggle('error', error); }
// Баннер и карусель городов.
const ideaPool = [10, 0, 3, 4, 7, 5, 1, 2, 6, 8, 9, 11].map((index) => destinations[index]);
let ideaIndex = 0;
const ideaPhoto = $('.spotlight-image');
const ideaRail = $('#idea-rail');
const ideaPlayToggle = $('#idea-play-toggle');
ideaRail.innerHTML = ideaPool.map((item, index) => `<button class="spotlight-option${index === 0 ? ' is-active' : ''}" type="button" data-idea-index="${index}" aria-pressed="${index === 0}"><img src="./assets/${item.image}.webp" alt="" loading="lazy"><span>${escapeHTML(item.name)}</span></button>`).join('');
let ideaRequest = 0;
function showIdea(index) {
  if (index === ideaIndex) return;
  ideaIndex = index;
  const item = ideaPool[ideaIndex];
  ideaPhoto.classList.add('is-switching');
  const image = $('#idea-image');
  const nextImage = new Image();
  const request = ++ideaRequest;
  let settled = false;
  const update = () => {
    if (request !== ideaRequest || settled) return;
    settled = true;
    image.src = nextImage.src;
    image.alt = item.alt;
    $('#idea-city').textContent = item.name;
    $('#idea-counter').textContent = `${pad(ideaIndex + 1)} / ${pad(ideaPool.length)}`;
    $$('.spotlight-option').forEach((button) => { const selected = Number(button.dataset.ideaIndex) === ideaIndex; button.classList.toggle('is-active', selected); button.setAttribute('aria-pressed', String(selected)); });
    const active = ideaRail.querySelector('.is-active');
    const railRect = ideaRail.getBoundingClientRect();
    const activeRect = active.getBoundingClientRect();
    ideaRail.scrollTo({ left: ideaRail.scrollLeft + activeRect.left - railRect.left - (railRect.width - activeRect.width) / 2, behavior: 'smooth' });
    ideaPhoto.classList.remove('is-switching');
  };
  nextImage.onload = update;
  nextImage.onerror = () => { if (request === ideaRequest) ideaPhoto.classList.remove('is-switching'); };
  nextImage.src = `./assets/${item.image}.webp`;
  if (nextImage.complete && nextImage.naturalWidth) update();
}
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let carouselVisible = false;
let carouselInteracting = false;
let carouselPaused = reducedMotion;
let carouselTimer;
if (reducedMotion) ideaPlayToggle.hidden = true;
function runCarousel() {
  window.clearInterval(carouselTimer);
  if (carouselVisible && !carouselInteracting && !carouselPaused && !document.hidden) {
    carouselTimer = window.setInterval(() => showIdea((ideaIndex + 1) % ideaPool.length), 6500);
  }
}
new IntersectionObserver(([entry]) => { carouselVisible = entry.isIntersecting; runCarousel(); }, { threshold: .45 }).observe($('.spotlight'));
ideaRail.addEventListener('pointerenter', () => { carouselInteracting = true; runCarousel(); });
ideaRail.addEventListener('pointerleave', () => { carouselInteracting = false; runCarousel(); });
ideaRail.addEventListener('focusin', () => { carouselInteracting = true; runCarousel(); });
ideaRail.addEventListener('focusout', (event) => { if (!ideaRail.contains(event.relatedTarget)) { carouselInteracting = false; runCarousel(); } });
document.addEventListener('visibilitychange', runCarousel);
ideaPlayToggle.addEventListener('click', () => {
  carouselPaused = !carouselPaused;
  ideaPlayToggle.textContent = carouselPaused ? 'Продолжить' : 'Пауза';
  ideaPlayToggle.setAttribute('aria-label', carouselPaused ? 'Продолжить карусель городов' : 'Остановить карусель городов');
  runCarousel();
});
function setIdeaDestination(item) {
  destination.value = item.search;
  destination.dataset.code = item.code;
  destination.removeAttribute('aria-invalid');
  showMessage(`${item.name} выбран. Укажите город вылета и проверьте даты.`);
}
$$('.spotlight-option').forEach((button) => button.addEventListener('click', () => {
  const index = Number(button.dataset.ideaIndex);
  showIdea(index);
  setIdeaDestination(ideaPool[index]);
  carouselPaused = true;
  ideaPlayToggle.textContent = 'Продолжить';
  ideaPlayToggle.setAttribute('aria-label', 'Продолжить карусель городов');
  runCarousel();
}));
$('#idea-pick').addEventListener('click', () => {
  setIdeaDestination(ideaPool[ideaIndex]);
  $('#flight-search').scrollIntoView({ behavior: 'smooth', block: 'start' });
  window.setTimeout(() => origin.focus({ preventScroll: true }), 350);
});
// Выпадающие списки городов и стран.
function closePopovers() {
  $$('.popover').forEach((panel) => { panel.hidden = true; });
  $$('.city-control input[role="combobox"], .control-button').forEach((trigger) => trigger.setAttribute('aria-expanded', 'false'));
  $$('.search-control').forEach((control) => control.classList.remove('is-open'));
}
function openPopover(panel, trigger) {
  closePopovers();
  panel.hidden = false;
  trigger.setAttribute('aria-expanded', 'true');
  trigger.closest('.search-control').classList.add('is-open');
}

function renderCityOptions(input, keepScroll = false) {
  const panel = $(`#${input.id}-options`);
  const previousScroll = panel.scrollTop;
  const query = normalizeSearch(input.value.trim());
  const popularCodes = input === destination ? ['ROM', 'KIX', 'LIS', 'BKK', 'PAR', 'SEL', 'DPS'] : ['SOF', 'LON', 'PAR', 'ROM', 'IST', 'DXB', 'BKK'];
  const showingCountries = !query && input.dataset.mode === 'countries';
  const scored = query ? airportCatalog.filter((item) => !input.dataset.requireAirport || !metroAirports[item.code]).map((item) => {
    const name = normalizeSearch(item.name);
    const airportName = normalizeSearch(item.airportName || '');
    const aliases = normalizeSearch(item.aliases || '');
    const country = normalizeSearch(item.country);
    const countryEnglish = normalizeSearch(item.countryEnglish || '');
    const code = item.code.toLowerCase();
    const score = code === query ? 0 : name === query ? 1 : name.startsWith(query) ? 2 : aliases === query ? 3 : code.startsWith(query) ? 4 : aliases.startsWith(query) ? 5 : airportName.startsWith(query) ? 6 : country === query || countryEnglish === query ? 7 : country.startsWith(query) || countryEnglish.startsWith(query) ? 8 : name.includes(query) || aliases.includes(query) ? 9 : airportName.includes(query) ? 10 : country.includes(query) || countryEnglish.includes(query) ? 11 : 99;
    return { item, score };
  }).filter(({ score }) => score < 99).sort((a, b) => a.score - b.score || b.item.rank - a.item.rank || a.item.name.localeCompare(b.item.name, 'ru')) : [];
  const limit = Number(input.dataset.limit) || 40;
  const matches = query ? scored.slice(0, limit).map(({ item }) => item) : popularCodes.map((code) => airportCatalog.find((item) => item.code === code)).filter(Boolean);
  const cityMarkup = matches.map((item) => `<button type="button" class="city-option" role="option" data-code="${item.code}" data-value="${escapeHTML(item.name)} (${item.code})"><span class="option-flag" aria-hidden="true">${item.flag}</span><span class="option-name"><strong>${escapeHTML(item.name)}</strong><small>${escapeHTML(item.country)}${item.airportName ? ` · ${escapeHTML(item.airportName)}` : metroAirports[item.code] ? ' · все аэропорты города' : ''}</small></span><span class="option-code">${item.code}</span></button>`).join('');
  const countryMarkup = availableCountries.map((item) => `<button type="button" class="country-option" role="option" data-country="${escapeHTML(item.name)}"><span class="option-flag" aria-hidden="true">${item.flag}</span><strong>${escapeHTML(item.name)}</strong><small>${item.count}</small></button>`).join('');
  panel.innerHTML = showingCountries
    ? `<div class="popover-title">Все страны · ${availableCountries.length}</div>${countryMarkup}`
    : `<div class="popover-title">${query ? `Найдено аэропортов: ${scored.length}${scored.length > limit ? ` · показаны первые ${limit}` : ''}` : 'Популярные города'}</div>${cityMarkup || '<p class="no-results">Не нашли аэропорт. Попробуйте название города, страны или трёхбуквенный код.</p>'}${query && scored.length > limit ? `<button type="button" class="show-more-airports"><strong>Показать ещё аэропорты</strong><small>+${Math.min(40, scored.length - limit)}</small></button>` : ''}${!query ? `<button type="button" class="all-countries"><span class="option-flag" aria-hidden="true">◎</span><strong>Все страны Европы и Азии</strong><small>${availableCountries.length}</small></button>` : ''}`;
  panel.scrollTop = keepScroll ? previousScroll : 0;
  openPopover(panel, input);
}

[origin, destination].forEach((input) => {
  const panel = $(`#${input.id}-options`);
  input.addEventListener('focus', () => renderCityOptions(input));
  input.addEventListener('input', () => { delete input.dataset.code; delete input.dataset.mode; delete input.dataset.limit; input.removeAttribute('aria-invalid'); renderCityOptions(input); });
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') { closePopovers(); return; }
    if (event.key === 'ArrowDown') { event.preventDefault(); if (panel.hidden) renderCityOptions(input); panel.querySelector('.city-option,.country-option,.all-countries,.show-more-airports')?.focus(); }
    if (event.key === 'Enter' && !panel.hidden && panel.querySelector('.city-option,.country-option,.all-countries,.show-more-airports')) { event.preventDefault(); panel.querySelector('.city-option,.country-option,.all-countries,.show-more-airports').click(); }
  });
  panel.addEventListener('click', (event) => {
    event.stopPropagation();
    if (event.target.closest('.all-countries')) { input.dataset.mode = 'countries'; renderCityOptions(input); panel.querySelector('.country-option')?.focus(); return; }
    if (event.target.closest('.show-more-airports')) { input.dataset.limit = String((Number(input.dataset.limit) || 40) + 40); renderCityOptions(input, true); return; }
    const country = event.target.closest('.country-option');
    if (country) { input.value = country.dataset.country; delete input.dataset.mode; delete input.dataset.code; delete input.dataset.limit; renderCityOptions(input); panel.querySelector('.city-option')?.focus(); return; }
    const option = event.target.closest('.city-option');
    if (!option) return;
    input.value = option.dataset.value;
    input.dataset.code = option.dataset.code;
    delete input.dataset.requireAirport;
    input.removeAttribute('aria-invalid');
    if (message.classList.contains('error')) showMessage('Аэропорт выбран. Можно продолжить поиск.');
    closePopovers();
  });
  panel.addEventListener('keydown', (event) => {
    const options = [...panel.querySelectorAll('.city-option,.country-option,.all-countries,.show-more-airports')];
    const index = options.indexOf(document.activeElement);
    if (event.key === 'Escape') { closePopovers(); input.focus(); }
    if (event.key === 'ArrowDown') { event.preventDefault(); options[Math.min(index + 1, options.length - 1)]?.focus(); }
    if (event.key === 'ArrowUp') { event.preventDefault(); (index <= 0 ? input : options[index - 1])?.focus(); }
  });
});

$('#swap-cities').addEventListener('click', () => {
  const a = { value: origin.value, code: origin.dataset.code };
  origin.value = destination.value; origin.dataset.code = destination.dataset.code || '';
  destination.value = a.value; destination.dataset.code = a.code || '';
  closePopovers(); showMessage('Города поменялись местами.');
});

// Календарь дат вылета и возвращения.
const dateFormatter = new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
const monthFormatter = new Intl.DateTimeFormat('ru-RU', { month: 'long', year: 'numeric' });
const shortMonths = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
const pickerMonths = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const monthLabel = (date) => {
  const label = monthFormatter.format(date).replace(/ г\.$/, '');
  return label[0].toLocaleUpperCase('ru-RU') + label.slice(1);
};
const dateLabel = (value) => dateFormatter.format(parseISO(value));
const shortDateLabel = (value) => { const date = parseISO(value); return `${date.getDate()} ${shortMonths[date.getMonth()]} ${date.getFullYear()}`; };
function syncDateLabels() { $('#departure-label').textContent = shortDateLabel(dates.departure); $('#return-label').textContent = shortDateLabel(dates.return); }
const calendarViews = { departure: parseISO(dates.departure), return: parseISO(dates.return) };
const calendarModes = { departure: 'days', return: 'days' };
function renderCalendar(kind) {
  const panel = $(`#${kind}-calendar`);
  const view = calendarViews[kind];
  const year = view.getFullYear(); const month = view.getMonth();
  const min = kind === 'departure' ? todayISO : dates.departure;
  const minDate = parseISO(min);
  if (calendarModes[kind] === 'months') {
    const months = pickerMonths.map((label, index) => `<button type="button" class="calendar-month ${index === month ? 'is-current' : ''}" data-month="${index}" ${year === minDate.getFullYear() && index < minDate.getMonth() ? 'disabled' : ''}>${label}</button>`).join('');
    panel.innerHTML = `<div class="calendar-head calendar-year-head"><button type="button" data-year-shift="-1" aria-label="Предыдущий год" ${year <= minDate.getFullYear() ? 'disabled' : ''}>‹</button><strong>${year}</strong><button type="button" data-year-shift="1" aria-label="Следующий год">›</button></div><div class="calendar-months">${months}</div><p class="calendar-hint">Выберите месяц, затем день</p>`;
    return;
  }
  const firstWeekday = (new Date(year, month, 1).getDay() + 6) % 7;
  const count = new Date(year, month + 1, 0).getDate();
  const days = Array.from({ length: firstWeekday }, () => '<span class="calendar-blank"></span>');
  for (let day = 1; day <= count; day += 1) {
    const value = iso(new Date(year, month, day));
    days.push(`<button type="button" class="calendar-day ${value === dates[kind] ? 'is-selected' : ''}" data-date="${value}" ${value < min ? 'disabled' : ''} aria-label="${dateLabel(value)}">${day}</button>`);
  }
  const atMinMonth = year === minDate.getFullYear() && month === minDate.getMonth();
  panel.innerHTML = `<div class="calendar-head"><button type="button" data-shift="-1" aria-label="Предыдущий месяц" ${atMinMonth ? 'disabled' : ''}>‹</button><button type="button" class="calendar-month-toggle" data-calendar-month-toggle aria-label="Выбрать месяц и год" aria-expanded="false">${monthLabel(view)}<span aria-hidden="true"></span></button><button type="button" data-shift="1" aria-label="Следующий месяц">›</button></div><div class="calendar-weekdays"><span>Пн</span><span>Вт</span><span>Ср</span><span>Чт</span><span>Пт</span><span>Сб</span><span>Вс</span></div><div class="calendar-days">${days.join('')}</div><p class="calendar-hint">Нажмите на месяц, чтобы быстро его изменить</p>`;
}
['departure', 'return'].forEach((kind) => {
  const trigger = $(`#${kind}-trigger`); const panel = $(`#${kind}-calendar`);
  trigger.addEventListener('click', () => {
    if (!panel.hidden) { closePopovers(); return; }
    calendarViews[kind] = parseISO(dates[kind]);
    calendarModes[kind] = 'days';
    renderCalendar(kind); openPopover(panel, trigger);
  });
  panel.addEventListener('click', (event) => {
    event.stopPropagation();
    if (event.target.closest('[data-calendar-month-toggle]')) { calendarModes[kind] = 'months'; renderCalendar(kind); return; }
    const yearShift = event.target.closest('[data-year-shift]');
    if (yearShift) { calendarViews[kind] = new Date(calendarViews[kind].getFullYear() + Number(yearShift.dataset.yearShift), calendarViews[kind].getMonth(), 1); renderCalendar(kind); return; }
    const chosenMonth = event.target.closest('[data-month]');
    if (chosenMonth) { calendarViews[kind] = new Date(calendarViews[kind].getFullYear(), Number(chosenMonth.dataset.month), 1); calendarModes[kind] = 'days'; renderCalendar(kind); return; }
    const shift = event.target.closest('[data-shift]');
    if (shift) { calendarViews[kind] = new Date(calendarViews[kind].getFullYear(), calendarViews[kind].getMonth() + Number(shift.dataset.shift), 1); renderCalendar(kind); return; }
    const day = event.target.closest('[data-date]');
    if (!day) return;
    dates[kind] = day.dataset.date;
    if (kind === 'departure' && dates.return < dates.departure) dates.return = iso(addDays(parseISO(dates.departure), 7));
    syncDateLabels(); trigger.removeAttribute('aria-invalid'); closePopovers();
  });
});
syncDateLabels();

// Пассажиры и тип поездки.
function passengerText(count) { return `${count} ${count === 1 ? 'взрослый' : count < 5 ? 'взрослых' : 'взрослых'}`; }
function syncPassengers() {
  $('#passenger-label').textContent = passengerText(passengers);
  $('#passenger-count').textContent = String(passengers);
  $('#passenger-minus').disabled = passengers <= 1;
  $('#passenger-plus').disabled = passengers >= 8;
}
const passengerPanel = $('#passenger-panel');
const passengerTrigger = $('#passenger-trigger');
passengerTrigger.addEventListener('click', () => { if (!passengerPanel.hidden) closePopovers(); else openPopover(passengerPanel, passengerTrigger); });
$('#passenger-minus').addEventListener('click', () => { passengers = Math.max(1, passengers - 1); syncPassengers(); });
$('#passenger-plus').addEventListener('click', () => { passengers = Math.min(8, passengers + 1); syncPassengers(); });
$('#passenger-done').addEventListener('click', () => closePopovers());
syncPassengers();

document.addEventListener('click', (event) => { if (!event.target.closest('.search-control')) closePopovers(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closePopovers(); });

function syncTrip() {
  const oneWay = form.elements.trip.value === 'oneway';
  $('#return-control').hidden = oneWay;
  $('#detail-row').classList.toggle('is-oneway', oneWay);
  if (oneWay) closePopovers();
}
$$('input[name="trip"]').forEach((input) => input.addEventListener('change', syncTrip));
syncTrip();

// Проверка маршрута и переход к поиску у авиакомпаний.
function airportCode(input) {
  const value = input.value.trim();
  if (input.dataset.code && value) return input.dataset.code.toLowerCase();
  const labelled = value.match(/\(([A-Za-z]{3})\)$/);
  if (labelled) return labelled[1].toLowerCase();
  if (/^[A-Za-z]{3}$/.test(value)) return value.toLowerCase();
  return null;
}
function readSearch(specificAirports = false) {
  closePopovers();
  [origin, destination, $('#departure-trigger'), $('#return-trigger')].forEach((control) => control.removeAttribute('aria-invalid'));
  const from = airportCode(origin); const to = airportCode(destination);
  const oneWay = form.elements.trip.value === 'oneway';
  const validCode = (code) => code && airportCatalog.some((item) => item.code === code.toUpperCase());
  if (!validCode(from) || !validCode(to)) {
    const missing = !validCode(from) ? origin : destination;
    missing.setAttribute('aria-invalid', 'true');
    showMessage('Выберите аэропорт Европы или Азии из списка.', true);
    missing.focus(); return null;
  }
  if (from === to) { destination.setAttribute('aria-invalid', 'true'); showMessage('Города вылета и прилёта должны отличаться.', true); destination.focus(); return null; }
  if (dates.departure < todayISO) { $('#departure-trigger').setAttribute('aria-invalid', 'true'); showMessage('Выберите будущую дату вылета.', true); $('#departure-trigger').focus(); return null; }
  if (!oneWay && dates.return < dates.departure) { $('#return-trigger').setAttribute('aria-invalid', 'true'); showMessage('Дата обратного рейса должна быть позже вылета.', true); $('#return-trigger').focus(); return null; }
  if (specificAirports) {
    const grouped = [[origin, from], [destination, to]].find(([, code]) => metroAirports[code.toUpperCase()]);
    if (grouped) {
      const [input, code] = grouped;
      input.value = airports.find((item) => item.code === code.toUpperCase())?.name || code.toUpperCase();
      delete input.dataset.code;
      input.dataset.requireAirport = 'true';
      input.setAttribute('aria-invalid', 'true');
      showMessage('Для перехода к авиакомпании выберите конкретный аэропорт из списка.', true);
      input.focus();
      return null;
    }
  }
  return { from: from.toUpperCase(), to: to.toUpperCase(), oneWay };
}

$$('.airline-button').forEach((button) => button.addEventListener('click', (event) => {
  event.stopPropagation();
  const search = readSearch(true);
  if (!search) return;
  let url;
  let airline;
  if (button.dataset.airline === 'wizz') {
    airline = 'Wizz Air';
    url = `https://www.wizzair.com/en-gb/booking/select-flight/${search.from}/${search.to}/${dates.departure}/${search.oneWay ? 'null' : dates.return}/${passengers}/0/0/null`;
  } else {
    airline = 'Ryanair';
    const query = new URLSearchParams({ adults: String(passengers), teens: '0', children: '0', infants: '0', dateOut: dates.departure, isReturn: String(!search.oneWay), originIata: search.from, destinationIata: search.to });
    if (!search.oneWay) query.set('dateIn', dates.return);
    url = `https://www.ryanair.com/gb/en/trip/flights/select?${query}`;
  }
  showMessage(`Открываем поиск на сайте ${airline}. Наличие рейсов проверьте там.`);
  window.open(url, '_blank', 'noopener,noreferrer');
}));
form.addEventListener('submit', (event) => {
  event.preventDefault();
  showMessage('Выберите Wizz Air или Ryanair для поиска рейсов.');
});

// Фильтры и постраничный показ карточек.
const destinationCards = $$('.destination-card');
const destinationMore = $('#destination-more');
const destinationLess = $('#destination-less');
let activeDestinationFilter = 'all';
let visibleDestinationCount = 8;
function renderDestinations() {
  const matching = destinationCards.filter((card) => activeDestinationFilter === 'all' || card.dataset.region === activeDestinationFilter);
  let shown = 0;
  destinationCards.forEach((card) => {
    const match = activeDestinationFilter === 'all' || card.dataset.region === activeDestinationFilter;
    card.hidden = !match || shown >= visibleDestinationCount;
    if (match) shown += 1;
  });
  const visible = Math.min(visibleDestinationCount, matching.length);
  const next = Math.min(8, matching.length - visible);
  $('#destination-progress').textContent = `Показано ${visible} из ${matching.length}`;
  $('#destination-more-count').textContent = `+${next}`;
  destinationMore.hidden = next === 0;
  destinationLess.hidden = visible <= 8;
}
$$('.filter').forEach((button) => button.addEventListener('click', () => {
  activeDestinationFilter = button.dataset.filter;
  visibleDestinationCount = 8;
  $$('.filter').forEach((item) => { const active = item === button; item.classList.toggle('is-active', active); item.setAttribute('aria-pressed', String(active)); });
  renderDestinations();
}));
destinationMore.addEventListener('click', () => { visibleDestinationCount += 8; renderDestinations(); });
destinationLess.addEventListener('click', () => {
  visibleDestinationCount = 8;
  renderDestinations();
  $('#destinations').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
renderDestinations();
$('.destination-action').forEach((button) => button.addEventListener('click', () => {
  destination.value = button.dataset.name; destination.dataset.code = button.dataset.code;
  showMessage(`${button.dataset.name.replace(/ \([A-Z]{3}\)$/, '')} выбран. Укажите город вылета и проверьте даты.`);
  $('#flight-search').scrollIntoView({ behavior: 'smooth', block: 'start' });
  window.setTimeout(() => origin.focus({ preventScroll: true }), 350);
}));

// Появление блоков при прокрутке.
if ('IntersectionObserver' in window) {
  document.documentElement.classList.add('js');
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.08, rootMargin: '0px 0px 80px 0px' });
  $$('.reveal').forEach((element) => observer.observe(element));
}


// Coral reading progress indicator on the homepage.
const homeProgress = document.getElementById('home-reading-progress-bar');
if (homeProgress) {
  let progressTicking = false;
  const updateHomeProgress = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? Math.min(100, Math.max(0, window.scrollY / scrollable * 100)) : 0;
    homeProgress.style.width = progress + '%';
    progressTicking = false;
  };
  window.addEventListener('scroll', () => {
    if (!progressTicking) {
      window.requestAnimationFrame(updateHomeProgress);
      progressTicking = true;
    }
  }, { passive: true });
  window.addEventListener('resize', updateHomeProgress);
  updateHomeProgress();
}

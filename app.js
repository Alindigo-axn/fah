/* DaraLearn — қазақ тіліндегі оқу платформасы (SPA, hash-роутинг) */

const USER = { name: "User", initial: "U", grade: "10 сынып" };

/* ---------- Иконкалар ---------- */
const I = {
  home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',
  book: '<path d="M2 5h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2zM22 5h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z"/>',
  case: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
  doc: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/><path d="m15 9 6-6"/>',
  bot: '<rect x="4" y="8" width="16" height="12" rx="4"/><path d="M12 4v4M9 13v1M15 13v1M10 17h4M2 13v2M22 13v2"/>',
  clip: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M9 10h6M9 14h6M9 18h4"/>',
  chart: '<path d="M4 20V12M10 20V8M16 20V4M22 20H2"/>',
  cal: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  check: '<path d="m5 12 5 5L20 7"/>',
  send: '<path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>',
  star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"/>',
  fire: '<path d="M12 22c4 0 7-3 7-7 0-5-5-8-5-12-3 2-4 5-4 7-1-1-2-2-2-4-2 2-3 5-3 9 0 4 3 7 7 7z"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  bulb: '<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/>',
  left: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
};
const ic = (n, s = 20) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${I[n]}</svg>`;
const arrow = ic("arrow", 16);

/* ---------- Деректер ---------- */
const NAV = [
  ["home", "Басты бет", "home"],
  ["subjects", "Менің пәндерім", "book"],
  ["courses", "Курстар", "case"],
  ["diagnostics", "Диагностика", "doc"],
  ["gaps", "Олқылықтарым", "target"],
  ["tutor", "AI Tutor", "bot"],
  ["quiz", "Білімді тексеру", "clip"],
  ["progress", "Прогресс", "chart"],
  ["calendar", "Күнтізбе", "cal"],
];
const NAV_BOTTOM = [["settings", "Баптаулар", "gear"], ["help", "Көмек", "help"]];
const TITLES = Object.fromEntries([...NAV, ...NAV_BOTTOM, ["lesson", "Сабақ"], ["tasks", "Тапсырмалар"]].map(([k, t]) => [k, t]));

const SUBJECTS = [
  { id: "math", name: "Математика", sym: "√x", c: "", topics: 32, p: 65, next: "Квадрат теңдеулер", status: "progress", teacher: "Әйгерім Нұрланқызы", cur: "Көбейткіштерге жіктеу", done: 21, inprog: 7, left: 4 },
  { id: "phys", name: "Физика", sym: "⚛", c: "purple", topics: 28, p: 40, next: "Ньютон заңдары", status: "progress", teacher: "Ерлан Сәрсенов", cur: "Ньютонның екінші заңы", done: 11, inprog: 5, left: 12 },
  { id: "chem", name: "Химия", sym: "⚗", c: "orange", topics: 24, p: 25, next: "Химиялық реакциялар", status: "progress", teacher: "Гүлнар Асқарова", cur: "Реакция түрлері", done: 6, inprog: 4, left: 14 },
  { id: "eng", name: "Ағылшын тілі", sym: "Aa", c: "green", topics: 18, p: 80, next: "Past Perfect", status: "progress", teacher: "Сара Ахметова", cur: "Past Perfect", done: 14, inprog: 2, left: 2 },
  { id: "bio", name: "Биология", sym: "❦", c: "green", topics: 26, p: 35, next: "Жасушаның құрылысы", status: "progress", teacher: "Дана Мұратқызы", cur: "Жасуша органоидтары", done: 9, inprog: 3, left: 14 },
  { id: "it", name: "Информатика", sym: "</>", c: "purple", topics: 21, p: 50, next: "Алгоритмдер және блок-сызбалар", status: "progress", teacher: "Нұрлан Бекұлы", cur: "Блок-сызбалар", done: 10, inprog: 3, left: 8 },
  { id: "kaz", name: "Қазақ тілі", sym: "Әә", c: "red", topics: 20, p: 100, next: "Барлығы аяқталды", status: "done", teacher: "Сәуле Қайратқызы", cur: "Қайталау", done: 20, inprog: 0, left: 0 },
];

const TASKS = [
  { t: "Үй тапсырмасы", s: "Математика · Квадрат теңдеулер", d: "Бүгін", full: "20 қазан", sym: "√x", c: "", done: false },
  { t: "4-жаттығу", s: "Химия · Химиялық реакциялар", d: "22 қаз", full: "22 қазан", sym: "⚗", c: "orange", done: false },
  { t: "Мәтін және сұрақтар", s: "Ағылшын тілі · Past Perfect", d: "24 қаз", full: "24 қазан", sym: "Aa", c: "green", done: false },
  { t: "Зертханалық жұмыс", s: "Физика · Ньютон заңдары", d: "27 қаз", full: "27 қазан", sym: "⚛", c: "purple", done: false },
  { t: "Блок-сызба құру", s: "Информатика · Алгоритмдер", d: "15 қаз", full: "15 қазан", sym: "</>", c: "purple", done: true },
  { t: "Эссе: «Менің арманым»", s: "Қазақ тілі · Шығарма", d: "12 қаз", full: "12 қазан", sym: "Әә", c: "red", done: true },
];

const COURSES = [
  { sub: "Математика", sym: "√x", c: "", t: "Квадрат теңдеулер", d: "Квадрат теңдеулерді шешу бойынша теория, мысалдар және практикалық тапсырмалар.", h: 3, l: 12, lvl: "Орташа", p: 68 },
  { sub: "Математика", sym: "ƒ(x)", c: "", t: "Сызықтық теңдеулер мен теңсіздіктер", d: "Сызықтық теңдеулер мен теңсіздіктерді, теңсіздіктер жүйесін шешу.", h: 2, l: 8, lvl: "Жеңіл", p: 100 },
  { sub: "Математика", sym: "△", c: "", t: "Геометрия: үшбұрыштар", d: "Үшбұрыштың қасиеттері мен белгілері. Дайын сызбалар бойынша есептер.", h: 4, l: 14, lvl: "Орташа", p: 0 },
  { sub: "Математика", sym: "⊕", c: "", t: "Шеңбер және дөңгелек", d: "Шеңбердің қасиеттері, іштей сызылған және центрлік бұрыштар.", h: 3, l: 10, lvl: "Орташа", p: 0 },
  { sub: "Физика", sym: "⚛", c: "purple", t: "Ньютон заңдары", d: "Динамиканың негізгі заңдары, күштер және олардың әсері.", h: 3, l: 11, lvl: "Орташа", p: 40 },
  { sub: "Физика", sym: "⚡", c: "purple", t: "Электр тогы", d: "Ток күші, кернеу, кедергі және Ом заңы.", h: 4, l: 12, lvl: "Күрделі", p: 0 },
  { sub: "Химия", sym: "⚗", c: "orange", t: "Химиялық реакциялар", d: "Реакция түрлері, теңдеулерді теңестіру және есептер.", h: 3, l: 9, lvl: "Орташа", p: 25 },
  { sub: "Ағылшын тілі", sym: "Aa", c: "green", t: "Past Perfect", d: "Past Perfect шағын қолдану ережелері мен жаттығулар.", h: 2, l: 6, lvl: "Жеңіл", p: 80 },
];

const LESSONS = ["Квадрат теңдеу деген не", "Теңдеудің коэффициенттері", "Толымсыз квадрат теңдеулер", "Дискриминант", "Көбейткіштерге жіктеу", "Түбірлер формуласы", "Виет теоремасы", "Келтірілген квадрат теңдеулер", "Мәтінді есептер", "Квадрат үшмүшені жіктеу", "Биквадрат теңдеулер", "Қорытынды тест"];

const QUIZ = [
  { q: "x² − 4x + 4 = 0 теңдеуінің неше нақты түбірі бар?", a: ["Екі әртүрлі түбір", "Бір нақты түбір", "Нақты түбірі жоқ", "Шексіз көп түбір"], r: 1 },
  { q: "ax² + bx + c = 0 теңдеуінің дискриминанты қай формуламен есептеледі?", a: ["D = b² + 4ac", "D = b² − 4ac", "D = 4ac − b²", "D = b − 4ac"], r: 1 },
  { q: "x² − 5x + 6 = 0 теңдеуінің түбірлері:", a: ["x = 1 және x = 6", "x = −2 және x = −3", "x = 2 және x = 3", "x = 5 және x = 1"], r: 2 },
  { q: "Егер D < 0 болса, квадрат теңдеудің:", a: ["Екі түбірі бар", "Бір түбірі бар", "Нақты түбірі жоқ", "Түбірі нөлге тең"], r: 2 },
  { q: "x² − 9 = 0 теңдеуін шеш.", a: ["x = 3", "x = ±3", "x = 9", "x = ±9"], r: 1 },
  { q: "Виет теоремасы бойынша x² + px + q = 0 теңдеуі үшін x₁ + x₂ тең:", a: ["p", "−p", "q", "−q"], r: 1 },
  { q: "2x² − 8x = 0 теңдеуінің түбірлері:", a: ["0 және 4", "0 және −4", "2 және 4", "Тек 4"], r: 0 },
  { q: "Қай теңдеу квадрат теңдеу болып табылады?", a: ["3x + 2 = 0", "x³ − 1 = 0", "x² + 2x − 1 = 0", "1/x = 2"], r: 2 },
  { q: "x² + 6x + 9 өрнегін көбейткіштерге жікте:", a: ["(x + 3)²", "(x − 3)²", "(x + 9)(x + 1)", "(x + 6)(x + 3)"], r: 0 },
  { q: "x² − 7x + 10 = 0 теңдеуінің түбірлерінің көбейтіндісі:", a: ["7", "−7", "10", "−10"], r: 2 },
];

const state = {
  subjFilter: "all", subjSel: "math",
  courseFilter: "Барлық пәндер",
  diagSel: "math",
  gapSort: "priority",
  taskFilter: "all",
  progRange: "week",
  lessonTab: "theory",
  quiz: { i: 0, ans: Array(QUIZ.length).fill(null), finished: false, left: 15 * 60 },
  chat: null,
  calView: "month",
  settings: { notif: true, email: false, reminders: true, dark: false },
};

/* ---------- Көмекші функциялар ---------- */
const $ = (s) => document.querySelector(s);
const app = $("#app");
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const box = (sym, c = "", size = 44) => `<div class="icon-box ${c}" style="width:${size}px;height:${size}px">${esc(sym)}</div>`;
const bar = (p) => `<div class="bar"><span style="width:${p}%"></span></div>`;
const ring = (p, size = 92) => `<div class="ring" style="--p:${p};--size:${size}px"><b>${p}%</b></div>`;
const crumb = (label) => `<div class="crumb"><a href="#home">Басты бет</a> / ${label}</div>`;
function toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("show"), 2200); }
function timeNow() { const d = new Date(); return d.getHours().toString().padStart(2, "0") + ":" + d.getMinutes().toString().padStart(2, "0"); }
function greeting() { const h = new Date().getHours(); return h < 5 ? "Қайырлы түн" : h < 12 ? "Қайырлы таң" : h < 18 ? "Қайырлы күн" : "Қайырлы кеш"; }

/* ---------- Беттер ---------- */
const pages = {};

pages.home = () => `
  <h1>${greeting()}, ${USER.name}!</h1>
  <p class="subtitle">Тоқтаған жеріңнен жалғастырайық.</p>
  <div class="grid g-main">
    <div class="stack">
      <div class="card soft continue">
        <div class="card-head"><p class="card-title">Оқуды жалғастыру</p><span class="muted">${USER.grade}</span></div>
        <div class="row">${box("√x")}<span class="muted">Математика</span></div>
        <h2>Квадрат теңдеулер</h2>
        <p class="muted" style="margin:0 0 24px">Көбейткіштерге жіктеу</p>
        <div class="row wrap" style="gap:20px">
          <a href="#lesson" class="btn">Сабақты жалғастыру ${arrow}</a>
          <span class="row muted" style="gap:8px">${ic("clock", 18)} Шамамен 15 минут</span>
        </div>
        <div style="border-top:1px solid #d9e6fd;margin-top:26px;padding-top:18px">
          <div class="row between small muted" style="margin-bottom:10px"><span>12 сабақтың 5-і</span><span>42%</span></div>
          ${bar(42)}
        </div>
      </div>
      <div class="card">
        <div class="card-head"><p class="card-title">Жақын тапсырмалар</p><a href="#tasks" class="link">Барлық тапсырмалар ${arrow}</a></div>
        ${TASKS.filter((t) => !t.done).slice(0, 3).map((t) => `
          <div class="list-item">${box(t.sym, t.c, 40)}<div class="grow"><div class="t-strong">${t.t}</div><div class="muted small">${t.s}</div></div><span class="badge ${t.d === "Бүгін" ? "red" : "gray"}">${t.d}</span></div>`).join("")}
      </div>
    </div>
    <div class="stack">
      <div class="card">
        <div class="card-head"><p class="card-title">Сенің прогресің</p><a href="#progress" class="link">${arrow}</a></div>
        <div class="row" style="gap:22px">${ring(65)}<div><div style="font-size:24px;font-weight:700">32-ден 21</div><div class="muted">математика бойынша тақырып</div></div></div>
        <div style="border-top:1px solid var(--line);margin-top:22px;padding-top:18px">
          <p class="muted" style="line-height:1.5;margin:0 0 14px">Жақсы қарқын! Тақырыптарды қадам-қадаммен оқуды жалғастыр.</p>
          <a href="#subjects" class="link">Менің пәндерім ${arrow}</a>
        </div>
      </div>
      <div class="card">
        ${box("", "", 40).replace("></div>", `>${ic("bot", 22)}</div>`)}
        <p class="card-title" style="margin:16px 0 8px">Қиын тақырып бар ма?</p>
        <p class="muted" style="line-height:1.5;margin:0 0 16px">Оны оқу көмекшісімен бірге қадам-қадаммен талда.</p>
        <a href="#tutor" class="btn ghost block">AI Tutor-ды ашу ${arrow}</a>
      </div>
    </div>
  </div>`;

pages.subjects = () => {
  const list = SUBJECTS.filter((s) => state.subjFilter === "all" || s.status === state.subjFilter);
  const s = SUBJECTS.find((x) => x.id === state.subjSel) || SUBJECTS[0];
  return `
  ${crumb("Менің пәндерім")}
  <h1>Менің пәндерім</h1>
  <p class="subtitle">Пәнді таңда, оқуды жалғастыр және мақсаттарыңа жет.</p>
  <div class="chips">
    ${[["all", "Барлық пәндер"], ["progress", "Оқу барысында"], ["done", "Аяқталған"]].map(([k, t]) => `<button class="chip ${state.subjFilter === k ? "on" : ""}" data-act="subjFilter" data-v="${k}">${t}</button>`).join("")}
  </div>
  <div class="grid g-main">
    <div class="grid g-3" style="align-content:start">
      ${list.map((x) => `
        <button class="subj-tile ${x.id === s.id ? "on" : ""}" data-act="subjSel" data-v="${x.id}">
          <div class="row between">${box(x.sym, x.c)}<span class="badge ${x.p === 100 ? "green" : ""}">${x.p}%</span></div>
          <div><div class="t-strong">${x.name}</div><div class="muted small">${x.topics} тақырып</div></div>
          ${bar(x.p)}
          <div class="small muted">Келесі тақырып</div>
          <div class="small" style="font-weight:600">${x.next}</div>
        </button>`).join("") || `<div class="card empty muted">Бұл санатта пән жоқ</div>`}
    </div>
    <div class="card" style="align-self:start">
      <div class="row">${box(s.sym, s.c)}<div><div class="card-title">${s.name}</div><div class="muted small">${USER.grade}</div></div></div>
      <div style="margin:22px 0 6px" class="muted small">Сенің мұғалімің</div>
      <div class="row"><div class="avatar" style="background:var(--accent-soft);color:var(--accent)">${s.teacher.split(" ").map((w) => w[0]).join("")}</div><div><div class="t-strong">${s.teacher}</div><div class="muted small">${s.name} пәнінің мұғалімі</div></div></div>
      <div style="margin:22px 0 6px" class="muted small">Ағымдағы тақырып</div>
      <div class="t-strong">${s.cur}</div>
      <div class="row between" style="margin:22px 0 10px"><span class="muted small">Пән бойынша прогресс · ${s.topics} тақырып</span><b>${s.p}%</b></div>
      ${bar(s.p)}
      <div class="grid g-3" style="margin:20px 0;text-align:center;gap:10px">
        <div><div style="font-size:22px;font-weight:700">${s.done}</div><div class="muted small">Меңгерілді</div></div>
        <div><div style="font-size:22px;font-weight:700">${s.inprog}</div><div class="muted small">Барысында</div></div>
        <div><div style="font-size:22px;font-weight:700">${s.left}</div><div class="muted small">Қалды</div></div>
      </div>
      <a href="#courses" class="btn block">Пәнге өту ${arrow}</a>
    </div>
  </div>`;
};

pages.courses = () => {
  const cats = ["Барлық пәндер", "Математика", "Физика", "Химия", "Ағылшын тілі"];
  const list = COURSES.filter((c) => state.courseFilter === "Барлық пәндер" || c.sub === state.courseFilter);
  return `
  ${crumb("Курстар")}
  <h1>Курстар</h1>
  <p class="subtitle">Мектеп тақырыптарын түсінікті әрі құрылымды курстар арқылы оқы.</p>
  <div class="grid g-main" style="margin-bottom:28px">
    <div class="card soft">
      <div class="eyebrow">Ұсынылған курс</div>
      <div class="muted small" style="margin:6px 0 16px">Математика · ${USER.grade}</div>
      <div class="row" style="gap:18px;align-items:flex-start">${box("√x", "", 56)}<div class="grow">
        <h2 style="margin:0 0 8px;font-size:24px">Квадрат теңдеулер</h2>
        <p class="muted" style="margin:0 0 18px;line-height:1.5">Квадрат теңдеулерді шешу бойынша теория, мысалдар және практикалық тапсырмалар.</p>
        <div class="grid g-3" style="gap:12px;margin-bottom:20px">
          <div><b>3 сағат</b><div class="muted small">Ұзақтығы</div></div>
          <div><b>12 сабақ</b><div class="muted small">Сабақ саны</div></div>
          <div><b>Орташа</b><div class="muted small">Күрделілік деңгейі</div></div>
        </div>
        <a href="#lesson" class="btn">Курсты жалғастыру ${arrow}</a>
      </div></div>
    </div>
    <div class="stack">
      <div class="card">
        <div class="card-head"><p class="card-title">Жалғастыру</p><a href="#lesson" class="link">Өту ${arrow}</a></div>
        <div class="row">${box("√x")}<div class="grow"><div class="t-strong">Квадрат теңдеулер</div><div class="muted small">Математика · ${USER.grade}</div></div><b>68%</b></div>
        <div style="margin-top:14px">${bar(68)}</div>
      </div>
      <div class="card">
        <div class="muted small">Ұсынылған келесі курс</div>
        <div class="t-strong" style="margin:8px 0 4px">Теңдеулер жүйесі</div>
        <div class="muted small" style="margin-bottom:12px">Математика · ${USER.grade} · Алгебраны оқуды жалғастыр.</div>
        <div class="row small muted" style="gap:14px"><span>3 сағат</span><span>10 сабақ</span><span>Орташа</span></div>
      </div>
    </div>
  </div>
  <div class="row between wrap" style="margin-bottom:16px"><h3 style="margin:0">Курстар каталогы</h3></div>
  <div class="chips">${cats.map((c) => `<button class="chip ${state.courseFilter === c ? "on" : ""}" data-act="courseFilter" data-v="${c}">${c}</button>`).join("")}</div>
  <div class="grid g-4">
    ${list.map((c) => `
      <a href="#lesson" class="card" style="display:flex;flex-direction:column;gap:12px">
        <div class="row between">${box(c.sym, c.c)}${c.p === 100 ? '<span class="badge green">Аяқталды</span>' : c.p ? `<span class="badge">${c.p}%</span>` : ""}</div>
        <div class="t-strong">${c.t}</div>
        <p class="muted small" style="margin:0;line-height:1.5;flex:1">${c.d}</p>
        <div class="row small muted" style="gap:12px"><span>${c.h} сағат</span><span>${c.l} сабақ</span><span>${c.lvl}</span></div>
      </a>`).join("")}
  </div>`;
};

pages.diagnostics = () => {
  const subs = [["math", "Математика", "Алгебра және геометрия бойынша білімді тексеру", "√x", ""], ["phys", "Физика", "Негізгі тақырыптар бойынша білімді тексеру", "⚛", "purple"], ["chem", "Химия", "Мектеп бағдарламасы бойынша тексеру", "⚗", "orange"], ["eng", "Ағылшын тілі", "Грамматика, лексика және мәтінді түсіну", "Aa", "green"], ["kaz", "Қазақ тілі", "Емле, тыныс белгілері және сөйлеу", "Әә", "red"], ["bio", "Биология", "Негізгі тақырыптар бойынша білімді тексеру", "❦", "green"], ["hist", "Қазақстан тарихы", "Негізгі оқиғаларды білуді тексеру", "⌛", "orange"], ["it", "Информатика", "Бағдарламалау және негізгі ұғымдар", "</>", "purple"]];
  const sel = subs.find((s) => s[0] === state.diagSel);
  return `
  ${crumb("Диагностика")}
  <h1>Біліміңді тексер</h1>
  <p class="subtitle">Бейімделгіш диагностика қазіргі деңгейіңді анықтайды, күшті жақтарыңды тауып, неге көңіл бөлу керегін көрсетеді.</p>
  <div class="card" style="margin-bottom:20px">
    <div class="eyebrow" style="margin-bottom:18px">Диагностика қалай өтеді</div>
    <div class="grid g-3 steps">
      ${[["Пәнді таңда", "Қай пән бойынша диагностикадан өткің келетінін көрсет."], ["Сұрақтарға жауап бер", "Мектеп бағдарламасының негізгі тақырыптары бойынша тапсырмаларды шеш."], ["Нәтижені ал", "Деңгейіңді, күшті және әлсіз тақырыптарыңды біліп, ұсыныстар ал."]].map(([t, d], i) => `<div class="row" style="align-items:flex-start"><div class="num">${i + 1}</div><div><div class="t-strong">${t}</div><p class="muted small" style="margin:6px 0 0;line-height:1.5">${d}</p></div></div>`).join("")}
    </div>
  </div>
  <div class="grid g-main">
    <div class="card">
      <div class="card-head"><p class="card-title">Диагностика үшін пәнді таңда</p><button class="link" data-act="toast" data-v="Диагностика 15–20 сұрақтан тұрады және шамамен 20 минут алады.">Бұл қалай жұмыс істейді?</button></div>
      <div class="grid g-4" style="gap:12px">
        ${subs.map(([id, n, d, sym, c]) => `<button class="subj-tile ${state.diagSel === id ? "on" : ""}" data-act="diagSel" data-v="${id}">${box(sym, c, 38)}<div class="t-strong">${n}</div><div class="muted small" style="line-height:1.4">${d}</div></button>`).join("")}
      </div>
      <button class="btn" style="margin-top:22px" data-act="startDiag">${sel[1]} бойынша диагностиканы бастау ${arrow}</button>
    </div>
    <div class="card" style="align-self:start">
      <div class="card-head"><p class="card-title">Соңғы диагностикаларым</p><a href="#progress" class="link">Барлық нәтижелер ${arrow}</a></div>
      ${[["Математика", "18 қазан", 68, "Орташа деңгей", "√x", ""], ["Ағылшын тілі", "12 қазан", 82, "Жоғары деңгей", "Aa", "green"], ["Физика", "5 қазан", 54, "Орташа деңгей", "⚛", "purple"]].map(([n, d, p, l, sym, c]) => `<div class="list-item">${box(sym, c, 40)}<div class="grow"><div class="t-strong">${n}</div><div class="muted small">${d} · ${l}</div></div><b>${p}%</b></div>`).join("")}
    </div>
  </div>`;
};

pages.gaps = () => {
  let gaps = [
    { n: 1, s: "Математика", t: "Квадрат теңдеулер", p: 25, pr: 3 },
    { n: 2, s: "Физика", t: "Ньютон заңдары", p: 30, pr: 3 },
    { n: 3, s: "Химия", t: "Химиялық реакциялар", p: 40, pr: 2 },
    { n: 4, s: "Математика", t: "Бөлшектер және рационал өрнектер", p: 45, pr: 2 },
    { n: 5, s: "Ағылшын тілі", t: "Шартты сөйлемдер (Conditionals)", p: 55, pr: 1 },
  ];
  if (state.gapSort === "subject") gaps = [...gaps].sort((a, b) => a.s.localeCompare(b.s, "kk"));
  const prL = { 3: ["Жоғары басымдық", "red", "Оқу"], 2: ["Орташа басымдық", "orange", "Қайталау"], 1: ["Төмен басымдық", "gray", "Қайталау"] };
  return `
  ${crumb("Олқылықтарым")}
  <h1>Олқылықтарым</h1>
  <p class="subtitle">Мұнда саған ең көп қиындық тудыратын тақырыптар жиналған.<br>Сенімдірек болып, нәтижеңді жақсарту үшін оларды оқы.</p>
  <div class="card soft row wrap" style="gap:24px;margin-bottom:20px">${ring(68, 96)}<div class="grow"><div class="card-title">Тақырыптарды жалпы түсіну</div><p class="muted" style="margin:8px 0 0;line-height:1.5">Сен барлық тақырыптардың 68%-ын меңгердің. Тағы 32%-ын жапсаң — кез келген тапсырмаға дайын боласың.</p></div></div>
  <div class="grid g-main">
    <div class="card">
      <div class="card-head"><p class="card-title">Ең әлсіз тақырыптарың</p>
        <div class="tabs"><button class="${state.gapSort === "priority" ? "on" : ""}" data-act="gapSort" data-v="priority">Басымдық бойынша</button><button class="${state.gapSort === "subject" ? "on" : ""}" data-act="gapSort" data-v="subject">Пән бойынша</button></div></div>
      ${gaps.map((g, i) => `<div class="list-item"><div class="num" style="width:28px;height:28px;border-radius:50%;background:#f1f3f6;display:grid;place-items:center;font-size:12px;font-weight:700;flex:none">${i + 1}</div>
        <div class="grow"><div class="muted small">${g.s}</div><div class="t-strong">${g.t}</div><div style="margin-top:8px;max-width:260px">${bar(g.p)}</div></div>
        <b style="width:44px;text-align:right">${g.p}%</b><span class="badge ${prL[g.pr][1]}">${prL[g.pr][0]}</span>
        <a href="#lesson" class="btn sm ${g.pr === 3 ? "" : "ghost"}">${prL[g.pr][2]}</a></div>`).join("")}
    </div>
    <div class="stack">
      <div class="card">
        <div class="card-head"><p class="card-title">Қателер неге туындайды?</p></div>
        ${[["Түрлендірулерді орындаудағы қиындық", "Қосылғыштарды көшіру және жақшаларды ашу кезінде жиі қателер кетеді."], ["Формулаларды білмеу", "Квадрат теңдеулер мен дискриминант формулалары кейде шатасады."], ["Практиканың жетіспеуі", "Әртүрлі теңдеу түрлеріне шешілген мысалдар аз."]].map(([t, d]) => `<div class="list-item" style="align-items:flex-start">${box("!", "orange", 32)}<div><div class="t-strong">${t}</div><p class="muted small" style="margin:4px 0 0;line-height:1.5">${d}</p></div></div>`).join("")}
      </div>
      <div class="card">
        <div class="card-head"><p class="card-title">Тақырыптар бір-бірімен қалай байланысқан</p></div>
        <div class="stack" style="gap:8px;font-size:13px">
          ${["Сандар және амалдар", "Алгебралық өрнектер", "Сызықтық теңдеулер", "Квадрат теңдеулер", "Теңдеулер жүйесі"].map((t, i) => `<div class="row"><span class="badge ${i === 3 ? "red" : i < 3 ? "green" : "gray"}" style="width:22px;text-align:center">${i + 1}</span>${t}</div>`).join("")}
        </div>
      </div>
    </div>
  </div>`;
};

const CHAT_INIT = () => [
  { me: true, text: "Сәлем! Квадрат теңдеулер деген не, түсіндіріп бере аласың ба?", t: "14:20" },
  { me: false, html: 'Сәлем! Әрине!<br>Квадрат теңдеу — бұл мына түрдегі теңдеу:<span class="formula">ax² + bx + c = 0,</span>мұнда a ≠ 0, ал a, b және c — сандар (коэффициенттер).<br>Ол «квадрат» деп аталады, себебі x айнымалысы екінші дәрежеге шығарылады.', t: "14:21" },
  { me: true, text: "Мысал келтіріп, оны шешіп бере аласың ба?", t: "14:22" },
  { me: false, html: 'Әрине! Мына теңдеуді қарастырайық:<span class="formula">x² − 5x + 6 = 0</span>Бұл квадрат теңдеу, мұнда a = 1, b = −5, c = 6.<br>Оны көбейткіштерге жіктеу әдісімен шешейік:<span class="formula">x² − 5x + 6 = (x − 2)(x − 3) = 0</span>Бұдан екі шешім аламыз:<span class="formula">x − 2 = 0 ⇒ x = 2   және   x − 3 = 0 ⇒ x = 3</span><b>Жауабы: x₁ = 2, x₂ = 3.</b>', t: "14:23" },
];
const BOT = {
  "Қарапайымырақ түсіндір": "Елестетіп көр: квадрат теңдеу — бұл «қандай x санын өзіне көбейтіп, басқа сандармен қосқанда 0 шығады?» деген жұмбақ.\n\nМысалы, x² = 4 болса, x = 2 немесе x = −2, себебі 2·2 = 4 және (−2)·(−2) = 4. 🙂",
  "Мысал келтір": "Тағы бір мысал: x² + 2x − 8 = 0.\n\na = 1, b = 2, c = −8.\nD = b² − 4ac = 4 + 32 = 36, √D = 6.\nx₁ = (−2 + 6) / 2 = 2\nx₂ = (−2 − 6) / 2 = −4\n\nЖауабы: x₁ = 2, x₂ = −4.",
  "Мені тексер": "Кәне, тексерейік! 🧠\n\nx² − 7x + 12 = 0 теңдеуінің түбірлерін тап.\n\nКеңес: көбейтіндісі 12-ге, қосындысы 7-ге тең екі санды ізде. Жауабыңды жаз!",
  "Жоспар құр": "Квадрат теңдеулерді меңгеру жоспары:\n\n1. Толымсыз квадрат теңдеулер — 15 мин\n2. Дискриминант формуласы — 20 мин\n3. Көбейткіштерге жіктеу — 20 мин\n4. Виет теоремасы — 15 мин\n5. Аралас есептер — 30 мин\n\nКүніне бір қадам жеткілікті!",
  "Бірге шешейік": "Жарайды, бірге шешейік! Теңдеуді жаз, мен қадам-қадаммен көмектесемін.\n\nМысалы: 2x² − 8x + 6 = 0. Алдымен барлық мүшелерді 2-ге бөлсек не болады?",
};
function botReply(text) {
  if (BOT[text]) return BOT[text];
  const t = text.toLowerCase().replace(/\s/g, "");
  if (/3(және|,|;)4|x=3|x₁=3|4(және|,)3/.test(t)) return "Дұрыс! 🎉 x₁ = 3, x₂ = 4, себебі 3 · 4 = 12 және 3 + 4 = 7. Жарайсың!";
  if (t.includes("дискриминант")) return "Дискриминант: D = b² − 4ac.\n\n• D > 0 — екі әртүрлі түбір\n• D = 0 — бір түбір\n• D < 0 — нақты түбір жоқ";
  if (t.includes("виет")) return "Виет теоремасы: x² + px + q = 0 теңдеуі үшін\nx₁ + x₂ = −p,  x₁ · x₂ = q.";
  if (/сәлем|салем|привет|hello|hi/.test(t)) return "Сәлем, " + USER.name + "! Бүгін қандай тақырыпты талдаймыз?";
  return "Жақсы сұрақ! Демо-режимде жауаптар алдын ала дайындалған. Төмендегі батырмалардың бірін таңдап көр немесе «дискриминант», «Виет» сөздерімен сұра.";
}

pages.tutor = () => {
  if (!state.chat) state.chat = CHAT_INIT();
  return `
  ${crumb("AI Tutor")}
  <div class="row" style="gap:10px"><h1 style="margin:0">Dara AI Tutor</h1><span class="badge">Бета</span></div>
  <p class="subtitle" style="margin-top:8px">Оқудағы жеке көмекшің. Түсіндіреді, көмектеседі, сұрақтар қояды.</p>
  <div class="chips">${Object.keys(BOT).map((k) => `<button class="chip" data-act="quick" data-v="${k}">${k}</button>`).join("")}</div>
  <div class="grid g-main">
    <div class="card chat">
      <div class="chat-body" id="chat-body">
        ${state.chat.map((m) => `<div class="msg ${m.me ? "me" : "bot"}">${m.me ? `<div class="avatar" style="width:32px;height:32px;font-size:13px">${USER.initial}</div>` : `<div class="avatar" style="width:32px;height:32px;background:var(--accent-soft);color:var(--accent)">${ic("bot", 18)}</div>`}<div><div class="bubble">${m.html || esc(m.text)}</div><div class="time" style="${m.me ? "text-align:right" : ""}">${m.t}</div></div></div>`).join("")}
      </div>
      <form class="chat-input" id="chat-form">
        <input id="chat-in" placeholder="Көмекшіге хабарлама..." autocomplete="off" />
        <button class="btn" aria-label="Жіберу">${ic("send", 18)}</button>
      </form>
      <div class="row between small muted" style="padding:0 18px 14px"><span>Демо-режим · жауаптар алдын ала дайындалған</span><button class="link" data-act="clearChat">Диалогты тазалау</button></div>
    </div>
    <div class="stack">
      <div class="card">
        <div class="card-head"><p class="card-title">Ағымдағы контекст</p><a href="#subjects" class="link">Өзгерту</a></div>
        <div class="row">${box("√x")}<div><div class="t-strong">Квадрат теңдеулер</div><div class="muted small">Математика · ${USER.grade}</div></div></div>
      </div>
      <div class="card">
        <div class="card-head"><p class="card-title">Тақырып бойынша прогресс</p><a href="#progress" class="link">Толығырақ</a></div>
        <div class="row" style="gap:18px;margin-bottom:18px">${ring(68, 80)}<div><b style="font-size:20px">32-ден 21</b><div class="muted small">тақырып өтілді</div></div></div>
        ${[["Теория", 80], ["Мысалдар", 65], ["Практика", 45]].map(([n, p]) => `<div style="margin-bottom:12px"><div class="row between small" style="margin-bottom:6px"><span>${n}</span><b>${p}%</b></div>${bar(p)}</div>`).join("")}
      </div>
    </div>
  </div>`;
};

pages.quiz = () => {
  const q = state.quiz;
  if (q.finished) {
    const correct = q.ans.filter((a, i) => a === QUIZ[i].r).length;
    const p = Math.round((correct / QUIZ.length) * 100);
    return `
    ${crumb("Білімді тексеру")}
    <h1>Тест аяқталды!</h1>
    <p class="subtitle">Математика · Квадрат теңдеулер</p>
    <div class="grid g-main">
      <div class="card">
        <div class="row wrap" style="gap:28px;margin-bottom:24px">${ring(p, 120)}<div><div style="font-size:28px;font-weight:700">${QUIZ.length}-тен ${correct}</div><div class="muted">дұрыс жауап</div><p style="margin:12px 0 0">${p >= 80 ? "Керемет нәтиже! 🎉" : p >= 50 ? "Жақсы! Бірнеше тақырыпты қайталап шық." : "Тақырыпты қайталауды ұсынамыз."}</p></div></div>
        ${QUIZ.map((x, i) => `<div class="list-item"><span class="badge ${q.ans[i] === x.r ? "green" : "red"}">${i + 1}</span><div class="grow small">${x.q}</div><span class="small ${q.ans[i] === x.r ? "" : "muted"}">${q.ans[i] === null ? "Жауап жоқ" : x.a[q.ans[i]]}</span></div>`).join("")}
      </div>
      <div class="card" style="align-self:start">
        <p class="card-title" style="margin-top:0">Келесі қадам</p>
        <p class="muted small" style="line-height:1.5">Қателерді AI Tutor-мен бірге талда немесе тесті қайта тапсыр.</p>
        <div class="stack" style="gap:10px"><a href="#tutor" class="btn block">AI Tutor-мен талдау</a><button class="btn ghost block" data-act="quizReset">Қайта тапсыру</button></div>
      </div>
    </div>`;
  }
  const cur = QUIZ[q.i];
  const mm = Math.floor(q.left / 60), ss = (q.left % 60).toString().padStart(2, "0");
  return `
  ${crumb("Білімді тексеру")}
  <h1>Білімді тексеру</h1>
  <p class="subtitle">Біліміңді тексеріп, өткен материалды бекіт.</p>
  <div class="grid g-main">
    <div class="card">
      <div class="row between wrap">
        <div class="row">${box("√x")}<div><div class="muted small">Математика</div><div class="t-strong">Квадрат теңдеулер</div></div></div>
        <div style="text-align:right"><div class="muted small">Қалған уақыт</div><div id="timer" style="font-size:20px;font-weight:700;color:var(--accent)">${mm}:${ss}</div></div>
      </div>
      <div style="margin:22px 0 0" class="muted small">${QUIZ.length} сұрақтың ${q.i + 1}-і</div>
      <div style="margin-top:8px">${bar(((q.i + 1) / QUIZ.length) * 100)}</div>
      <div class="question">${cur.q}</div>
      ${cur.a.map((a, j) => `<button class="option ${q.ans[q.i] === j ? "sel" : ""}" data-act="answer" data-v="${j}"><span class="l">${"ABCD"[j]}</span>${a}</button>`).join("")}
      <div class="row between" style="margin-top:20px">
        <button class="btn ghost" data-act="qPrev" ${q.i === 0 ? "disabled" : ""}>${ic("left", 16)} Артқа</button>
        <span class="muted small">Бір жауапты таңда</span>
        <button class="btn" data-act="qNext">${q.i === QUIZ.length - 1 ? "Аяқтау" : "Келесі"} ${arrow}</button>
      </div>
    </div>
    <div class="stack">
      <div class="card">
        <p class="card-title" style="margin:0 0 16px">Сенің прогресің</p>
        <div class="qnums">${QUIZ.map((_, i) => `<button class="${i === q.i ? "cur" : q.ans[i] !== null ? "done" : ""}" data-act="qGo" data-v="${i}">${i + 1}</button>`).join("")}</div>
        <div class="row wrap small muted" style="gap:14px;margin-top:14px"><span class="row" style="gap:6px"><i style="width:10px;height:10px;border-radius:3px;background:var(--accent-soft);display:inline-block"></i>Жауап берілді</span><span class="row" style="gap:6px"><i style="width:10px;height:10px;border-radius:3px;background:var(--accent);display:inline-block"></i>Ағымдағы</span><span class="row" style="gap:6px"><i style="width:10px;height:10px;border-radius:3px;border:1px solid var(--line);display:inline-block"></i>Жауап жоқ</span></div>
      </div>
      <div class="card">
        <p class="card-title" style="margin:0 0 12px">Тест туралы ақпарат</p>
        ${[["Пән", "Математика"], ["Тақырып", "Квадрат теңдеулер"], ["Барлық сұрақ", QUIZ.length], ["Өту уақыты", "15 минут"]].map(([a, b]) => `<div class="row between small" style="padding:7px 0"><span class="muted">${a}</span><b>${b}</b></div>`).join("")}
      </div>
      <div class="card soft">
        <div class="row">${box("", "", 36).replace("></div>", `>${ic("lock", 18)}</div>`)}<p class="card-title" style="margin:0">AI Tutor қолжетімсіз</p></div>
        <p class="muted small" style="line-height:1.5;margin:12px 0 0">Білімді тексеру кезінде ЖИ көмегі өшірілген. Әділ нәтиже алу үшін тапсырмаларды өз бетіңше шеш.</p>
      </div>
    </div>
  </div>`;
};

pages.progress = () => {
  const data = {
    week: { labels: ["Дс", "Сс", "Ср", "Бс", "Жм", "Сн", "Жс"], v: [35, 55, 40, 70, 45, 25, 0], stats: ["12", "4 сағ 30 мин", "4", "+12%"], cap: "Осы апта" },
    month: { labels: ["1-апта", "2-апта", "3-апта", "4-апта"], v: [210, 260, 190, 270], stats: ["46", "15 сағ 30 мин", "14", "+27%"], cap: "Осы ай" },
    all: { labels: ["Қыр", "Қаз"], v: [820, 930], stats: ["98", "29 сағ 10 мин", "31", "+41%"], cap: "Барлық уақыт" },
  }[state.progRange];
  const max = Math.max(...data.v, 1), top = data.v.indexOf(Math.max(...data.v));
  return `
  ${crumb("Прогресс")}
  <div class="page-head">
    <div><h1>Әр қадам — мақсатқа жақындау</h1><p class="subtitle">Нәтижелеріңді бақыла және біліміңнің қалай өсіп келе жатқанын байқа.</p></div>
    <div class="tabs">${[["week", "Апта"], ["month", "Ай"], ["all", "Барлық уақыт"]].map(([k, t]) => `<button class="${state.progRange === k ? "on" : ""}" data-act="progRange" data-v="${k}">${t}</button>`).join("")}</div>
  </div>
  <div class="grid g-4" style="margin-bottom:20px">
    ${[["book", "", "Өтілген сабақтар"], ["clock", "", "Оқуға жұмсалған уақыт"], ["clip", "purple", "Өтілген тесттер"], ["chart", "orange", "Білімнің өсуі"]].map(([icn, c, l], i) => `<div class="card row">${box("", c).replace("></div>", `>${ic(icn, 20)}</div>`)}<div><div style="font-size:22px;font-weight:700">${data.stats[i]}</div><div class="muted small">${l}</div></div></div>`).join("")}
  </div>
  <div class="grid g-main" style="margin-bottom:20px">
    <div class="card">
      <div class="card-head"><p class="card-title">Сенің оқу белсенділігің</p><span class="muted small">${data.cap}</span></div>
      <div class="muted small">Оқуға арналған уақыт, минутпен</div>
      <div class="chart">${data.v.map((v, i) => `<div class="col ${i === top ? "top" : ""}"><span class="v">${v}</span><i style="height:${Math.max((v / max) * 150, 3)}px"></i></div>`).join("")}</div>
      <div class="chart-labels">${data.labels.map((l) => `<span>${l}</span>`).join("")}</div>
      <div class="note" style="margin-top:18px">Ең жақсы нәтижең — ${Math.max(...data.v)} минут. Өз қарқыныңмен жалғастыр!</div>
    </div>
    <div class="card" style="text-align:center">
      <p class="card-title" style="text-align:left;margin:0 0 20px">Тақырыптарды жалпы түсіну</p>
      <div style="display:grid;place-items:center">${ring(68, 130)}</div>
      <div class="t-strong" style="margin-top:18px">32 тақырыптың 21-і өтілді</div>
      <p class="muted small" style="line-height:1.5">Тамаша қарқын! Жаңа есептерді сенімді шешу үшін оқуды жалғастыр.</p>
      <a href="#lesson" class="btn block">Оқуды жалғастыру ${arrow}</a>
    </div>
  </div>
  <div class="grid g-2">
    <div class="card">
      <div class="card-head"><p class="card-title">Пәндер бойынша прогресс</p><a href="#subjects" class="link">Барлық пәндер ${arrow}</a></div>
      ${SUBJECTS.slice(0, 6).map((s) => `<div class="list-item">${box(s.sym, s.c, 38)}<div class="grow"><div class="row between"><span class="t-strong">${s.name}</span><b>${s.p}%</b></div><div class="muted small" style="margin:2px 0 8px">${s.next}</div>${bar(s.p)}</div></div>`).join("")}
    </div>
    <div class="card">
      <div class="card-head"><p class="card-title">Сенің жетістіктерің</p><span class="muted small">6-дан 3</span></div>
      <div class="grid g-2" style="gap:12px">
        ${[["Алғашқы қадам", "Алғашқы сабақ өтілді", 1, "star"], ["Дәл нысанаға", "Бір де қатесіз тест", 1, "target"], ["Жақсы ырғақта", "Қатарынан 5 күн оқу", 1, "fire"], ["Зерттеуші", "5 курсты аяқта", 0, "book"], ["Марафоншы", "30 күн қатарынан оқу", 0, "clock"], ["Шебер", "Пәнді 100% аяқта", 0, "check"]].map(([t, d, ok, icn]) => `<div class="row" style="border:1px solid var(--line);border-radius:10px;padding:12px;${ok ? "" : "opacity:.5"}">${box("", ok ? "orange" : "", 36).replace("></div>", `>${ic(icn, 18)}</div>`)}<div><div class="t-strong small">${t}</div><div class="muted small">${d}</div></div></div>`).join("")}
      </div>
      <div class="note" style="margin-top:16px"><b>Кішкентай қадамдар — үлкен нәтиже.</b><br><span class="muted">Күн сайын 20 минуттық практиканың өзі үлкен өзгеріс әкеледі.</span></div>
    </div>
  </div>`;
};

/* Күнтізбе — ағымдағы ай */
const MONTHS = ["Қаңтар", "Ақпан", "Наурыз", "Сәуір", "Мамыр", "Маусым", "Шілде", "Тамыз", "Қыркүйек", "Қазан", "Қараша", "Желтоқсан"];
const MONTHS_GEN = ["қаңтар", "ақпан", "наурыз", "сәуір", "мамыр", "маусым", "шілде", "тамыз", "қыркүйек", "қазан", "қараша", "желтоқсан"];
const DOW = ["Дс", "Сс", "Ср", "Бс", "Жм", "Сн", "Жс"];
const EV_BY_DOW = { 0: [["Математика", "15:00", ""]], 1: [["Физика", "16:00", "purple"]], 2: [["Химия", "15:00", "orange"]], 3: [["Үй тапсырмасы", "20:00", "red"]], 4: [["Ағылшын тілі", "16:30", "green"]], 5: [], 6: [] };
state.calOffset = 0;
state.extraEvents = [];
function eventsFor(d) {
  const dow = (d.getDay() + 6) % 7;
  let ev = [...(EV_BY_DOW[dow] || [])];
  if (dow === 5 && d.getDate() % 14 < 7) ev = [["Бақылау жұмысы", "10:00", "red"]];
  if (dow === 6 && d.getDate() > 21) ev = [["Сынақ тест", "11:00", "purple"]];
  state.extraEvents.filter((e) => e.date === d.toDateString()).forEach((e) => ev.push([e.t, e.time, "green"]));
  return ev;
}
pages.calendar = () => {
  const now = new Date();
  const base = new Date(now.getFullYear(), now.getMonth() + state.calOffset, 1);
  const startDow = (base.getDay() + 6) % 7;
  const start = new Date(base); start.setDate(1 - startDow);
  const cells = [];
  const totalCells = state.calView === "week" ? 7 : 42;
  const s0 = state.calView === "week" ? (() => { const d = new Date(now); d.setDate(d.getDate() - ((d.getDay() + 6) % 7)); return d; })() : start;
  for (let i = 0; i < totalCells; i++) { const d = new Date(s0); d.setDate(s0.getDate() + i); cells.push(d); }
  const weekStart = new Date(now); weekStart.setDate(now.getDate() - ((now.getDay() + 6) % 7));
  const week = [...Array(7)].map((_, i) => { const d = new Date(weekStart); d.setDate(weekStart.getDate() + i); return d; });
  const upcoming = [...Array(14)].map((_, i) => { const d = new Date(now); d.setDate(now.getDate() + i); return d; }).flatMap((d) => eventsFor(d).filter((e) => e[2] === "red" || e[2] === "purple").map((e) => [d, e])).slice(0, 4);
  return `
  ${crumb("Күнтізбе")}
  <div class="page-head">
    <div><h1>Оқуыңды жоспарла</h1><p class="subtitle">Барлық сабақтар, үй тапсырмалары және бақылау жұмыстары бір жерде.</p></div>
    <button class="btn" data-act="addEvent">${ic("plus", 18)} Оқиға қосу</button>
  </div>
  <div class="grid g-main">
    <div class="card">
      <div class="card-head wrap">
        <div class="row"><button class="btn ghost sm" data-act="calNav" data-v="-1">‹</button><p class="card-title" style="min-width:140px;text-align:center">${MONTHS[base.getMonth()]} ${base.getFullYear()}</p><button class="btn ghost sm" data-act="calNav" data-v="1">›</button></div>
        <div class="row"><div class="tabs"><button class="${state.calView === "month" ? "on" : ""}" data-act="calView" data-v="month">Ай</button><button class="${state.calView === "week" ? "on" : ""}" data-act="calView" data-v="week">Апта</button></div><button class="btn ghost sm" data-act="calToday">Бүгін</button></div>
      </div>
      <div class="cal">
        ${DOW.map((d) => `<div class="dow">${d}</div>`).join("")}
        ${cells.map((d) => `<div class="day ${state.calView === "month" && d.getMonth() !== base.getMonth() ? "out" : ""} ${d.toDateString() === now.toDateString() ? "today" : ""}" ${state.calView === "week" ? 'style="min-height:220px"' : ""}><span class="n">${d.getDate()}</span>${eventsFor(d).map((e) => `<span class="ev ${e[2]}">${e[0]}<br>${e[1]}</span>`).join("")}</div>`).join("")}
      </div>
    </div>
    <div class="stack">
      <div class="card soft">
        <p class="card-title" style="margin:0 0 8px">Аптаға арналған оқу мақсатым</p>
        <p class="muted small" style="line-height:1.5;margin:0 0 14px">5 сабақ өту, 3 үй тапсырмасын аяқтау және бақылау жұмысына дайындалу.</p>
        <div class="row between small" style="margin-bottom:8px"><span>5-тен 3 орындалды</span><b>60%</b></div>${bar(60)}
      </div>
      <div class="card">
        <div class="card-head"><p class="card-title">Апталық жоспар</p></div>
        ${week.map((d, i) => { const e = eventsFor(d)[0]; return `<div class="list-item"><div style="width:34px;text-align:center"><div class="muted small">${DOW[i]}</div><b>${d.getDate()}</b></div><div class="grow">${e ? `<div class="t-strong small">${e[0]}</div><div class="muted small">${e[1]}</div>` : `<div class="muted small">Бос күн</div><button class="link small" data-act="addEvent" data-v="${d.toDateString()}">+ Сабақ қосу</button>`}</div></div>`; }).join("")}
      </div>
      <div class="card">
        <div class="card-head"><p class="card-title">Жақын дедлайндар</p><a href="#tasks" class="link">Барлық тапсырмалар ${arrow}</a></div>
        ${upcoming.map(([d, e]) => `<div class="list-item">${box("!", e[2], 34)}<div class="grow"><div class="t-strong small">${e[0]}</div><div class="muted small">${e[1]}</div></div><span class="badge gray">${d.getDate()} ${MONTHS_GEN[d.getMonth()].slice(0, 3)}</span></div>`).join("") || '<p class="muted small">Жақын дедлайн жоқ</p>'}
      </div>
    </div>
  </div>`;
};

pages.lesson = () => {
  const content = {
    theory: `<p class="card-title" style="margin:0 0 12px">Курстың негізгі идеялары</p>
      <h3 style="margin:0 0 10px">Квадрат теңдеулер</h3>
      <p style="line-height:1.65">Квадрат теңдеу — бұл <b>ax² + bx + c = 0</b> түріндегі теңдеу, мұнда a ≠ 0. a, b және c әріптерін коэффициенттер деп атайды.</p>
      <p style="line-height:1.65">Егер өрнекті екі көбейткіштің көбейтіндісі түрінде көрсетуге болса, теңдеуді көбейткіштерге жіктеу арқылы шешу ыңғайлы. Көбейткіштердің кем дегенде біреуі нөлге тең болғанда, көбейтінді нөлге тең болады.</p>
      <span class="formula" style="font-size:18px;text-align:center;padding:16px">x² − 5x + 6 = (x − 2)(x − 3) = 0</span>
      <div class="note" style="margin:16px 0"><b>Есте сақта</b><br>Нәтижені тексер: табылған әр түбірді бастапқы теңдеуге қой.</div>`,
    examples: `<p class="card-title" style="margin:0 0 12px">Мысалдар</p>
      <div class="stack" style="gap:14px">
        <div class="card" style="padding:16px"><b>1-мысал.</b> x² − 9 = 0<span class="formula">(x − 3)(x + 3) = 0 ⇒ x = ±3</span></div>
        <div class="card" style="padding:16px"><b>2-мысал.</b> x² + 4x = 0<span class="formula">x(x + 4) = 0 ⇒ x₁ = 0, x₂ = −4</span></div>
        <div class="card" style="padding:16px"><b>3-мысал.</b> x² − 7x + 12 = 0<span class="formula">(x − 3)(x − 4) = 0 ⇒ x₁ = 3, x₂ = 4</span></div>
      </div>`,
    practice: `<p class="card-title" style="margin:0 0 12px">Практика</p>
      <p class="muted">Теңдеулерді көбейткіштерге жіктеу арқылы шеш:</p>
      <ol style="line-height:2.1">
        <li>x² − 16 = 0</li><li>x² + 6x = 0</li><li>x² − 8x + 15 = 0</li><li>x² + x − 6 = 0</li>
      </ol>
      <a href="#quiz" class="btn sm">Тест арқылы тексеру ${arrow}</a>`,
  }[state.lessonTab];
  return `
  <div class="crumb"><a href="#courses">Курстар</a> / Математика / Квадрат теңдеулер</div>
  <div class="eyebrow" style="margin:12px 0 8px">12 сабақтың 5-і · Математика</div>
  <h1>Көбейткіштерге жіктеу</h1>
  <p class="subtitle">Квадрат теңдеулер · ${USER.grade}</p>
  <div class="grid g-main">
    <div class="card">
      <div class="tabs" style="margin-bottom:22px">${[["theory", "Теория"], ["examples", "Мысалдар"], ["practice", "Практика"]].map(([k, t]) => `<button class="${state.lessonTab === k ? "on" : ""}" data-act="lessonTab" data-v="${k}">${t}</button>`).join("")}</div>
      ${content}
      <p class="muted small" style="margin-top:20px">Макетте курстың шолу материалы берілген. Жеке сабақтардың толық материалдары кейінірек қосылады.</p>
      <div class="row between wrap" style="border-top:1px solid var(--line);padding-top:18px;margin-top:18px;gap:12px">
        <button class="btn ghost" data-act="toast" data-v="Алдыңғы сабақ: Дискриминант">${ic("left", 16)} Алдыңғы сабақ</button>
        <div class="row"><a href="#tutor" class="btn ghost">Мысалды талдау</a><button class="btn" data-act="finishLesson">Сабақты аяқтау ${ic("check", 16)}</button></div>
      </div>
    </div>
    <div class="card" style="align-self:start">
      <div class="row" style="margin-bottom:18px">${box("√x")}<div><div class="t-strong">Квадрат теңдеулер</div><div class="muted small">12 сабақ · 3 сағат</div></div></div>
      <div class="row between small" style="margin-bottom:8px"><span>Сенің прогресің</span><b>33%</b></div>${bar(33)}
      <div class="muted small" style="margin:8px 0 14px">12 сабақтың 4-і аяқталды</div>
      <div class="lesson-list">${LESSONS.map((l, i) => `<div class="li ${i < 4 ? "done" : ""} ${i === 4 ? "cur" : ""}"><span class="n">${i < 4 ? "✓" : i + 1}</span>${l}</div>`).join("")}</div>
    </div>
  </div>`;
};

pages.tasks = () => {
  const list = TASKS.filter((t) => state.taskFilter === "all" || (state.taskFilter === "done" ? t.done : !t.done));
  return `
  ${crumb("Тапсырмалар")}
  <h1>Сенің тапсырмаларың</h1>
  <p class="subtitle">Күн сайынғы кішкентай қадамдар үлкен нәтижелерге әкеледі.</p>
  <div class="chips">${[["all", "Барлық тапсырмалар"], ["open", "Орындалуда"], ["done", "Орындалған"]].map(([k, t]) => `<button class="chip ${state.taskFilter === k ? "on" : ""}" data-act="taskFilter" data-v="${k}">${t}</button>`).join("")}</div>
  <div class="card">
    ${list.map((t) => `<div class="list-item">${box(t.sym, t.c, 42)}<div class="grow"><div class="t-strong">${t.t}</div><div class="muted small">${t.s}</div></div><span class="muted small">${t.full}</span>${t.done ? '<span class="badge green">Орындалды</span>' : `<button class="btn sm" data-act="doTask" data-v="${TASKS.indexOf(t)}">Орындау</button>`}</div>`).join("") || '<div class="empty muted">Тапсырма жоқ 🎉</div>'}
  </div>`;
};

pages.settings = () => {
  const s = state.settings;
  const tg = (k, t, d) => `<div class="list-item"><div class="grow"><div class="t-strong">${t}</div><div class="muted small">${d}</div></div><button class="toggle ${s[k] ? "on" : ""}" data-act="toggle" data-v="${k}" aria-label="${t}"></button></div>`;
  return `
  ${crumb("Баптаулар")}
  <h1>Баптаулар</h1>
  <p class="subtitle">Профиліңді және платформаны өзіңе ыңғайлап бапта.</p>
  <div class="grid g-2">
    <div class="card">
      <p class="card-title" style="margin:0 0 18px">Профиль</p>
      <div class="row" style="margin-bottom:20px"><div class="avatar" style="width:56px;height:56px;font-size:20px">${USER.initial}</div><div><div class="t-strong">${USER.name}</div><div class="muted small">${USER.grade}</div></div></div>
      <div class="stack" style="gap:14px">
        <label class="field">Аты<input id="set-name" value="${esc(USER.name)}" /></label>
        <label class="field">Сынып<select id="set-grade">${[7, 8, 9, 10, 11].map((g) => `<option ${USER.grade.startsWith(g) ? "selected" : ""}>${g} сынып</option>`).join("")}</select></label>
        <label class="field">Оқу тілі<select><option>Қазақ тілі</option><option>Орыс тілі</option><option>English</option></select></label>
        <button class="btn" data-act="saveProfile">Сақтау</button>
      </div>
    </div>
    <div class="card">
      <p class="card-title" style="margin:0 0 8px">Хабарламалар</p>
      ${tg("notif", "Push-хабарламалар", "Жаңа тапсырмалар мен дедлайндар туралы")}
      ${tg("email", "Email-хабарламалар", "Апталық прогресс есебі")}
      ${tg("reminders", "Оқу туралы еске салу", "Күн сайын оқуды еске салу")}
      ${tg("dark", "Қараңғы тақырып", "Жақында қолжетімді болады")}
    </div>
  </div>`;
};

pages.help = () => `
  ${crumb("Көмек")}
  <h1>Көмек орталығы</h1>
  <p class="subtitle">Жиі қойылатын сұрақтарға жауаптар және қолдау қызметі.</p>
  <div class="grid g-main">
    <div class="card faq">
      ${[["Диагностика қалай жұмыс істейді?", "Диагностика сенің жауаптарыңа бейімделіп, деңгейіңді анықтайды және әлсіз тақырыптарды «Олқылықтарым» бөліміне қосады."], ["AI Tutor-ды қалай пайдаланамын?", "AI Tutor бөлімін ашып, сұрағыңды жаз немесе дайын батырмаларды таңда: «Қарапайымырақ түсіндір», «Мысал келтір» және т.б."], ["Неге тест кезінде AI Tutor өшеді?", "Әділ нәтиже алу үшін білімді тексеру кезінде ЖИ көмегі уақытша қолжетімсіз."], ["Прогресім қалай есептеледі?", "Прогресс өтілген сабақтар, тест нәтижелері және оқуға жұмсалған уақыт негізінде есептеледі."], ["Сыныпты қалай өзгертемін?", "Баптаулар → Профиль бөлімінде сыныпты таңдап, «Сақтау» батырмасын бас."]].map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("")}
    </div>
    <div class="card" style="align-self:start">
      ${box("?", "", 40)}
      <p class="card-title" style="margin:16px 0 8px">Жауап таппадың ба?</p>
      <p class="muted small" style="line-height:1.5">Қолдау қызметіне жаз — біз көмектесеміз.</p>
      <button class="btn block" data-act="toast" data-v="Сұрауың жіберілді! Жақын арада жауап береміз.">Қолдауға жазу</button>
    </div>
  </div>`;

/* ---------- Роутер ---------- */
let timerId = null;
function render() {
  const route = (location.hash.slice(1) || "home").split("?")[0];
  const page = pages[route] ? route : "home";
  app.innerHTML = pages[page]();
  document.title = `DaraLearn — ${TITLES[page] || "Басты бет"}`;
  const activeNav = { lesson: "courses", tasks: "home" }[page] || page;
  const mk = (arr) => arr.map(([k, t, icn]) => `<a href="#${k}" class="${activeNav === k ? "active" : ""}">${ic(icn)}<span>${t}</span></a>`).join("");
  $("#nav").innerHTML = mk(NAV);
  $("#nav-bottom").innerHTML = mk(NAV_BOTTOM);
  document.body.classList.remove("menu-open");
  $(".user-name").textContent = USER.name;
  $(".user-sub").textContent = USER.grade;
  $(".user .avatar").textContent = USER.initial;

  clearInterval(timerId);
  if (page === "quiz" && !state.quiz.finished) {
    timerId = setInterval(() => {
      state.quiz.left = Math.max(0, state.quiz.left - 1);
      const el = $("#timer");
      if (el) el.textContent = `${Math.floor(state.quiz.left / 60)}:${(state.quiz.left % 60).toString().padStart(2, "0")}`;
      if (state.quiz.left === 0) { state.quiz.finished = true; render(); }
    }, 1000);
  }
  if (page === "tutor") { const b = $("#chat-body"); if (b) b.scrollTop = b.scrollHeight; }
}
function rerender() { const y = window.scrollY; render(); window.scrollTo(0, y); }

/* ---------- Оқиғалар ---------- */
function sendChat(text) {
  if (!text.trim()) return;
  state.chat.push({ me: true, text, t: timeNow() });
  rerender();
  setTimeout(() => { state.chat.push({ me: false, text: botReply(text), t: timeNow() }); rerender(); }, 600);
}

document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-act]");
  if (!el) return;
  const { act, v } = el.dataset;
  const q = state.quiz;
  switch (act) {
    case "subjFilter": state.subjFilter = v; break;
    case "subjSel": state.subjSel = v; break;
    case "courseFilter": state.courseFilter = v; break;
    case "diagSel": state.diagSel = v; break;
    case "startDiag": q.i = 0; q.ans.fill(null); q.finished = false; q.left = 900; location.hash = "quiz"; return;
    case "gapSort": state.gapSort = v; break;
    case "taskFilter": state.taskFilter = v; break;
    case "doTask": TASKS[+v].done = true; toast("Тапсырма орындалды деп белгіленді ✓"); break;
    case "progRange": state.progRange = v; break;
    case "lessonTab": state.lessonTab = v; break;
    case "finishLesson": toast("Сабақ аяқталды! Жарайсың 🎉"); return;
    case "quick": sendChat(v); return;
    case "clearChat": state.chat = []; break;
    case "answer": q.ans[q.i] = +v; break;
    case "qPrev": q.i = Math.max(0, q.i - 1); break;
    case "qNext": if (q.i === QUIZ.length - 1) q.finished = true; else q.i++; break;
    case "qGo": q.i = +v; break;
    case "quizReset": q.i = 0; q.ans.fill(null); q.finished = false; q.left = 900; break;
    case "calNav": state.calOffset += +v; state.calView = "month"; break;
    case "calView": state.calView = v; if (v === "week") state.calOffset = 0; break;
    case "calToday": state.calOffset = 0; break;
    case "addEvent": {
      const t = prompt("Оқиға атауы:", "Математика");
      if (!t) return;
      const time = prompt("Уақыты:", "16:00") || "";
      const date = v ? new Date(v) : new Date(prompt("Күні (ЖЖЖЖ-АА-КК):", new Date().toISOString().slice(0, 10)) || Date.now());
      if (isNaN(date)) return toast("Күн қате енгізілді");
      state.extraEvents.push({ t, time, date: date.toDateString() });
      toast("Оқиға қосылды ✓");
      break;
    }
    case "toggle": state.settings[v] = !state.settings[v]; break;
    case "saveProfile": {
      const n = $("#set-name").value.trim() || "User";
      USER.name = n; USER.initial = n[0].toUpperCase(); USER.grade = $("#set-grade").value;
      toast("Профиль сақталды ✓");
      break;
    }
    case "toast": toast(v); return;
    default: return;
  }
  rerender();
});

document.addEventListener("submit", (e) => {
  if (e.target.id === "chat-form") { e.preventDefault(); const i = $("#chat-in"); sendChat(i.value); i.value = ""; }
});

/* Іздеу */
const SEARCH = [...NAV, ...NAV_BOTTOM].map(([k, t]) => [t, k]).concat(COURSES.map((c) => [c.t, "courses"]), TASKS.map((t) => [t.t, "tasks"]), LESSONS.map((l) => [l, "lesson"]));
$("#search").addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;
  const q = e.target.value.trim().toLowerCase();
  if (!q) return;
  const hit = SEARCH.find(([t]) => t.toLowerCase().includes(q));
  if (hit) { location.hash = hit[1]; e.target.value = ""; e.target.blur(); } else toast("Ештеңе табылмады");
});
document.addEventListener("keydown", (e) => { if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); $("#search").focus(); } });
$("#bell").addEventListener("click", () => toast("Жаңа хабарлама: Математикадан үй тапсырмасы бүгін тапсырылады"));
$("#burger").addEventListener("click", () => document.body.classList.toggle("menu-open"));
$("#overlay").addEventListener("click", () => document.body.classList.remove("menu-open"));

window.addEventListener("hashchange", () => { render(); window.scrollTo(0, 0); });
render();

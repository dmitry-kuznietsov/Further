const copy = {
ru: {
flight:'Найти рейс',all:'Все направления',italy:'Италия',eyebrow:'ИТАЛИЯ · ГОРОД ВЕЧНОЙ ИСТОРИИ',intro:'Город, где античные руины соседствуют с шумными площадями, а лучший план иногда — просто идти за ароматом свежей пасты.',routeCta:'Открыть маршрут ↓',discover:'ПОЧУВСТВОВАТЬ ГОРОД',introTitle:'Рим не нужно<br><em>торопить.</em>',introCopy:'Оставьте время на длинный обед, маленькие церкви и вечернюю прогулку вдоль Тибра. Исторический центр удобно исследовать пешком, с остановками на кофе и джелато.',highlights:'НЕ ПРОПУСТИТЬ',sightsTitle:'Истории на каждом<br><em>повороте.</em>',sightsLead:'Начните с античного центра, а затем сверните в кварталы, где Рим живёт сегодня.',colosseum:'Колизей и Римский форум',colosseumCopy:'Главная сцена античного города. Бронируйте вход заранее и выделите на комплекс не меньше половины дня.',pantheon:'Пантеон',pantheonCopy:'Зайдите внутрь ради огромного купола и света, который меняется в течение дня.',trevi:'Фонтан Треви',treviCopy:'Приходите рано утром или поздно вечером, когда площадь становится спокойнее.',trastevere:'Трастевере',trastevereCopy:'Узкие мощёные улицы, небольшие площади и траттории для неспешного вечера.',foodTag:'ВКУС РИМА',eat:'ПОПРОБОВАТЬ',foodTitle:'Сначала паста.<br><em>Потом ещё паста.</em>',carbonara:'Яйцо, пекорино, гуанчале и чёрный перец — без сливок.',cacio:'Паста с пекорино и перцем: просто, но требует мастерства.',suppli:'Хрустящие рисовые шарики с сырной начинкой.',gelato:'Ищите джелатерии с натуральными цветами и сезонными вкусами.',walk:'ПРОГУЛКА НА ДЕНЬ',routeTitle:'Классический Рим<br><em>пешком.</em>',routeLead:'Маршрут соединяет главные места центра. На весь день с остановками на еду и кофе.',stop1:'Колизей и Форум',stop1copy:'Начните пораньше, пока не жарко и меньше очередей',stop2:'Капитолийский холм',stop2copy:'Панорама на Форум и короткая передышка',stop3:'Пантеон и обед',stop3copy:'Паста в одной из боковых улиц исторического центра',stop4:'Фонтан Треви',stop4copy:'Загляните по пути к площади Испании',stop5:'Трастевере',stop5copy:'Закончите день ужином по ту сторону Тибра',mapCaption:'Точки маршрута на карте · OpenStreetMap',tips:'ПОЛЕЗНО ЗНАТЬ',tipsTitle:'Несколько вещей,<br><em>которые упростят день.</em>',tip1:'<strong>Билеты:</strong> Колизей и популярные музеи лучше бронировать на официальных сайтах заранее.',tip2:'<strong>Обувь:</strong> Брусчатка красивая, но неровная — удобные кроссовки пригодятся.',tip3:'<strong>Вода:</strong> В городе есть питьевые фонтанчики nasoni, можно пополнять бутылку.',tip4:'<strong>Темп:</strong> Не планируйте слишком много на один день — расстояния на карте обманчивы.',next:'СЛЕДУЮЩАЯ ОСТАНОВКА',ctaTitle:'Рим уже ждёт.',ctaCopy:'Выберите даты и проверьте варианты перелёта.',footer:'Путешествия начинаются с любопытства.',top:'Наверх',themeDark:'Тёмная тема',themeLight:'Светлая тема'
},
en: {
flight:'Find flights',all:'All destinations',italy:'Italy',eyebrow:'ITALY · THE ETERNAL CITY',intro:'Ancient ruins meet lively piazzas, and sometimes the best plan is simply following the scent of freshly made pasta.',routeCta:'Explore the route ↓',discover:'FEEL THE CITY',introTitle:'Rome is not a city<br><em>to rush through.</em>',introCopy:'Make room for a long lunch, tiny churches and an evening walk along the Tiber. Explore the historic centre on foot, with coffee and gelato breaks along the way.',highlights:'DON’T MISS',sightsTitle:'A story around<br><em>every corner.</em>',sightsLead:'Start in the ancient centre, then wander into neighbourhoods where Rome lives today.',colosseum:'Colosseum & Roman Forum',colosseumCopy:'The grand stage of ancient Rome. Book ahead and allow at least half a day for the archaeological area.',pantheon:'The Pantheon',pantheonCopy:'Step inside for the vast dome and the changing light through the oculus.',trevi:'Trevi Fountain',treviCopy:'Come early in the morning or later in the evening, when the square is calmer.',trastevere:'Trastevere',trastevereCopy:'Narrow cobbled lanes, small piazzas and trattorias made for an unhurried evening.',foodTag:'A TASTE OF ROME',eat:'TASTE THIS',foodTitle:'First, pasta.<br><em>Then more pasta.</em>',carbonara:'Egg, pecorino, guanciale and black pepper — no cream.',cacio:'Pasta with pecorino and pepper: simple ingredients, serious technique.',suppli:'Crisp rice croquettes with a molten cheese centre.',gelato:'Look for gelaterias with natural colours and seasonal flavours.',walk:'A DAY ON FOOT',routeTitle:'Classic Rome<br><em>on foot.</em>',routeLead:'A walk linking the historic centre’s highlights. Allow a full day with food and coffee stops.',stop1:'Colosseum & Forum',stop1copy:'Start early, before the heat and queues build up',stop2:'Capitoline Hill',stop2copy:'A beautiful view over the Forum and a short break',stop3:'Pantheon & lunch',stop3copy:'Find pasta on one of the historic centre’s side streets',stop4:'Trevi Fountain',stop4copy:'Drop by on your way towards the Spanish Steps',stop5:'Trastevere',stop5copy:'Finish the day with dinner across the Tiber',mapCaption:'Route stops on the map · OpenStreetMap',tips:'GOOD TO KNOW',tipsTitle:'A few things<br><em>that make the day easier.</em>',tip1:'<strong>Tickets:</strong> Book the Colosseum and popular museums on official websites in advance.',tip2:'<strong>Shoes:</strong> The cobbles are beautiful but uneven — comfortable shoes matter.',tip3:'<strong>Water:</strong> Rome’s public drinking fountains, known as nasoni, are great for refills.',tip4:'<strong>Pace:</strong> Don’t pack too much into one day — distances can be deceptive.',next:'YOUR NEXT STOP',ctaTitle:'Rome is waiting.',ctaCopy:'Choose your dates and check flight options.',footer:'Travel begins with curiosity.',top:'Back to top',themeDark:'Dark theme',themeLight:'Light theme'
}
};
let lang='ru';
const langButton=document.querySelector('#language-toggle');
const themeButton=document.querySelector('#theme-toggle');
function syncTheme(){
 const dark=document.documentElement.dataset.theme==='dark';
 themeButton.setAttribute('aria-label',dark?copy[lang].themeLight:copy[lang].themeDark);
 themeButton.setAttribute('aria-pressed',String(dark));
 document.querySelector('.theme-toggle-text').textContent=dark?copy[lang].themeLight:copy[lang].themeDark;
 document.querySelector('meta[name="theme-color"]').content=dark?'#101722':'#f6f8fc';
}
function setLang(next){
 lang=next;document.documentElement.lang=next;
 document.querySelectorAll('[data-i18n]').forEach(node=>{const value=copy[next][node.dataset.i18n];if(value)node.innerHTML=value;});
 langButton.textContent=next==='ru'?'EN':'RU';syncTheme();
}
langButton.addEventListener('click',()=>setLang(lang==='ru'?'en':'ru'));
themeButton.addEventListener('click',()=>{
 document.documentElement.dataset.theme=document.documentElement.dataset.theme==='dark'?'light':'dark';
 try{localStorage.setItem('dalshe-theme',document.documentElement.dataset.theme);}catch(e){}
 syncTheme();
});
setLang('ru');
const routePoints=[
 {name:'Colosseum',coords:[41.8902,12.4922]},
 {name:'Roman Forum',coords:[41.8925,12.4853]},
 {name:'Capitoline Hill',coords:[41.8933,12.4829]},
 {name:'Pantheon',coords:[41.8986,12.4769]},
 {name:'Trevi Fountain',coords:[41.9009,12.4833]},
 {name:'Trastevere',coords:[41.8897,12.4690]}
];
function initMap(){
 const node=document.querySelector('#rome-map');
 if(!node||!window.L)return;
 const map=L.map(node,{scrollWheelZoom:false}).setView([41.8955,12.4815],14);
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);
 routePoints.forEach((point,index)=>L.marker(point.coords).addTo(map).bindPopup('<strong>'+(index+1)+'. '+point.name+'</strong>'));
 L.polyline(routePoints.map(point=>point.coords),{color:'#197db4',weight:4,opacity:.75,dashArray:'7 9'}).addTo(map);
 map.fitBounds(routePoints.map(point=>point.coords),{padding:[28,28]});
}
if(window.L)initMap();else window.addEventListener('load',initMap);

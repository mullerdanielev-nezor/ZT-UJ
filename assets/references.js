// ─────────── REFERENCES ───────────
const RP = 'assets/ZT ref/';
const REFS = [
  // Klímaszerelés
  {cat:'Klímaszerelés', title:'Ipari klímarendszer csövezése', img:RP+'Ipari-klimarendszer-csovezese.jpeg', desc:'Ipari környezetbe telepített klímarendszer csővezetékének kiépítése.'},
  {cat:'Klímaszerelés', title:'Daikin duo-split erkélyen', img:RP+'Zt-epuletgepeszet-referencia-6.jpeg', desc:'Két Daikin kültéri egység esztétikus elhelyezése zárt erkélyen.'},
  {cat:'Klímaszerelés', title:'Daikin kültéri egység homlokzaton', img:RP+'Zt-epuletgepeszet-referencia-7.jpeg', desc:'Daikin split klíma kültéri egység szakszerű homlokzati telepítése, takart csőkivezetéssel.'},

  // Fűtésszerelés
  {cat:'Fűtésszerelés', title:'Alacsony hőmérsékletű fűtési rendszer', img:RP+'Alacsony-homersekletu-futesi-rendszer-kiepitese.jpeg', desc:'Energiatakarékos, alacsony hőmérsékletű fűtési rendszer kiépítése.'},
  {cat:'Fűtésszerelés', title:'Fűtéscsövek hőszigetelése', img:RP+'Futescsovek-hoszigetelese-energiatakarekos-modon.jpeg', desc:'Fűtéscsövek energiatakarékos hőszigetelése.'},
  {cat:'Fűtésszerelés', title:'Hőszivattyú beltéri modul bekötése', img:RP+'Hoszivattyu-belteri-modul-bekotese.jpeg', desc:'Hőszivattyú beltéri egységének szakszerű bekötése.'},
  {cat:'Fűtésszerelés', title:'Hőszivattyú kültéri egység konzolra', img:RP+'Hoszivattyu-kulteri-egyseg-telepitese-konzolra.jpeg', desc:'Hőszivattyú kültéri egységének konzolra telepítése.'},
  {cat:'Fűtésszerelés', title:'Hőszivattyú kültéri egység', img:RP+'Hoszivattyu-kulteri-egyseg-telepitve.jpeg', desc:'Telepített hőszivattyú kültéri egység.'},
  {cat:'Fűtésszerelés', title:'Kazánház automata vezérléssel', img:RP+'Kazanhaz-kiepitese-automata-vezerlessel.jpeg', desc:'Komplett kazánház kiépítése automata vezérléssel.'},
  {cat:'Fűtésszerelés', title:'Kazánház modern berendezésekkel', img:RP+'Kazanhaz-kiepitese-modern-berendezesekkel.jpeg', desc:'Kazánház kiépítése modern, korszerű berendezésekkel.'},
  {cat:'Fűtésszerelés', title:'Modern kondenzációs kazán', img:RP+'Modern-kondenzacios-kazan-falra-szerelve.jpeg', desc:'Falra szerelt modern kondenzációs kazán.'},
  {cat:'Fűtésszerelés', title:'Padlófűtés csövek telepítése', img:RP+'Padlofutes-csovek-telepitese-betonozas-elott.jpeg', desc:'Padlófűtés csövek lefektetése betonozás előtt.'},
  {cat:'Fűtésszerelés', title:'Padlófűtés osztó-gyűjtő', img:RP+'Padlofutes-oszto-gyujto-szerelese.jpeg', desc:'Padlófűtés osztó-gyűjtő szerelése.'},
  {cat:'Fűtésszerelés', title:'Radiátor csatlakoztatása', img:RP+'Radiator-csatlakoztatasa-futesi-rendszerhez.jpeg', desc:'Radiátor csatlakoztatása a fűtési rendszerhez.'},
  {cat:'Fűtésszerelés', title:'Radiátor felszerelés és bekötés', img:RP+'Radiator-felszereles-es-bekotes.jpeg', desc:'Új radiátor felszerelése és szakszerű bekötése.'},
  {cat:'Fűtésszerelés', title:'Radiátorszelep csere', img:RP+'Radiatorszelep-csere-es-beszabalyozas.jpeg', desc:'Radiátorszelep cseréje és beszabályozása.'},
  {cat:'Fűtésszerelés', title:'Viessmann gázkazán kazánháza', img:RP+'Zt-epuletgepeszet-referencia-2.jpeg', desc:'Komplett kazánház Viessmann fali kondenzációs kazánnal, puffer tartállyal és Grundfos keringtetővel.'},
  {cat:'Fűtésszerelés', title:'Kazánház padlófűtés osztóval', img:RP+'Zt-epuletgepeszet-referencia-3.jpeg', desc:'Kis kazánház padlófűtés osztó-gyűjtővel, tágulási tartállyal és TF1 mágneses szűrővel.'},
  {cat:'Fűtésszerelés', title:'Hőszivattyú szigetelt csövekkel', img:RP+'Zt-epuletgepeszet-referencia-4.jpeg', desc:'Levegő-víz hőszivattyú kültéri egység hőszigetelt csővezetékkel a homlokzat mentén.'},
  {cat:'Fűtésszerelés', title:'Hőszivattyú állványon telepítve', img:RP+'Zt-epuletgepeszet-referencia-5.jpeg', desc:'Hőszivattyú kültéri egység rezgéscsillapított állványra szerelve.'},
  {cat:'Fűtésszerelés', title:'Kazánház teljes csőhálózattal', img:RP+'Zt-epuletgepeszet-referencia-8.jpeg', desc:'Komplett kazánházi csőrendszer mágneses iszapleválasztóval és padlófűtés osztó-gyűjtőkkel.'},
  {cat:'Fűtésszerelés', title:'Bojler és keringtető szivattyúk', img:RP+'Zt-epuletgepeszet-referencia-9.jpeg', desc:'Elektromos bojler bekötése Grundfos keringtető szivattyúkkal és osztó-gyűjtővel.'},
  {cat:'Fűtésszerelés', title:'Padlófűtés osztó bekötése', img:RP+'Zt-epuletgepeszet-referencia-10.jpeg', desc:'Padlófűtés osztó-gyűjtő bekötése a körök piros csöveinek lefektetésével.'},

  // Gázszerelés
  {cat:'Gázszerelés', title:'Gázkazán beüzemelése', img:RP+'Gazkazan-beuzemelese-es-nyomasproba.jpeg', desc:'Gázkazán beüzemelése és nyomáspróba elvégzése.'},
  {cat:'Gázszerelés', title:'Gázvezeték kiépítés', img:RP+'Gazvezetek-kiepites-es-nyomasproba.jpeg', desc:'Új gázvezeték kiépítése és nyomáspróba.'},

  // Vízszerelés
  {cat:'Vízszerelés', title:'Csatornarendszer kiépítése', img:RP+'Csatornarendszer-kiepitese-csaladi-hazhoz.jpeg', desc:'Komplett csatornarendszer kiépítése családi házhoz.'},
  {cat:'Vízszerelés', title:'Kerti vízkiállás szerelése', img:RP+'Kerti-vizkiallas-szerelese.jpeg', desc:'Kerti vízkiállás szakszerű szerelése.'},
  {cat:'Vízszerelés', title:'Rézcsöves vízvezeték', img:RP+'Rezcsoves-vizvezetek-rendszer-epitese.jpeg', desc:'Rézcsöves vízvezeték rendszer kiépítése.'},
  {cat:'Vízszerelés', title:'Szaniter bekötés', img:RP+'Szaniter-bekotes-es-beuzemeles.jpeg', desc:'Szaniterek bekötése és beüzemelése.'},
  {cat:'Vízszerelés', title:'Vízhálózat új építésnél', img:RP+'Vizhalozat-szerelese-uj-epitesu-hazban.jpeg', desc:'Komplett vízhálózat szerelése új építésű házban.'},
];

let currentFilter = 'mind';
let lbFiltered = [];
let lbIdx = 0;

function renderRefs(){
  const grid = document.getElementById('ref-grid');
  const list = currentFilter === 'mind' ? REFS : REFS.filter(r => r.cat === currentFilter);
  lbFiltered = list;
  grid.innerHTML = list.map((r, i) => `
    <div onclick="openLightbox(${i})" style="cursor:pointer;border-radius:8px;overflow:hidden;position:relative;aspect-ratio:4/3;" class="ref-item">
      <img src="${r.img}" alt="${r.title}">
      <div class="ref-overlay">
        <div class="ref-cat">${r.cat}</div>
        <div class="ref-title">${r.title}</div>
      </div>
    </div>
  `).join('');
}

function filterRef(cat){
  currentFilter = cat;
  document.querySelectorAll('#ref-filter-bar .filter-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  renderRefs();
}

function openLightbox(i){
  lbIdx = i;
  updateLightbox();
  document.getElementById('ref-lightbox').style.display = 'flex';
}
function closeLightbox(){
  document.getElementById('ref-lightbox').style.display = 'none';
}
function lbNext(){ lbIdx = (lbIdx+1) % lbFiltered.length; updateLightbox(); }
function lbPrev(){ lbIdx = (lbIdx-1+lbFiltered.length) % lbFiltered.length; updateLightbox(); }
function updateLightbox(){
  const r = lbFiltered[lbIdx];
  document.getElementById('lb-img').src = r.img;
  document.getElementById('lb-img').alt = r.title;
  document.getElementById('lb-cat').textContent = r.cat;
  document.getElementById('lb-title').textContent = r.title;
  document.getElementById('lb-desc').textContent = r.desc || '';
  document.getElementById('lb-counter').textContent = `${lbIdx+1} / ${lbFiltered.length}`;
}

document.addEventListener('keydown', (e) => {
  if (document.getElementById('ref-lightbox').style.display === 'flex'){
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') lbNext();
    if (e.key === 'ArrowLeft') lbPrev();
  }
});

renderRefs();

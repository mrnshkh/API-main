import{H as v,F as m}from"./footer-BoHAyPPh.js";import{r as s,m as u,c,a as p,d as y,n as g,h}from"./card-CxY2UlxO.js";function C(t){const e=document.createElement("div");return e.className="maincard",e.innerHTML=`
    <img src="${t.img}" alt="">
    <h3>${t.title}</h3>
    <p>${t.text}</p>
  `,e}function f(){const t=document.createElement("div");t.innerHTML=`
    <div id="contactModal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h2>Связаться с нами</h2>
          <span class="close">&times;</span>
        </div>
        <form id="contactForm" class="contact-form">
          <div class="form-row">
            <div class="form-group">
              <input type="text" id="name" name="name" placeholder="Ваше имя*">
            </div>
            <div class="form-group">
              <input type="tel" id="phone" name="phone" placeholder="Ваш телефон*">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <input type="email" id="email" name="email" placeholder="Ваш e-mail*">
            </div>
            <div class="form-group">
              <input type="text" id="city" name="city" placeholder="Ваш город">
            </div>
          </div>
          <div class="form-group full-width">
            <textarea id="comment" name="comment" placeholder="Комментарий" rows="4"></textarea>
          </div>
          <button type="submit" class="submit-btn">Отправить</button>
        </form>
      </div>
    </div>

    <div id="successNotification" class="notification"></div>
  `,document.body.appendChild(t)}class b{constructor(){this.modal=document.getElementById("contactModal"),this.contactBtn=document.getElementById("contactBtn"),this.closeBtn=document.querySelector(".close"),this.init()}init(){this.contactBtn?.addEventListener("click",()=>this.openModal()),this.closeBtn?.addEventListener("click",()=>this.closeModal()),this.modal?.addEventListener("click",e=>{e.target===this.modal&&this.closeModal()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&this.modal?.classList.contains("show")&&this.closeModal()})}openModal(){this.modal.style.display="flex",setTimeout(()=>this.modal.classList.add("show"),10),document.body.style.overflow="hidden"}closeModal(){this.modal.classList.remove("show"),setTimeout(()=>{this.modal.style.display="none",document.body.style.overflow=""},300)}}function L(t="Каталог"){const e=document.createElement("div");return e.classList.add("catalog-modal-wrapper"),e.innerHTML=`
    <div class="catalog-modal">
      <button class="catalog-close">×</button>
      <section class="catalog-section">
        <h2 class="catalog-title">${t}</h2>
        <div class="catalog-grid">
          <div class="category-block">
            <div class="category-header">
              <img src="public/123.png" class="category-icon" alt="Тракторы">
              <h3 class="trak"><a href="/CLAAS">Тракторы</a></h3>
            </div>
            <div class="product-list">
              <div class="product-item">Claas XERION</div>
              <div class="product-item">Claas AXION</div>
              <div class="product-item">Claas ARION</div>
              <div class="product-item">Claas AXOS</div>
              <div class="product-item">Claas ATOS</div>
              <div class="product-item">Claas ELIOS</div>
            </div>
          </div>
          <div class="category-block">
            <div class="category-header">
              <img src="public/123.png" class="category-icon" alt="Комбайны">
              <h3>Комбайны</h3>
            </div>
            <div class="product-list">
              <div class="product-item">Claas Dominator</div>
              <div class="product-item">Claas Mega</div>
              <div class="product-item">Claas Lexion</div>
              <div class="product-item">Claas Medion</div>
              <div class="product-item">Claas Tucano</div>
              <div class="product-item">Claas Jaguar</div>
              <div class="product-item">Claas Avero</div>
            </div>
          </div>
          <div class="category-block">
            <div class="category-header">
              <img src="public/123.png" class="category-icon" alt="Погрузчики">
              <h3>Погрузчики</h3>
            </div>
            <div class="product-list">
              <div class="product-item">Claas SCORPION</div>
              <div class="product-item">Claas TARGO</div>
              <div class="product-item">Claas RANGER</div>
            </div>
          </div>
          <div class="category-block">
            <div class="category-header">
              <img src="public/123.png" class="category-icon" alt="Пресс-подборщики">
              <h3>Пресс-подборщики</h3>
            </div>
            <div class="product-list">
              <div class="product-item">Claas Markant</div>
              <div class="product-item">Claas QUADRANT</div>
              <div class="product-item">Claas ROLLANT</div>
              <div class="product-item">Claas VARIANT</div>
            </div>
          </div>
          <div class="category-block">
            <div class="category-header">
              <img src="public/123.png" class="category-icon" alt="Косилки">
              <h3>Косилки</h3>
            </div>
            <div class="product-list">
              <div class="product-item">Claas COUGAR</div>
              <div class="product-item">Claas CORTO</div>
              <div class="product-item">Claas DISCO</div>
              <div class="product-item">Claas UNIFARM</div>
              <div class="product-item">Claas WM</div>
            </div>
          </div>
          <div class="category-block">
            <div class="category-header">
              <img src="public/123.png" class="category-icon" alt="Ворошилки">
              <h3>Ворошилки</h3>
            </div>
            <div class="product-list">
              <div class="product-item">Claas VOLTO</div>
              <div class="product-item">Claas UNIFARM</div>
              <div class="product-item">Claas W</div>
            </div>
          </div>
          <div class="category-block">
            <div class="category-header">
              <img src="public/123.png" class="category-icon" alt="Волкователи">
              <h3>Волкователи</h3>
            </div>
            <div class="product-list">
              <div class="product-item">Claas LINER</div>
              <div class="product-item">Claas UNIFARM</div>
            </div>
          </div>
          <div class="category-block">
            <div class="category-header">
              <img src=" /123.png" class="category-icon" alt="Прицеп-самопогрузчики">
              <h3>Прицеп-самопогрузчики</h3>
            </div>
            <div class="product-list">
              <div class="product-item">CLAAS CARGOS</div>
              <div class="product-item">CLAAS QUANTUM</div>
              <div class="product-item">CLAAS SPRINT</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,e}const r=()=>window.innerWidth<768;document.querySelectorAll(".category .item").forEach(t=>{t.addEventListener("click",()=>{if(r())return;const e=t.querySelector(".item-text")?.textContent||"Каталог";let a=document.querySelector(".catalog-modal-wrapper");if(a){const i=a.querySelector(".catalog-title");i.textContent=e;return}a=L(e),document.body.appendChild(a),a.querySelector(".catalog-modal").style.width="900px",a.querySelector(".catalog-modal").style.height="750px",a.querySelector(".catalog-close").addEventListener("click",()=>{a.remove(),document.body.style.overflow=""}),a.addEventListener("click",i=>{i.target===a&&(a.remove(),document.body.style.overflow="")}),document.body.style.overflow="hidden"})});if(r()){const t=document.querySelector(".category-head");t&&(t.style.pointerEvents="none",t.style.opacity="0.7",t.style.cursor="default")}document.addEventListener("click",t=>{t.target.classList.contains("close-catalog")&&(document.getElementById("catalog-container").style.display="none",document.body.classList.remove("catalog-open"))});const o=document.querySelector("header");o&&o.replaceWith(v());const l=document.querySelector("footer");l&&l.replaceWith(m());s(u,".maincards",C);s(p,".recommended-cards",c);s(y,".discount-cards",c);s(g,".new-cards",c);s(h,".hit-cards",c);f();new b;const n=document.querySelector("#contactModal"),d=document.querySelector(".category"),A=new MutationObserver(()=>{n.classList.contains("show")?d.style.zIndex="0":d.style.zIndex="1200"});A.observe(n,{attributes:!0,attributeFilter:["class"]});document.querySelectorAll(".item").forEach(t=>{t.addEventListener("click",()=>{d.style.backgroundColor="#F4F4F4"})});document.addEventListener("keydown",function(t){if(t.key==="Escape"){const e=document.querySelector(".catalog-modal-wrapper");e&&(e.remove(),document.body.style.overflow="")}});

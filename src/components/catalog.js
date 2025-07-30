export function renderCatalog(brandName = "Каталог") {
  const wrapper = document.createElement("div");
  wrapper.classList.add("catalog-modal-wrapper");

  wrapper.innerHTML = `
    <div class="catalog-modal">
      <button class="catalog-close">×</button>
      <section class="catalog-section">
        <h2 class="catalog-title">${brandName}</h2>
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
              <img src="/public/123.png" class="category-icon" alt="Прицеп-самопогрузчики">
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
  `;

  return wrapper;
}
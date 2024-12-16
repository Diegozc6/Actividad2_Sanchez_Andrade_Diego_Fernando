class Gallery extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: 'open' });

    // Contenedor principal de la galería
    this.galleryContainer = document.createElement("div");
    this.galleryContainer.classList.add('gallery');

    // Estilos encapsulados
    this.styleContainer = document.createElement("style");
    this.styleContainer.textContent = `
      .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 10px;
        padding: 1rem;
      }
      .gallery img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s ease;
      }
      .gallery img:hover {
        transform: scale(1.1);
      }
      .error-message {
        color: red;
        text-align: center;
        font-size: 1.2rem;
      }
    `;

    // Plantilla para las tarjetas de imágenes
    this.template = document.createElement('template');
    this.template.innerHTML = `
      <div>
        <img src="" alt="">
      </div>
    `;

    this.shadow.appendChild(this.styleContainer);
    this.shadow.appendChild(this.galleryContainer);
  }

  connectedCallback() {
    const endpoint = this.getAttribute('endpoint');
    if (endpoint) {
      this.fetchData(endpoint);
    } else {
      console.error('No se proporcionó un endpoint para la galería.');
    }
  }

  fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const items = data.results || []; // Cambia según la estructura del API
      this.render(items);
    } catch (error) {
      console.error('Error al cargar la galería:', error);
      this.galleryContainer.innerHTML = `
        <p class="error-message">Error al cargar la galería.</p>
      `;
    }
  };

  render = (items) => {
    this.galleryContainer.innerHTML = ""; // Limpia el contenedor antes de renderizar

    items.forEach((item, index) => {
      const card = this.template.content.cloneNode(true);
      const image = card.querySelector('img');

      // Configura las propiedades de la imagen
      image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`;
      image.alt = item.name;

      this.galleryContainer.appendChild(card);
    });
  };
}

customElements.define('app-gallery', Gallery);

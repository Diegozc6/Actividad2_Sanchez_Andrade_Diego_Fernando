class Header extends HTMLElement {
  constructor() {
    super();
    // Inicia el Shadow DOM
    this.attachShadow({ mode: 'open' });

    // Obtiene atributos para personalización
    const title = this.getAttribute('title') || 'Creación de Componentes Web Personalizados';
    const bgColor = this.getAttribute('bg-color') || '#4CAF50';
    const textColor = this.getAttribute('text-color') || 'white';

    // Crea la plantilla del componente
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        header {
          background: ${bgColor};
          color: ${textColor};
          padding: 1rem;
          text-align: center;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .title {
          margin: 0;
        }
        nav {
          display: flex;
          gap: 1rem;
        }
        nav a {
          color: ${textColor};
          text-decoration: none;
          font-size: 1rem;
        }
        nav a:hover {
          text-decoration: underline;
        }
      </style>
      <header>
        <h1 class="title">${title}</h1>
        <nav>
          <slot name="nav-links"></slot>
        </nav>
      </header>
    `;

    // Adjunta el contenido al Shadow DOM
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('app-header', Header);

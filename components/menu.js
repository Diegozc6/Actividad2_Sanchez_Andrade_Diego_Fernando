class Menu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Obtención de atributos para personalización
    const bgColor = this.getAttribute('bg-color') || '#f4f4f4';
    const linkColor = this.getAttribute('link-color') || '#007bff';
    const hoverColor = this.getAttribute('hover-color') || '#0056b3';
    const activeColor = this.getAttribute('active-color') || '#003580';

    // Plantilla del componente
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        nav {
          background-color: ${bgColor};
          padding: 1em;
          display: flex;
          gap: 1em;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        a {
          text-decoration: none;
          color: ${linkColor};
          font-weight: bold;
          transition: color 0.3s ease;
          padding: 0.5em 1em;
          border-radius: 5px;
        }
        a:hover {
          color: ${hoverColor};
          background-color: rgba(0, 0, 0, 0.05);
        }
        a.active {
          color: ${activeColor};
          border-bottom: 2px solid ${activeColor};
        }

        @media (max-width: 768px) {
          nav {
            flex-direction: column;
          }
          a {
            width: 100%;
            text-align: center;
          }
        }
      </style>
      <nav>
        <slot></slot>
      </nav>
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const links = this.shadowRoot.querySelectorAll('a');

    // Escuchar clics para manejar la clase activa
    links.forEach(link => {
      link.addEventListener('click', () => {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      });
    });
  }
}

customElements.define('app-menu', Menu);

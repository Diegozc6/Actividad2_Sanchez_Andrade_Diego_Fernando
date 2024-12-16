class Main extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Obtención de atributos para personalización
    const bgColor = this.getAttribute('bg-color') || '#f9f9f9';
    const textColor = this.getAttribute('text-color') || '#333';
    const padding = this.getAttribute('padding') || '2em';

    // Plantilla del componente
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        main {
          background-color: ${bgColor};
          color: ${textColor};
          padding: ${padding};
          margin: 0 auto;
          max-width: 1200px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          box-sizing: border-box;
        }

        @media (max-width: 768px) {
          main {
            padding: 1em;
          }
        }
      </style>
      <main>
        <slot></slot>
      </main>
    `;

    // Adjuntar la plantilla al Shadow DOM
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('app-main', Main);

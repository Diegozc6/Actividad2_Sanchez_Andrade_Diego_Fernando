class Footer extends HTMLElement {
  constructor() {
    super();
    // Inicia el Shadow DOM
    this.attachShadow({ mode: 'open' });

    // Plantilla para el contenido del footer
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        footer {
          background-color: #333;
          color: white;
          text-align: center;
          padding: 1.5em 1em;
          font-family: Arial, sans-serif;
          font-size: 0.9rem;
        }
        footer a {
          color: #4caf50;
          text-decoration: none;
        }
        footer a:hover {
          text-decoration: underline;
        }
        .footer-content {
          max-width: 1200px;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 0.5em;
          align-items: center;
        }
        @media (min-width: 600px) {
          .footer-content {
            flex-direction: row;
            justify-content: space-between;
          }
        }
      </style>
      <footer>
        <div class="footer-content">
          <slot name="text"><p>&copy; 2024 Mi Aplicación DS. Todos los derechos reservados.</p></slot>
          <slot name="links">
            <p>
              <a href="/privacy-policy">Política de Privacidad</a> | 
              <a href="/terms">Términos y Condiciones</a>
            </p>
          </slot>
        </div>
      </footer>
    `;

    // Adjuntar el contenido al Shadow DOM
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('app-footer', Footer);

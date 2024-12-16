class SocialProfile extends HTMLElement {
  constructor() {
    super();

    // Inicializa el Shadow DOM
    this.shadow = this.attachShadow({ mode: 'open' });

    // Contenedor principal del perfil
    this.profileContainer = document.createElement("div");
    this.profileContainer.classList.add('profile-container');

    // Estilos encapsulados
    this.styleContainer = document.createElement("style");
    this.styleContainer.textContent = `
      .profile-container {
        text-align: center;
        padding: 1.5rem;
        font-family: Arial, sans-serif;
        background-color: #f9f9f9;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        max-width: 300px;
        margin: auto;
      }
      .profile-container img {
        border-radius: 50%;
        width: 120px;
        height: 120px;
        margin-bottom: 1rem;
        object-fit: cover;
      }
      .profile-container h2 {
        font-size: 1.5rem;
        margin: 0.5rem 0;
      }
      .profile-container p {
        margin: 0.5rem 0;
        font-size: 0.9rem;
        color: #555;
      }
    `;

    // Plantilla para el contenido del perfil
    this.template = document.createElement("template");
    this.template.innerHTML = `
      <div class="profile-container">
        <img src="" alt="">
        <h2></h2>
        <p class="bio"></p>
        <p class="birthdate"></p>
        <p class="birthplace"></p>
        <p class="residence"></p>
        <p class="contact"></p>
      </div>
    `;

    // Ensamblar el Shadow DOM
    this.shadow.appendChild(this.styleContainer);
    this.shadow.appendChild(this.template.content.cloneNode(true));
  }

  connectedCallback() {
    // Atributos predeterminados con valores por defecto
    const nombre = this.getAttribute('nombre') || 'Usuario';
    const avatar = this.getAttribute('avatar') || 'https://via.placeholder.com/120';
    const bio = this.getAttribute('bio') || 'Sin descripción';
    const fechaNacimiento = this.getAttribute('fechaNacimiento') || 'Fecha no especificada';
    const lugarNacimiento = this.getAttribute('lugarNacimiento') || 'Lugar no especificado';
    const lugarResidencia = this.getAttribute('lugarResidencia') || 'Residencia no especificada';
    const telefonoContacto = this.getAttribute('telefonoContacto') || 'Teléfono no especificado';

    // Selecciona elementos del DOM
    const img = this.shadow.querySelector('img');
    const h2 = this.shadow.querySelector('h2');
    const bioElement = this.shadow.querySelector('.bio');
    const birthdateElement = this.shadow.querySelector('.birthdate');
    const birthplaceElement = this.shadow.querySelector('.birthplace');
    const residenceElement = this.shadow.querySelector('.residence');
    const contactElement = this.shadow.querySelector('.contact');

    // Asigna valores a los elementos
    img.src = avatar;
    img.alt = `Avatar de ${nombre}`;
    h2.textContent = nombre;
    bioElement.textContent = `Bio: ${bio}`;
    birthdateElement.textContent = `Fecha de Nacimiento: ${fechaNacimiento}`;
    birthplaceElement.textContent = `Lugar de Nacimiento: ${lugarNacimiento}`;
    residenceElement.textContent = `Lugar de Residencia: ${lugarResidencia}`;
    contactElement.textContent = `Teléfono de Contacto: ${telefonoContacto}`;
  }
}

// Define el custom element
customElements.define('social-profile', SocialProfile);





  
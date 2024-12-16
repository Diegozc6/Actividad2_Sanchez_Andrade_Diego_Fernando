Documentación de los Componentes Web

Este proyecto implementa una serie de Custom Elements utilizando el Shadow DOM, Templates y Slots para encapsular estilos y lógica. A continuación, se describe el funcionamiento de cada componente.

1. Componente app-header

Descripción:

Este componente crea un encabezado personalizable.

Atributos:

title: Texto que se muestra como el título del encabezado.

Ejemplo de uso:

<app-header title="Bienvenido a Mi Aplicación"></app-header>

Características:

Estilo encapsulado.

Fondo verde (éxito) y texto blanco.

2. Componente app-main

Descripción:

Este componente sirve como contenedor principal para el contenido.

Uso:

Incluye contenido a través de un slot genérico.

Ejemplo de uso:

<app-main>
  <p>Contenido principal de la aplicación.</p>
</app-main>

Características:

Padding predeterminado para mejor organización del contenido.

3. Componente app-footer

Descripción:

Crea un pie de página para la aplicación con un mensaje predeterminado.

Atributos y Slots:

Utiliza un slot nombrado para reemplazar el texto predeterminado.

Ejemplo de uso:

<app-footer>
  <span slot="text">&copy; 2024 Mi Empresa. Todos los derechos reservados.</span>
</app-footer>

Características:

Estilo oscuro con texto blanco.

4. Componente social-profile

Descripción:

Muestra un perfil social con avatar, nombre y datos personales.

Atributos:

nombre: Nombre del usuario.

avatar: URL de la imagen del avatar.

bio: Biografía del usuario.

fechaNacimiento, lugarNacimiento, lugarResidencia, telefonoContacto: Detalles adicionales del usuario.

Ejemplo de uso:

<social-profile
   nombre="Diego F. Sanchez Andrade"
    avatar="IMG_20240719_144419_727.jpg"
    bio="Estudiante de la carrera de Tecnologias de la informacion. ESPE"
    fechaNacimiento="01 de Marza de 1996"
    lugarNacimiento="Ciudad de Zaruma, el Oro, Ecuador."
    lugarResidencia="Zaruma, El Oro"
    telefonoContacto="0979663548">
</social-profile>

Características:

Diseño responsivo y centrado.

Imagen redonda para el avatar.

5. Componente custom-table

Descripción:

Genera una tabla dinámica que muestra datos obtenidos desde una API REST.

Funcionamiento:

Realiza una petición a la URL https://jsonplaceholder.typicode.com/users y renderiza los datos en una tabla.

Ejemplo de uso:

<custom-table></custom-table>

Características:

Encabezado fijo.

Estilos simples y responsivos.

6. Componente app-menu

Descripción:

Un menú de navegación horizontal con soporte para enlaces activos y responsividad.

Atributos:

bg-color: Color de fondo del menú.

link-color: Color del texto de los enlaces.

hover-color: Color del texto al pasar el cursor.

active-color: Color del enlace activo.

Ejemplo de uso:

 <app-menu bg-color="#fff" link-color="#333" hover-color="#555" active-color="#ff6600">
        <a href="index.html">Inicio</a>
        <a href="SocialProfile.html">Perfil</a>
        <a href="gallery.html">Galería</a>
        <a href="customTable.html">Tabla</a>
    </app-menu>

Características:

Flexibilidad para personalizar colores.

Enlaces organizados con estados activos y efectos hover.

7. Componente gallery

Descripción:

Componente opcional para mostrar una galería de imágenes o elementos.

Uso:

Añadir elementos o imágenes como hijos del componente.

Ejemplo de uso:

<gallery>
  <img src="https://via.placeholder.com/150" alt="Imagen 1">
  <img src="https://via.placeholder.com/150" alt="Imagen 2">
</gallery>

Instrucciones Generales

Instalación:

Clona el repositorio:

git clone <url-del-repositorio>

Abre el archivo index.html en tu navegador.

Requisitos:

Navegador compatible con Custom Elements y Shadow DOM (Ejemplo: Chrome, Firefox, Edge).

Notas:

Personaliza los atributos según tus necesidades.

Asegúrate de cargar los componentes en el orden correcto si usas dependencias.

© 2024, Mi Aplicación. Todos los derechos reservados.


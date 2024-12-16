// /components/custom-table.js
class CustomTable extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: 'open' });

    // Contenedor principal de la tabla
    this.tableContainer = document.createElement("div");
    this.tableContainer.classList.add('table-container');

    // Estilos encapsulados
    this.styleContainer = document.createElement("style");
    this.styleContainer.textContent = `
      .table-container {
        margin: 2em 0;
        overflow-x: auto;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        border: 1px solid #ddd;
        font-family: Arial, sans-serif;
      }
      th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
      }
      th {
        background-color: #007bff;
        color: white;
      }
      .error-message {
        color: red;
        font-size: 1.2rem;
        text-align: center;
        margin: 1em 0;
      }
    `;

    // Plantilla para filas de la tabla
    this.template = document.createElement("template");
    this.template.innerHTML = `
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    `;

    // Estructura de la tabla
    this.table = document.createElement("table");
    this.table.innerHTML = `
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody></tbody>
    `;

    // Ensamblar elementos en el Shadow DOM
    this.shadow.appendChild(this.styleContainer);
    this.shadow.appendChild(this.tableContainer);
    this.tableContainer.appendChild(this.table);
  }

  connectedCallback() {
    const endpoint = this.getAttribute('endpoint') || 'https://jsonplaceholder.typicode.com/users';
    this.fetchData(endpoint);
  }

  fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.render(data);
    } catch (error) {
      console.error("Error al cargar los datos de la tabla:", error);
      this.tableContainer.innerHTML = `<p class="error-message">Error al cargar los datos de la tabla.</p>`;
    }
  };

  render = (data) => {
    const tbody = this.table.querySelector('tbody');
    tbody.innerHTML = ""; // Limpia el contenido anterior

    data.forEach((user) => {
      const row = this.template.content.cloneNode(true);
      const cells = row.querySelectorAll('td');

      // Asigna los valores a las celdas
      cells[0].textContent = user.id;
      cells[1].textContent = user.name;
      cells[2].textContent = user.email;

      tbody.appendChild(row);
    });
  };
}

// Define el custom element
customElements.define('custom-table', CustomTable);

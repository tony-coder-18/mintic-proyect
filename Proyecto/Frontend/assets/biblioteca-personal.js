
// Funcion para obtener json de los modulos
async function getBooks(url) {
  let jsonData;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
    });

    jsonData = await response.json(); // parsea JSON response en objetos de Javascript

    return jsonData.jsonModules;

  } catch (error) {
    console.log(error);
  }
}



// Biblioteca Personal
let booksPersonal = [ 
  {
    id: "123",
    nombre: "Narraciones Extraordinarias", 
    autor:"Edgar Allan Poe",
    fecha_publicacion:"18-02-2010"
  }, 
  {
    id: "124",
    nombre: "Canción de Navidad", 
    autor:"Charles Dickens",
    fecha_publicacion:"18-02-2010"
  },
  {
    id: "125",
    nombre: "El Proceso", 
    autor:"Franz Kafka",
    fecha_publicacion:"18-02-2010"
  }
];

// Generar Cada libro de Biblioteca personal
let bookRowPersonal = document.querySelector("#booksRowPersonal");

booksPersonal.forEach((book) => {

  let bookDiv = document.createElement("div");
  bookDiv.className = "book-div card mb-4 mx-auto";
  bookDiv.innerHTML = `
                          <img src="" alt="" id="bookImage" class="card-img-top">
                          <div class="card-body">
                              <h3 class="book-title card-title">${book.nombre}</h3>
                              <p class="book-author card-text">${book.autor}</p>
                              <button id="btnLibro" data-type="btnLibro" data-libro="${book.id}">Guargar en mi biblioteca</button>
                          </div>
                                 `;
  bookRowPersonal.appendChild(bookDiv);
});

// Ubicar nombre de Usuario en el titulo de la biblioteca personal
let usuarioName = "Laura";

document.querySelector("#usuarioName").innerHTML = `Hola ${usuarioName}`;
// Funcion para obtener json de los modulos
async function getBooksBackend(url) {
    let jsonData;
  
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
        // mode: "no-cors",
      });
  
      jsonData = await response.json(); 

      return jsonData;
  
    } catch (error) {
      console.log(error);
    }
  }



// Generar Cada libro de Biblioteca General
let bookRow = document.querySelector("#booksContainer");
let modalsContainer = document.querySelector("#modalsContainer");

let books = [ 
//   {
//     id: "123",
//     nombre: "Narraciones Extraordinarias", 
//     autor:"Edgar Allan Poe",
//     img: "https://imgv2-1-f.scribdassets.com/img/word_document/403968348/original/216x287/b0085ddccc/1628996105?v=1",
//     fecha_publicacion:"18-02-2010"
//   }, 
//   {
//     id: "124",
//     nombre: "Canción de Navidad", 
//     autor:"Charles Dickens",
//     img: "https://imgv2-1-f.scribdassets.com/img/word_document/403968348/original/216x287/b0085ddccc/1628996105?v=1",
//     fecha_publicacion:"18-02-2010"
//   },
//   {
//     id: "125",
//     nombre: "El Proceso", 
//     autor:"Franz Kafka",
//     img: "https://imgv2-1-f.scribdassets.com/img/word_document/403968348/original/216x287/b0085ddccc/1628996105?v=1",
//     fecha_publicacion:"18-02-2010"
//   }
];

async function getBooks(books) {
    books.forEach((book) => {

        bookRow.innerHTML += `
                            <div class="col-xl-2 col-lg-4 col-md-6 col-12 box libro"><img src="${book.rutaImagen}" alt="book1"
                            width="170" height="250" data-toggle="modal" data-target="#myModal${book.id}"></div>
                                       `;
    
        modalsContainer.innerHTML += `
                                        <div class="modal" id="myModal${book.id}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="text-danger fa fa-times"></i></button>
                                            <h4 class="modal-title" id="myModalLabel"><i class="text-muted fa fa-shopping-cart"></i> <strong>${book.id}</strong> - ${book.nombre} </h4>
                                            </div>
                                            <div class="modal-body">
                                            
                                            <table class="pull-left col-md-8 ">
                                                <tbody>
                                                    <tr>
                                                        <td class="h6"><strong>Autor</strong></td>
                                                        <td> </td>
                                                        <td class="h5">${book.autor}</td>
                                                    </tr>
                                                    
                                                    <tr>
                                                        <td class="h6"><strong>Año de publicacion</strong></td>
                                                        <td> </td>
                                                        <td class="h5">${book.anioPublicacion}</td>
                                                    </tr>
                                                    
                                                    <tr>
                                                        <td class="h6"><strong>Editorial</strong></td>
                                                        <td> </td>
                                                        <td class="h5">Ediciones Selectas Diamante</td>
                                                    </tr>
    
                                                </tbody>
                                            </table>
                                                    
                                                
                                            <div class="col-md-4"> 
                                                <img src="${book.rutaImagen}" alt="teste" class="img-thumbnail">  
                                            </div>
                                            
                                            <div class="clearfix"></div>
                                            
                                            
                                            
                                            </div>
                                            
                                            <div class="modal-footer">       
                                                
                                            <div class="text-right pull-right col-md-3">
                                                <a href="#" class="btn btn-info pull-right" id="back-to-bootsnipp">Añadir a biblioteca</a>
                                            </div> 
                                                
                                            <div class="text-right pull-right col-md-3">
                                                <a href="#" class="btn btn-primary pull-right" id="back-to-bootsnipp">Me gusta</a>
                                            </div>
                                            
                                        </div>
                                        </div>
                                    </div>
                                    </div>
        
                                        `;
    });
};

let booksPromise = getBooksBackend("http://127.0.0.1:8080/libro");

books = await booksPromise;

await getBooks(books);

// Agregar Libro a biblioteca personal
let btnsLibros = document.querySelectorAll("[data-type='btnLibro']");

btnsLibros.forEach((btnLibro)=> {
  btnLibro.addEventListener("click", (e)=>{
    console.log(e.target);
  })
})
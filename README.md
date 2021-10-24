# Proyecto MinTic

## Instrucciones para Ejecutar Proyecto

Modificar archivo application.properties para
que concuerde con los datos de su mysql local.
Los datos por defecto son:
- Nombre de base de datos: database
- Username: root
- password: admin

Para visulizar libros haga un POST a la dirección: http://127.0.0.1:8080/libro
con los datos de un libro con el formato JSON.

Ejemplo de Libro:

{
      "nombre":"Cancion de Navidad",
      "autor":"Charles Dickens",
      "rutaImagen":"https://imgv2-1-f.scribdassets.com/img/word_document/403968348/original/216x287/b0085ddccc/1628996105?v=1",
      "anioPublicacion":"2010"
}

Tambien puede ingresar un campo llamado "descripcion" y "genero".

Ejecutar backend con comando:
mvnw.cmd spring-boot:run
en la carpeta "Backend" en la consola cmd de windows.
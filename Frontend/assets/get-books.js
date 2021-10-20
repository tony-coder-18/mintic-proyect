
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
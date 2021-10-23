src="../jquery/jquery-3.6.0.min.js"

const email = document.getElementById("email")
const password = document.getElementById("password")
const nombreUsuario = document.getElementById("nombreUsuario")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let id = null
    parrafo.innerHTML = ""

    $.get("http://127.0.0.1:8080/usuario",function(data){

        for (let i=0; i<data.length; i++){
            let tr = `<tr>
                <td>`+data[i].id+`<td>
                <td>`+data[i].email+`</td>
                <td>`+data[i].nombreUsuario+`</td>
                <td>`+data[i].password+`</td>
                </tr>`

                if (data[i].email != email.value){
                    warnings += `El correo no es valido <br>`
                    entrar = true
                    break
                }else{
                    if(data[i].nombreUsuario != nombreUsuario.value){
                        warnings += `El nombre de usuario no es valido <br>`
                        entrar = true
                        break
                    }else{
                        if(data[i].password != password.value){
                            warnings += `La contraseña no es valida <br>`
                            entrar = true
                            break
                        }
                    }
                }
        }
        if (entrar){
            parrafo.innerHTML = warnings
        }else{
            alert ("Bienvenido a esta pagina web")
            location.href = "../HTML/biblioteca-general.html"
        }
    })
})
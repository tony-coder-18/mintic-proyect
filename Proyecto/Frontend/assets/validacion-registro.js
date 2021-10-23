src="../jquery/jquery-3.6.0.min.js"

const email = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")
const nombreUsuario = document.getElementById("nombreUsuario")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""

    if (password.value.length < 4){
        warnings += `La contraseña es muy corta <br>`
        entrar = true
    }else if(password.value.length > 8){
        warnings += `La contraseña es muy larga <br>`
        entrar = true
    }else{
        if(password.value != password2.value){
            warnings += `Las contraseñas no coinciden <br>`
            entrar = true
        }
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }

    $.get("http://127.0.0.1:8080/usuario",function(data){
        for (let i=0; i<data.length; i++){
            let tr = `<tr>
                <td>`+data[i].email+`</td>
                <td>`+data[i].nombreUsuario+`</td>
                </tr>`
                if (data[i].email == email.value){
                    warnings += `Ya hay un usuario con este correo electronico <br>`
                    entrar = true
                    break
                }else{
                    if(data[i].nombreUsuario == nombreUsuario.value){
                        warnings += `Ya hay un usuario con este nombre <br>`
                        entrar = true
                        break
                    }
                }
        }

        if (entrar){
            parrafo.innerHTML = warnings
        }else{
            let nombreUsuario = $("#nombreUsuario").val();
            let email = $("#email").val();
            let password = $("#password").val();
            let nombres = $("#nombre").val();
            let apellidos = $("#apellido").val();
            let genero = $("#genero").val();

            fetch("http://127.0.0.1:8080/usuario" ,{
                method:"POST",
                mode:"cors",
                cache:"no-cache",
                headers:{"Content-type":"application/json"},
                body:JSON.stringify({nombreUsuario,email,password,nombres,apellidos,genero})
            }).then(alert ("Su registro ha sido exitoso")).then(location.href = "../HTML/login.html")
        }
    })
})
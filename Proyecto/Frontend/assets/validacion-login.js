const email = document.getElementById("email")
const password = document.getElementById("password")
const nombreUsuario = document.getElementById("nombreUsuario")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""

    if(nombreUsuario.value == ""){
        warnings += `El nombre de usuario no es valido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if ((password.value.length < 4)||(password.value.length > 8)){
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }

    if (entrar){
        parrafo.innerHTML = warnings
    }else{
        location.href="../HTML/biblioteca-general.html"
    }
})
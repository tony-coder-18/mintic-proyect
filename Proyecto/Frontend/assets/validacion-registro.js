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

    if (entrar){
        parrafo.innerHTML = warnings
    }else{
        location.href="../HTML/login.html"
    }
})
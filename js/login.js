var formL = document.forms.formLogin
let verSenha = document.querySelector('#verSenha')

 // Evento de clique olhinho
btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type' , 'password')
    }
})

//Evento de clique do botão confirmar
document.querySelector("#btLogin").onclick = function () {
    if (formL.email.value == "") {
        alert("Preencha o e-mail!")
    } else if (formL.senha.value == "") {
        alert("Preencha o senha!")
    } else {
        formL.submit()

        localStorage.emailUser=formL.email.value
    }
}

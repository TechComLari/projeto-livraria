var formL = document.forms.formLogin
let verSenha = document.querySelector('#verSenha')
let verConfSenha = document.querySelector('#verConfirmeSenha')

 // Evento de clique olhinho
verSenha.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type' , 'password')
    }
})

 // Evento de clique olhinho confirme senha
verConfSenha.addEventListener('click', ()=>{
    let inputConfirmeSenha = document.querySelector('#confirmeSenha')

    if(inputConfirmeSenha.getAttribute('type') == 'password'){
        inputConfirmeSenha.setAttribute('type', 'text')
    } else {
        inputConfirmeSenha.setAttribute('type' , 'password')
    }
})
//Evento de clique no botão confirmar
document.querySelector("#btCadastro").onclick=function(){

    if(formC.nome.value == ""){
        alert("Preencha o nome!")
    }else if(formC.email.value == ""){
        alert("Preencha o e-mail!")
    }else if(formC.celular.value == ""){
        alert("Preencha o telefone!")
    }else if(formC.senha.value == ""){
            alert("Preencha a senha!")
    }else if(formC.confirmeSenha.value == ""){
                alert("Confirme a senha!")
    }else if(formC.confirmeSenha.value !== formC.senha.value){
                alert("A senhas não conferem!")
    }else{
        formC.submit()

        localStorage.emailUser=formC.email.value 
        localStorage.nomeUser=formC.nome.value
        localStorage.celularUser=formC.celular.value
        localStorage.senhaUser=formC.senha.value

    }

}

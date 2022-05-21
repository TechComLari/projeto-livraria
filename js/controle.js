//atribuindo o acesso ao formContato para a variavel formC
var formC=document.forms.formContato

//Evento de clique do botão confirmar
document.querySelector("#btContato").onclick = function () {
    if(formC.nomeContato.value ==""){
        alert("Preencha o nome")
    } else if (formC.emailContato.value == ""){
        alert ("Preencha o email")
    } else if(formC.comentario.value == ""){
        alert("Não deixe em branco")
    } else {
        formC.submit();
    }
}  
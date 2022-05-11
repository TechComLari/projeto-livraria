//caso coloque a chamada dentro do <head> use o window.onload(){....seu código todo aqui}
console.log("Hello World!")
//document.querySelector("h1").innerHTML="Entre em contato"

//document (documento HTML)
//querySelector (consulta um elemento HTML)
//document.querySelector("h1").innerHTML+=" >>"

//Acesso a um elemento de formulario
console.log(document.forms.formContato)

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
    //alert(document.forms.formContato.nomeContato.value)
    //alert(document.forms.formContato.emailContato.value)
    //alert(document.forms.formContato.comentario.value)
}  
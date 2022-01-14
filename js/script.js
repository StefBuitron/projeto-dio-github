//Variaveis//
var contenedor_login_cadastro = document.querySelector(".formulario__login-cadastro");
var formulario_login = document.querySelector(".formulario__login");
var formulario_cadastro = document.querySelector(".formulario__cadastro");
var caixa_detras_login = document.querySelector(".caixa_detras-login");
var caixa_detras_cadastro = document.querySelector(".caixa_detras-login");

function cadastro(){
    formulario_cadastro.style.display = "block";
    contenedor_login_cadastro.style.left = "410px"; 
    formulario_login.style.display = "none";
    caixa_detras_cadastro.style.opacity = "0"
    caixa_detras_login.style.opacity = "1"
}

function validarFormulario(){
	var verificar=true;
	var expRegNombres =/^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ]{1,}([\s][A-Za-zÁáÉéÍíÓóÚúÜüÑñ]{1,})+$/;
	var expRegEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	var expRegTelefono=/^([0-9]\s*)*$/;	
	var formulario = document.getElementById("formulario");
	var nombres = document.getElementById("nombres");
	var email = document.getElementById("email");
	var telefono = document.getElementById("telefono");
	var comentario = document.getElementById("comentario");	
	if(!nombres.value){
	alert("Escribí tu nombre y apellido");
	nombres.focus();
	verificar=false;
	return false;
	}
	else if(nombres.value.split(" ").length < 2){
	alert("Escibí tu nombre completos por favor.");
	nombres.focus();
	verificar=false;
	return false;
	}
	else if(!expRegNombres.exec(nombres.value)){
	alert("Tu nombre puede tener letras de la a-zA-Z, ÁáÉéÍíÓóÚúÜüÑñ y no admite espacios en blanco al final.");
	nombres.focus();
	verificar=false;
	return false;
	}
	else if(!email.value){
	alert("Olvidaste poner tu email!");
	email.focus();
	verificar=false;
	return false;
	}
	else if(!expRegEmail.exec(email.value)){
	alert("Escribí un email valido por favor.");
	email.focus();
	verificar=false;
	return false;
	}
	else if(!telefono.value){
	alert("Escribí un n\u00famero de tel\u00E9fono por favor.");
	telefono.focus();
	verificar=false;
	return false;
	}
	else if(!expRegTelefono.exec(telefono.value)){
	alert("el campo tel\u00E9fono admite n\u00FAmeros y espacios en blanco.");
	telefono.focus();
	verificar=false;
	return false;
	}
	
	if(verificar==true){
    alert("¡Gracias! Nos comunicaremos en breve")
	// document.formulario.submit();
	}
}
function limpiarFormulario(){
	document.getElementById("formulario").reset();
}
function calcular(){
	var contadorChar= document.getElementById("contador-char").innerHTML=1000 -document.formulario.comentario.value.length;
}
window.onload=function(){
	var botonLimpiar=document.getElementById("limpiar");
	botonLimpiar.onclick=limpiarFormulario;
	var botonEnviar=document.getElementById("enviar");
	botonEnviar.onclick=validarFormulario;
}
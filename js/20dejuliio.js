function 	Habilitar() {
	document.getElementById('boton').disabled=false;
}
function 	Deshabilitar() {
	document.getElementById('boton').disabled=true;
}

function 	verificar() {
	if (document.getElementById('check').checked==true) {
			Habilitar();
	} else {
			Deshabilitar();
	}
}
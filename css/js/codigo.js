function calcular() {
var n1 = parseFloat(document.getElementById('n1').value);
var n2 = parseFloat(document.getElementById('n2').value);

if (n1>n2) {
	alert(n1 + 'es mayor');
}else if (n1<n2) {
	alert(n2 + 'es mayor')
}

else {
	alert('Son Iguales')
}
	
}


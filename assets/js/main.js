/*secction id "play"*/

function mostrar(){
	var start = document.getElementById('jugar');
	start.addEventListener("click", function(){
		//alert("soy un alert");
		document.getElementById("visible").classList.toggle("esconder");
		document.getElementById("play").classList.toggle("fondo-agrandar");
		document.getElementById("oculto").classList.remove("esconder");

	});
}
mostrar();
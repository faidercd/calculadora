window.onload=manejarClics;

var cifra="";

function manejarClics() {
	
	var uno=document.getElementById("n1");
	uno.addEventListener("click",function() {
								clicEn("1");
								});

	var dos=document.getElementById("n2");
	dos.addEventListener("click",function() {
								clicEn("2");
								});

	var tres =document.getElementById("n3")
	tres.addEventListener("click",function(){
									clicEn("3");
	});

	var cuatro =document.getElementById("n4")
	cuatro.addEventListener("click",function(){
									clicEn("4");
	});

	var cinco =document.getElementById("n5")
	cinco.addEventListener("click",function(){
									clicEn("5");
	});

	var seis=document.getElementById("n6");
	seis.addEventListener("click",function() {
								clicEn("6");
								});

	var siete=document.getElementById("n7");
	siete.addEventListener("click",function() {
								clicEn("7");
								});

	var ocho =document.getElementById("n8")
	ocho.addEventListener("click",function(){
									clicEn("8");
	});

	var nueve =document.getElementById("n9")
	nueve.addEventListener("click",function(){
									clicEn("9");
	});

	var cero =document.getElementById("n0")
	cero.addEventListener("click",function(){
									clicEn("0");
	});

	var mas =document.getElementById("mas")
	mas.addEventListener("click",function(){
									clicEn("+");
	});

	var menos =document.getElementById("menos")
	menos.addEventListener("click",function(){
									clicEn("-");
	});

	var multi =document.getElementById("por")
	multi.addEventListener("click",function(){
									clicEn("*");
	});

	var divi =document.getElementById("div")
	divi.addEventListener("click",function(){
									clicEn("/");
	});

	var resu =document.getElementById("igual")
	resu.addEventListener("click",function(){
									resul();
	});

	var quitar =document.getElementById("menos1")
	quitar.addEventListener("click",function(){
									borrardigito();
	});

	var nuevo =document.getElementById("reiniciar")
	nuevo.addEventListener("click",function(){
									nuevacuenta();
	});
}

function clicEn(num){
var pantalla=document.getElementById("pantalla");
		cifra+=num;
		pantalla.textContent=cifra;
}
function resul(){
	var pantalla=document.getElementById("pantalla");
	var resultado=eval(cifra);

	cifra=resultado;

	pantalla.textContent=cifra;

}

function nuevacuenta(){
	var pantalla=document.getElementById("pantalla");
	cifra="";

	pantalla.textContent=cifra;
}

function borrardigito(){
	var pantalla=document.getElementById("pantalla");

	var panta=cifra.slice(0,-1);

	cifra=panta;

	pantalla.textContent=cifra;
}
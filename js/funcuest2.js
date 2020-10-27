$(document).ready(function(){var ra = self.location.href; var pb = ra.lastIndexOf("/")+1; var tema = ra.substring(pb,ra.length-5);tema= tema.replace(/%20/g, " ");var x1="Fin del Memorama... \n\n CCHV";document.getElementById("h2s").innerHTML = "M E M O R A M A </br>"+tema; var element = document.getElementById("imagenes"); 
for (var i = 1; i < 21; i++) {
	var div = document.createElement('div'); 
	div.id = 'img'+i;element.appendChild(div);
	var x = document.createElement("IMG");
	if (i<10) {var w=0;} else {w=""};
	x.setAttribute("src", "imágenes/"+w+i+".jpg");
	div.appendChild(x);} 
$("img").hide();var d="";var e = ""; var l=x1; var end=0;
$("#imagenes div").click(oi);var imagenes = $("#imagenes").children();
var imagen = $("#imagenes div:first-child");var ar = new Array();
for (i=0; i<imagenes.length; i++){
	ar[i] = $("#"+imagen.attr("id")+" img").attr("src");  
	imagen = imagen.next();}
var imagen = $("#imagenes div:first-child");
for (y=0; y<imagenes.length; y++) {
	ri= Math.floor(Math.random() * ((ar.length-1)+1));
	$("#"+imagen.attr("id")+" img").attr("src", ar[ri]);
	ar.splice(ri, 1);imagen = imagen.next();}

function oi() {id = $(this).attr("id");if ($("#"+id+" img").is(":hidden")) {$("#imagenes div").unbind("click", oi);$("#"+id+" img").slideDown('fast');if (e == "") {d = id;e = $("#"+id+" img").attr("src");setTimeout(function() {$("#imagenes div").bind("click", oi)}, 300);}else {a = $("#"+id+" img").attr("src"); var g = parseInt(e.substr(9,2)); var h = parseInt(a.substr(9,2)); if (g>10) {g=g-10;}  
if (h>10) {h=h-10;} e=g; a=h; if (e != a) {setTimeout(function() {$("#"+id+" img").slideUp('fast'); $("#"+d+" img").slideUp('fast');d = "";e = "";}, 400);} else {end++;d = "";e = "";}setTimeout(function(){$("#imagenes div").bind("click", oi)}, 400);} 
if ((end == 10)&&(l=29)) alert(x1);}}});



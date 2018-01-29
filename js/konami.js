function easter_egg(){
  if ( window.addEventListener ) {
    var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
    window.addEventListener("keydown", function(e){
    kkeys.push( e.keyCode );
      if ( kkeys.toString().indexOf( konami ) >= 0 ) {
      alert("Wouhou t'as trouvé le konami code !");
      }
    }, true);}
}

//haut haut bas bas gauche droite gauche droite b a

var rep = 0;
var q1 = false;
var q2 = false;
var q3 = false;

function question1(){
	if ((document.getElementById("q1").value).toLowerCase() == "ada lovelace" && q1==false){
		rep++;
		q1=true;
		alert("Bonne réponse !");
	}if(q1==true){
		alert("Vous avez déjà répondu");
	}else{
		alert("Mauvaise réponse, essaye encore");
	}
}

function question2(){
	if ((document.getElementById("q2").value).toLowerCase()  == "code" && q2==false){
		rep++;
		q2=true;
		alert("Bonne réponse !");
	}if(q2==true){
		alert("Vous avez déjà répondu");
	}else{
		alert("Mauvaise réponse, essaye encore");
	}
}

function question3(){
	if ((document.getElementById("q3").value).toLowerCase()  == "site" && q3==false){
		rep++;
		q3=true;
		alert("Bonne réponse !");
	}if(q3==true){
		alert("Vous avez déjà répondu");
	}else{
		alert("Mauvaise réponse, essaye encore");
	}
}

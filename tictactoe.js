
var turn=false;
function play(event){
	console.log(event);
	event.target.innerHTML = turn? "0" : "X";
	turn=!turn;
}

/*
var cell0=document.getElementById("0");
cell0.addEventListener('click' , play);*/
var counter = 0;
var gameOver = false;
var pow = 0;
var ptw = 0;

function addClickVal() {
	for (var i = 0; i < 9; i++) {
		var td = document.getElementsByTagName("TD")[i];
		td.setAttribute("isClicked", false);
	}
}

console.log(addClickVal());

function game_play(event) {


	if (gameOver == false && counter < 9 && event.target.getAttribute("isClicked") == "false") {
		if (counter % 2 == 0) event.target.innerHTML = "X";
		else event.target.innerHTML = "O";
		event.target.setAttribute("isClicked", true);
		counter++;
		console.log(checkForWinner());
	}
}

function checkForWinner() {
	if ((document.getElementById("c1").innerHTML == "X" && document.getElementById("c4").innerHTML == "X" && document.getElementById("c7").innerHTML == "X") ||
		(document.getElementById("c2").innerHTML == "X" && document.getElementById("c5").innerHTML == "X" && document.getElementById("c8").innerHTML == "X") ||
		(document.getElementById("c3").innerHTML == "X" && document.getElementById("c6").innerHTML == "X" && document.getElementById("c9").innerHTML == "X") ||
		(document.getElementById("c1").innerHTML == "X" && document.getElementById("c2").innerHTML == "X" && document.getElementById("c3").innerHTML == "X") ||
		(document.getElementById("c4").innerHTML == "X" && document.getElementById("c5").innerHTML == "X" && document.getElementById("c6").innerHTML == "X") ||
		(document.getElementById("c7").innerHTML == "X" && document.getElementById("c8").innerHTML == "X" && document.getElementById("c9").innerHTML == "X") ||
		(document.getElementById("c1").innerHTML == "X" && document.getElementById("c5").innerHTML == "X" && document.getElementById("c9").innerHTML == "X") ||
		(document.getElementById("c3").innerHTML == "X" && document.getElementById("c5").innerHTML == "X" && document.getElementById("c7").innerHTML == "X")) {
		gameOver = true;
		pow++;
		//console.log("Player One Wins!");
    document.getElementById('game_status_html').innerHTML = "Player 1 Win";
	}
	else if ((document.getElementById("c1").innerHTML == "O" && document.getElementById("c4").innerHTML == "O" && document.getElementById("c7").innerHTML == "O") ||
		(document.getElementById("c2").innerHTML == "O" && document.getElementById("c5").innerHTML == "O" && document.getElementById("c8").innerHTML == "O") ||
		(document.getElementById("c3").innerHTML == "O" && document.getElementById("c6").innerHTML == "O" && document.getElementById("c9").innerHTML == "O") ||
		(document.getElementById("c1").innerHTML == "O" && document.getElementById("c2").innerHTML == "O" && document.getElementById("c3").innerHTML == "O") ||
		(document.getElementById("c4").innerHTML == "O" && document.getElementById("c5").innerHTML == "O" && document.getElementById("c6").innerHTML == "O") ||
		(document.getElementById("c7").innerHTML == "O" && document.getElementById("c8").innerHTML == "O" && document.getElementById("c9").innerHTML == "O") ||
		(document.getElementById("c1").innerHTML == "O" && document.getElementById("c5").innerHTML == "O" && document.getElementById("c9").innerHTML == "O") ||
		(document.getElementById("c3").innerHTML == "O" && document.getElementById("c5").innerHTML == "O" && document.getElementById("c7").innerHTML == "O")) {
		gameOver = true;
		ptw++;
		//console.log("Player Two Wins!");
    document.getElementById('game_status_html').innerHTML = "Player 2 Win";
	}

	document.getElementsByClassName("one_times")[0].innerHTML = pow.toString();
	document.getElementsByClassName("one_times")[1].innerHTML = ptw.toString();
	document.getElementsByClassName("two_times")[0].innerHTML = ptw.toString();
	document.getElementsByClassName("two_times")[1].innerHTML = pow.toString();
}

function reset() {
	for (var i = 0; i < 9; i++) {
		document.getElementsByTagName("TD")[i].innerHTML = "";
		console.log(addClickVal());
		counter = 0;
		gameOver = false;
	}
}



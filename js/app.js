/*-----Global variables----*/
	
	var count = 0;
	var computerChoice = 0;
	var won = false;

	function newGame() {
	computerChoice = Math.floor((Math.random() * 100) + 1);
    console.log(computerChoice);
    $('#userGuess').val("");
    count = 0;
    $('#count').text(count);
    $("#guessList").empty(); 
    won = false;
    $("#feedback").text("Make your Guesses");
}


	function guessCompare (guess){
		var diff = Math.abs(computerChoice -guess);
		console.log (diff);
		if(diff === 0){
			$("#feedback").text("Congrats! You Won.");
			won = true;
		}
		else if (diff <= 10){
			$("#feedback").text("Very Hot");
		}
		else if (diff <= 20){
			$("#feedback").text("Hot");
		}
		else if (diff <= 30){
			$("#feedback").text("Warm");
		}
		else if (diff <= 50){
			$("#feedback").text("Cold");
		}
		else if (diff <= 100){
			$("#feedback").text("Artic Cold");
		}

	}




$(document).ready(function(){
	newGame();

	/* ---Starting a new game --*/
	// $('document').on("click", ".new",function(){
	// 	history.go(0);
	// });

	$('.new').click(function () {
      newGame();
    });


	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	})



 //  ----Log and count user Guesses-------
 	$('#guessButton').click(function (e) {
 		e.preventDefault();
 		if (won) {
 			alert("Please start new game");
 			return;
 		}

 		var guess = parseInt($('#userGuess').val());  /* MAKE THIS GLOBAL ???*/
	  		count += 1;
 		if(guess <= 100 && guess >0) {
	  		$('#guessList').append('<li>' + guess + '</li>');
	  		$('#userGuess').val("");  /* question about this?????????*/
	  		$('#count').text(count);
	  		guessCompare(guess);
	  	} 

	  	else {
	  		alert("Please enter a number between 0 and 100")
	  	}

  	})


  	


});















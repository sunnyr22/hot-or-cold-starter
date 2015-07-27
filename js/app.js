/*-----Global variables----*/
	
	var count = 0;

$(document).ready(function(){


	/* ---Starting a new game --*/
	// $('document').on("click", ".new",function(){
	// 	history.go(0);
	// });

	$('.new').click(function () {
      history.go(0);
    });


	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	})

// --- Computer generated number-------
  	var computerChoice = Math.floor((Math.random() * 100) + 1);
    console.log(computerChoice);
 


 //  ----Log and count user Guesses-------
 	$('#guessButton').click(function (e) {
 		e.preventDefault();
 		var guess = parseInt($('#userGuess').val());  /* MAKE THIS GLOBAL ???*/
 		// var count = 0;  *******ASK THIS *******
	  		count += 1;
 		if(guess <= 100 && guess >0) {
	  		$('#guessList').append('<li>' + guess + '</li>');
	  		$('#userGuess').val();  /* question about this?????????*/
	  		$('#count').text(count);
	  	}
	  	else if(isNaN(guess) || guess >=100){
	  		alert("Please enter a number between 0 and 100")
	  	}
	  	document.getElementById('userGuess').value='';
  	})


  	// ------ User Hot- Cold Guidance----//
  	// var diff = Math.abs(computerChoice -guess);
  	// console.log (diff);



});



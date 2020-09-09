$(document).ready(function(){
  $('#tweet-text').on('keyup', function () {
    // Traverse the DOM up and down to form to find the closest element with .counter class set
    let counter = $(this).closest("form").find(".counter");
    // Set Maximum Length of the tweet
    let maxlen = 140;
    // Available Character Count variable for the user to input
    let charsLeft = maxlen - $(this).val().length;
    //  Display the remaining characters
    counter.text(charsLeft);
    // If Available Character Count variable for the user exceeds 140, change the color to red
    if(charsLeft < 0){
      counter.addClass("fontRed");
    }else{
      counter.removeClass("fontRed");
    }
  });
});



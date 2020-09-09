/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from initial-tweets.json
// const tweetData =[
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": "https://i.imgur.com/73hZDYK.png"
//       ,
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": "https://i.imgur.com/nlhLi3I.png",
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   }
// ]

//The function takes in a tweet object and is responsible for returning a tweet <article> element containing the entire HTML structure of the tweet
const createTweetElement = function(tweetData) {

  //clear the container to read the recent tweet
  $("#tweets-container").empty();
  let $tweet =`<article>
  <header class = "tweet-header">
    <img class="logo" src=${tweetData.user.avatars} />
    <h2 class="name">${tweetData.user.name}</h2>
    <span class="style-name">${tweetData.user.handle}</span>
  </header>
  <div>${tweetData.content.text}</div>
  <hr/>
  <footer>${tweetData.created_at}
    <img class="emoticons" src="images/heart.svg"></img>
    <img class="emoticons" src="images/retweet.svg"></img>
    <img class="emoticons" src="images/flag.svg"></img>
  </footer>
</article>`;
return $tweet;
}


// The function takes in an array of tweet objects and then append each one to the #tweets-container
const renderTweets = function(tweets) {
  // loops through tweets
  for(let tweet of tweets) {
  // calls createTweetElement for each tweet
    $tweet = createTweetElement(tweet);
  
  // takes return value and appends it to the tweets container
  $('#tweets-container').append($tweet)
  }
}


$(document).ready(()=> {
  //event listener
  $("#form").on("submit", function(event) {
    //prevents to change the page 
    event.preventDefault();
  //.serialize() converts data into query string
    const data = $(this).serialize();
    //ajax POST request
    $.ajax({url: "/tweets/", 
            method: "POST", data,
            success : function (data){
            console.log("ajax request successful");
            //renderTweets(data);
            loadTweets(data);
          }})
    //for clearing the entered text
    this.reset();  
 
  })
})


const loadTweets = function () {
  $.ajax({
    url : "/tweets",
    method : "GET",
    success : function(data) {
      renderTweets(data);
    }
  })
}
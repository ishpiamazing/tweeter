/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const createTweetElement = function(tweetData) {
  let tweet =`<article>
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
return tweet;
}
const $tweet = createTweetElement(tweetData);

$(document).ready(()=> {
  // Test / driver code (temporary)
  console.log($tweet);// to see what it looks like
  $('#tweets-container').append($tweet)// to add it to the page so we can make sure it's got all the right elements, classes, etc.
})

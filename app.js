window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

var ct = 0;
const count = document.querySelector(".count");
const like1 = document.getElementById("like1")

//like1.addEventListener('click', function(){
//	like();
//})

function like(){
	ct++;
	count.innerHTML = ct;
}




const feed = document.getElementsByClassName("feed");
var feed_tweets = [];

function tweet(){
	let author = duke;
	let message = document.getElementById("message").value;
	console.log(message)
	let post = new Tweet(author, message);
	feed_tweets.push(post);
	update();
}

function update(){
	document.getElementById("myList").innerHTML = "";
	var x
	for(x in feed_tweets){
		var node = document.createElement("LI"); 
		var text = feed_tweets[feed_tweets.length - x - 1].toHTML();
		node.innerHTML = text;                            // Append the text to <li>
		document.getElementById("myList").appendChild(node); 
		let form = document.getElementById("message");
		form.value = "";
	}
}

class Tweet{
	constructor(user, body){
		this.author = user;
		this.message = body;
	}

	getAuthor(){
		return this.author;
	}

	toHTML(){
		var rtn = `
			<div class="tweet">
				<div class="profilePic">
					<img src=${this.author.picture}>
				</div>
				<p>
					@${this.author.username}
				</p>
				<p class="tweetBody">
					${this.message}
				</p>
				<div class="actionBar">
					<span class="action">
						<img src="images/quote.png">			
					</span>
					<span class="action">
						<img src="images/retweet.png">
					</span>
					<span class="action">
						<img src="images/like.png" id="like1">
						<span class="count" onclick="like();">
						</span>
					</span>
				</div>
			</div>
		`
		console.log(this.author.picture)
		return rtn;
	}
}




class User{
	constructor(fn, ln, username, picture){
		this.first = fn;
		this.last = ln;
		this.username = username;
		this.picture = picture;
	}
}




duke = new User("Duke", "Schaffner", "Duke_Schaffner", "images/profilepic.jpg");
kayla = new User("Kayla", "Schaffner", "Kayla_Schaffner", "images/kayla.jpg");
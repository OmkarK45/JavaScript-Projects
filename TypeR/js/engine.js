// DOM SELECTION
let textTyped = document.querySelector('.textarea');
let word = document.querySelector('.word');
const notificationElement = document.querySelector('.notification');
const startBtn = document.querySelector('.startBtn');
const currentScoreElement  = document.querySelector('.score');
const highScoreElement = document.querySelector('.highScore');
const speedWPMElement = document.querySelector('.speed');
const replayBtn = document.querySelector('.replay');
const tweet = document.querySelector('.tweet');
const twitterButton = document.querySelector('.twitter');
const fbPost = document.querySelector('.fb-post');
const fbBtn = document.querySelector('.fb');
// WORDS COLLECTION FOR THE TEST
let nextWord = '';
var words = "greet campaign coffee care revise ridge pilot full prison wrestle account after start giant fast monarch patrol bear motif detective trouser title act speaker pursuit penny appear ballet welcome similar sensation strong fog limited implicit nursery infinite refund double ample socialist intensify visit drag retiree mislead credit oil clarify  war sow suitcase fixture worth fuss remain moment frighten spider breathe install allow deadly cabin restless service rise integrity artist short circuit listen  patience creep landscape stain citizen microphone nose bullet view category reign horizon news social reliable passion stroll adult city after two miss what new other talk place thought being answer see our water city no think into book side close give in hard hand not head";
let wordsArr = [];
wordsArr = words.split(" ");

// VARIABLES USED
let randomIndex = 0;
let score = 0;
let highScore = 0;
let timerStarted  = false;
// MAIN DRIVER FUNCTION
function myFunction(event){
    var x = event.which || event.keyCode;
    if(x==32){
        // Start the countdown and change flag to true
        if(!timerStarted){
            console.log('i will start timer');
            countdown();
            timerStarted = true;
        }
        document.body.onkeyup = function(e){
            if((e.keyCode == 32||e.keyCode==13) && !isMisspelled){
                textTyped.focus();
                randomIndex = Math.floor(Math.random()*wordsArr.length);
                nextWord = wordsArr[randomIndex];
                word.innerHTML =`${nextWord}`;
                console.log(isMisspelled);
                textTyped.value = '';
            }
        }
    }
}


// After pressing space -- form should submit 
function submitOnSpace(event){
    if(event.which === 32 || event.which === 13){
        event.target.form.dispatchEvent(new Event("submit", {cancelable: true}));
        event.preventDefault();
        // console.log('word submitted');
        scoreKeeper(word.innerHTML,textTyped.value);
    }
    
}
textTyped.addEventListener("keypress", submitOnSpace);

let isMisspelled = false;
// Function to update score : 
function scoreKeeper(string1, string2){
    console.log(string1);
    if(string1 === string2){
        score = score+1;
        console.log('words match');
        isMisspelled = false;
        currentScoreElement.textContent = `${score}`;
        notificationElement.innerHTML = '';
    }
    else{
        console.log('words do not match');
        // Show notification
        isMisspelled = true;
        notificationElement.innerHTML = `<i class="fal fa-exclamation-triangle"></i> Try again.`;
    }
    
}
    
// Reset Game board
function resetGame(){
    highScoreKeeper(score);
    score = 0;
    currentScoreElement.textContent = '';
}
// For highscore logic -- apply if else loop ! 
function highScoreKeeper(scoreValue){
    if(scoreValue>highScore){
        highScore = scoreValue;
        highScoreElement.textContent = `${highScore}`;
    }
}
// Event listener on start button 
startBtn.addEventListener('click', function(){
    resetGame();
});
// Replay Button
replayBtn.addEventListener('click',()=>{
    resetGame();
    modal.style.display = "none";
});


// Timer Functionality
function countdown() {
    var seconds = 60;
    function tick() {
        var counter = document.getElementById("counter");
        seconds--;
        counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        } else {
            let wpm=0;
            wpm = Math.floor((score/60)*100); 
            timerStarted = false;
            speedWPMElement.textContent = `${wpm}`;
            modal.style.display = "block";
            socialShare(wpm);
              
        }
    }
    tick();
}


// Modal Logic 
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
//   console.log('modal triggered')
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
  }
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
 

// Todo for the project :
/* 
1. Modal close button -- done
2. Implement Try again button in modal -- done
3. Social share API implementation -- done
4. Documentation for this project. -- pending 


*/
// Social Media API

function socialShare(s){
    console.log(s);
    // Twitter API
    twitterButton.addEventListener('click',function(){
        sharingText = {
            'score' : `${s}`,
            'text' : `I scored in TypeR test ! Check out typer and test your typing speed !`
        }
        tweet.setAttribute('href', `https://twitter.com/intent/tweet?text=Check%20out%20TypeR%20!%20My%20typing%20speed%20is%20${sharingText.score}WPM.`);
    })
    // Facebook API
    fbBtn.addEventListener('click',function(){
        fbPost.setAttribute('href', `https://www.facebook.com/sharer/sharer.php?u=&quote=Check out typer ! My typing speed is ${s} WPM`);
    })
}
socialShare();




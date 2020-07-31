let textTyped = document.querySelector('.textarea');
let word = document.querySelector('.word');
let nextWord = '';
var words = "greet campaign coffee care revise ridge pilot full prison wrestle account dictionary start giant fast monarch patrol bear motif detective trouser title act speaker pursuit penny appear ballet agreement welcome similar sensation strong fog limited implicit nursery neighborhood infinite refund double achievement ample socialist intensify nomination visit drag retiree mislead situation credit oil clarify conscience war sow suitcase fixture worth fuss remain moment frighten spider breathe install interactive allow deadly cabin restless service rise integrity artist short circuit perception listen arrangement patience creep landscape stain citizen microphone nose bullet view category reign horizon news social reliable passion stroll constitutional adult city";
let wordsArr = [];
wordsArr = words.split(" ");
console.log(wordsArr);
let randomIndex = 0;

// notification
const notificationElement = document.querySelector('.notification');


// Buttons
const startBtn = document.querySelector('.startBtn');

// Scores 
const currentScoreElement  = document.querySelector('.score');
const highScoreElement = document.querySelector('.highScore');
let score = 0;
let highScore = 0;
function myFunction(event){
    var x = event.which || event.keyCode;
    // console.log(x);
    if(x==32){
        document.body.onkeyup = function(e){
            if(e.keyCode == 32 && !isMisspelled){
                
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
    if(event.which === 32){
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
    if(string1 == string2){
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
// For highscore -- apply if else loop ! 
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





// Hmm logic ;; add event listener on space key
// for every correct word user types, increment score by one 
// after user press space key, load next key
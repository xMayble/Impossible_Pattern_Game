// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence


//Global Variables 
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var pattern = [2, 2, 4, 3, 2, 1, 2, 4, 5, 6, 3, 2, 6,];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var mistake_counter = 0;

function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
    mistake_counter = 0;
  // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions

const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 534,
  6: 600,
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
  
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain() 
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

document.querySelector('button').addEventListener('click', function() {
  context.resume().then(() => {
    console.log('Playback resumed successfully');
  });
});

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    clueHoldTime -= 8;
    delay += clueHoldTime
    delay += cluePauseTime;
    
  }
}

function loseGame(){
  stopGame();
  alert("Game Over!"); 
  clueHoldTime = 1000;
}

function winGame(){
  stopGame();
  alert("Congratulations! You won!");
  clueHoldTime = 1000;
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  else if(pattern[guessCounter] == btn) // guess is right!
    {
      //if guess is correct, we move on!
      if(guessCounter == progress)
        {
          // if guess is correct, and
          // this is the last turn, we win!
          if(progress == pattern.length - 1){
            winGame();
          }
        
          // Since it is not the last turn,
          // we increment progress, and 
          // play clue sequence!
        else {
          progress++
          playClueSequence();
          
        }} else {
          // Since turn not over, we increment
          // the guess counter!
          guessCounter++;
        }
    }
  else
    // Guess was not correct, so game over!
    {
      mistake_counter++;
      if(mistake_counter == 1)
        {
          alert("You have 1 saves left!")
        }
      else if(mistake_counter == 2)
        {
          alert("You have 0 saves left!")
        }
      else if(mistake_counter == 3)
        {
          loseGame();
        }
    }
    
  
  
    
    
      
        
        
        
    

  
  }


/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()/workspace/KeeganCantrelle0406.github.io/asd-projects/walker
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects

  var walker = {
    positionX : 0,
    speedX : 0,
    positionY : 0,
    speedY : 0
  }


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);

  var KEY = {
    "LEFT": 37,
    "UP" : 38,
    "RIGHT" :39,
    "DOWN": 40,
  }

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionWalker();
    wallColision();
    redrawWalker();

  }
  
  /* 
  Called in response to events.
  */

  //Make walker move
  function handleKeyDown(event) {
    if (event.which === KEY.LEFT){
      walker.speedX = -5;
    }
    if (event.which === KEY.UP){
      walker.speedY = -5;
    }
    if (event.which === KEY.RIGHT){
      walker.speedX = 5;
    }
    if (event.which === KEY.DOWN){
      walker.speedY = 5;
    }
  }


  // Make walker stop moving when key is lifted
  function handleKeyUp(event) {
    if (event.which === KEY.LEFT){
      walker.speedX = 0;
    }
    if (event.which === KEY.UP){
      walker.speedY = 0;
    }
    if (event.which === KEY.RIGHT){
      walker.speedX = 0;
    }
    if (event.which === KEY.DOWN){
      walker.speedY = 0;
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  //move where walker is registerd
  function repositionWalker() {
    walker.positionX += walker.speedX;
    walker.positionY += walker.speedY;
    }
  // move where walker is visualy
  function redrawWalker(){
    $("#walker").css("left", walker.positionX);
    $("#walker").css("top", walker.positionY);
  }

  //make walker stop when it hits a wall
  function wallColision () {
    if (walker.positionX >= $("#board").width()-50){
       walker.positionX = ($("#board").width()-50)
    }
    if (walker.positionX <= 0){
      walker.positionX =0
    }
    if (walker.positionY <= 0){
      walker.positionY =0
    }
    if (walker.positionY >= $("#board").height()-50){
      walker.positionY = ($("#board").height()-50)
   }
  }

}

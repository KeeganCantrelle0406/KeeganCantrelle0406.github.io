// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
//applyFilter(reddify)
//applyFilterNoBackground(decreaseBlue)
applyFilterNoBackground(increaseGreenByBlue)

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////


// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter (filterFunction){
  for (i = 0; i < image.length; i++){
    for (j = 0; j < image[i].length; j++){
      var rgbString = image[i][j]
      var rgbNumbers = rgbStringToArray(rgbString)
      filterFunction(rgbNumbers)
      rgbString = rgbArrayToString(rgbNumbers)
      image[i][j] = rgbString
    }
  }
}


//made a function that wil actually apply the filter by iterating over the entire image or the entire images array
//made a second loop that iterates over the iterating initial loop and created two variables within the nested loop
//created a higher order function by calling a function within applyFilter

// TODO 7: Create the applyFilterNoBackground function

function applyFilterNoBackground(filterFunction){
  var backgroundColor = image[0][0];
  for (var i = 0; i < image.length; i++){
    for(var j = 0; j < image[i].length; j++){
      if (image[i][j] === backgroundColor){
        image[i][j] === backgroundColor;
      } else {
        var rgbString = image[i][j];
        var rgbNumbers = rgbStringToArray(rgbString);
        filterFunction(rgbNumbers);
        rgbString = rgbArrayToString(rgbNumbers);
        image[i][j] = rgbString;
      }
    }
   
  }
  }
 
//made a new function that uses applyFilter as a base, makes a new variable called backColor for the background
//compares image[i][row] to backColor to see if its equal to itself and if not then comence the rest of the code

// TODO 5: Create the keepInBounds function
function keepInBounds (value) {
  var temp = value < 0 ? 0 : value;
  return temp > 255 ? 255 : temp 
}

//created a ternerary instead of an if statement to better utilize if the number is on the rgb index

// TODO 3: Create reddify function
function reddify(colorsArr) {
  colorsArr[RED] = 200
}

//adds the red color to the actual filter, changes the value to 200

// TODO 6: Create more filter functions

//decreases the amount of blue
function decreaseBlue (Blue){
  Blue[BLUE] = keepInBounds(BLUE - 50);
 }

 //increases green and blue by the same amount
 function increaseGreenByBlue (greeny){
  greeny[GREEN] = keepInBounds(BLUE + GREEN);
 }
 

// CHALLENGE code goes below here

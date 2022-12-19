var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        // ANIMATION VARIABLES HERE:
        var rock1
        var rock2
        var rock3
        var rock4
        var rock5
        var buildings = []
       
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO: 2 - Part 2
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth, 625 ,"DarkGrey");
            background.addChild(backgroundFill);



            // TODO: 3 - Add a moon and starfield
            for (var update = 1; update <= 100; update++){
                var circle = draw.circle(3, "White", "LightGray", 2)
                circle.x = canvasWidth * Math.random()
                circle.y = groundY * Math.random()
                background.addChild(circle)
                }



            var moon = draw.bitmap ("img/moon.png")
            moon.x = 1100
            moon.y = 25
            moon.scaleX = 0.50
            moon.scaleY = 0.50
            background.addChild(moon)



            // TODO 5: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for (var i = 0; i < 8; i++){
                var buildingHeight = Math.random() * 400
                var building = draw.rect(50, buildingHeight, "darkblue", "Black", 1)
                building.x = 200 * i
                building.y = groundY - buildingHeight
                background.addChild(building)
                buildings.push(building)
            }
            
            // TODO 4: Part 1 - Add a tree
          
            rock1 = draw.bitmap("img/moon.png")
            rock1.x = 100
            rock1.y = 500
            rock1.scaleX = 0.1
            rock1.scaleY = 0.1
            background.addChild(rock1)

            rock2 = draw.bitmap("img/moon.png")
            rock2.x = 500
            rock2.y = 200
            rock2.scaleX = 0.1
            rock2.scaleY = 0.1
            background.addChild(rock2)

            rock3 = draw.bitmap("img/moon.png")
            rock3.x = 900
            rock3.y = 450
            rock3.scaleX = 0.1
            rock3.scaleY = 0.1
            background.addChild(rock3)

            rock4 = draw.bitmap("img/moon.png")
            rock4.x = 1300
            rock4.y = 300
            rock4.scaleX = 0.1
            rock4.scaleY = 0.1
            background.addChild(rock4)

            rock5 = draw.bitmap("img/moon.png")
            rock5.x = 1700
            rock5.y = 100
            rock5.scaleX = 0.1
            rock5.scaleY = 0.1
            background.addChild(rock5)
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!

            rock1.x = rock1.x - 10
            if (rock1.x < - 200){
                rock1.x = canvasWidth
            }

            rock2.x = rock2.x - 3
            if (rock2.x < - 200){
                rock2.x = canvasWidth
            }

            rock3.x = rock3.x - 15
            if (rock3.x < - 200){
                rock3.x = canvasWidth
            }
            
            rock4.x = rock4.x - 7
            if (rock4.x < - 200){
                rock4.x = canvasWidth
            }

            rock5.x = rock5.x - 5
            if (rock5.x < - 200){
                rock5.x = canvasWidth
            }
            // TODO 5: Part 2 - Parallax
            for (var i = 0; i < buildings.length; i++){
                var eachElement = buildings[i]
                eachElement.x = eachElement.x - 0.25
            }
           

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}

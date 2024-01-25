// sketch.js - purpose and description here
// Author: Your Name
// Date:

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file
const VALUE1 = 1;
const VALUE2 = 2;

// Globals
let myInstance;
let canvasContainer;
let palette = 1;

class MyClass {
    constructor(param1, param2) {
        this.property1 = param1;
        this.property2 = param2;
    }

    myMethod() {
        // code to run when method is called
    }
}
// start of code from 
let table;

function preload() {
  table = loadTable("colors.csv", "csv", "header");
}
//end of code from 

// setup() function is called once when the program starts
function setup() {
    // place our canvas, making it fit our container
    canvasContainer = $("#canvas-container");
    let canvas = createCanvas(canvasContainer.width(), canvasContainer.height());
    canvas.parent("canvas-container");
    // resize canvas is the page is resized
    $(window).resize(function() {
        console.log("Resizing...");
        resizeCanvas(canvasContainer.width(), canvasContainer.height());
    });
    // create an instance of the class
    myInstance = new MyClass(VALUE1, VALUE2);

    var centerHorz = windowWidth / 2;
    var centerVert = windowHeight / 2;
    background(220);
}

// draw() function is called repeatedly, it's the main animation loop
function draw(){
    // call a method on the instance
    myInstance.myMethod();
    // start of code from 
    let col = floor(random(5));
    let r = table.get(palette, col * 3);
    let g = table.get(palette, col * 3 + 1);
    let b = table.get(palette, col * 3 + 2);
    // end of code from 
    let positionX = random(0,canvasContainer.width());
    let positionY = random(0,canvasContainer.height());
    let sides = random(8,15);
    beginShape();
    fill(r, g, b);
    for (let i = 0; i < sides; i += 1){
        vertex(random(positionX - 30, positionX + 30), random(positionY - 30, positionY + 30));
    }
    endShape();
    // console.log(palette);
}

// mousePressed() function is called once after every time a mouse button is pressed
function mousePressed() {
    // code to run when mouse is pressed
    clear();
    background(220);
    palette = floor(random(676));
    // if (newPal){
    //     palette = floor(random(676));
    //     newPal = false;
    // }
}

// function generatePal(){
//     let palette = floor(random(676));
//     return palette;
// }
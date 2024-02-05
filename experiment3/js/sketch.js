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
// l system generation set up
let rules = {
    "F": "F+G+F",
    "G": "F-G++F-G"
}
// l system drawing set up
let len; 
let ang = 90;
let drawRules;

let word = "GFFGF";

class MyClass {
    constructor(param1, param2) {
        this.property1 = param1;
        this.property2 = param2;
    }

    myMethod() {
        // code to run when method is called
    }
}

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
    noLoop();
    drawRules ={
        "F": () =>{
            line(0, 0, 0, -len);
            translate(0, -len);
        },
        "G": () =>{
            line(0, 0, 0, len);
            translate(0, len);
        },
        "-": () =>{
            rotate(PI/180 * ang);
        },
        "+": () =>{
            rotate(PI/180 * -ang);
        },
    }
}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
    // call a method on the instance
    myInstance.myMethod();
    // Put drawings here
    //len = 1
    len = random(5,20);
    colorMode(HSB);
    stroke(random(183,228), random(15,55),random(55,80));
    push();
    translate(mouseX, mouseY);
    rotate(PI/180 * ang);
    for(let i = 0; i < word.length; i++){
        let c = word[i];
        if(c in drawRules){
            drawRules[c]();
        }
    }
    pop();
}

// mousePressed() function is called once after every time a mouse button is pressed
function mousePressed() {
    // code to run when mouse is pressed
    word = generate();
    draw();
    console.log(word);
}

function generate(){
    let next = "";
    for(let i = 0; i < word.length; i++){
        let c = word[i];
        if (c in rules){
            next += rules[c];
        }
        else{
            next += c;
        }
    }


    return next; 
}
img = "";
status = "";
objects = [];

function preload() {
    img = loadImage("th (24).jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "status - detecting  objects";
}

function modelLoaded() {
    console.log("model is loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    if (status != "") {
        for (i = 0; i < objects.length; i++) {
       document.getElementById("status").innerHTML = "Status : object detected";
       fill("red");
       percent = floor(objects[i].confidence*100);
       text(objects[i].label + " % " + percent + "%", objects[i].x, objects[i].y);
       noFill();
       stroke("blue");
       rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

        }
    }





    // image(img,0,0,640,420);
    // fill(255,0,0);
    // text("DOG",40,80);
    // noFill();
    // stroke(255,0,0);
    // rect(30,60,400,350);
    // fill(255,255,0);
    // text("CAT",340,100);
    // noFill();
    // stroke("red");
    // rect(300, 90, 250, 350);

}
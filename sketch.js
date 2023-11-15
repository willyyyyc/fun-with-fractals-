var angle = 0;

var slider;
function setup() {
    createCanvas(1000,1000);
    slider = createSlider(0, PI, PI / 4, 0.01);
}

function draw() {
    background(51);
    angle = slider.value();
    stroke(255);
    translate(500, height);
    branch(250);
}

function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 4) {
        push();
        rotate(angle);
        branch(len * 0.67);
        pop();
        push();
        rotate(-angle);
        branch(len * 0.67);
        pop();
    }
}
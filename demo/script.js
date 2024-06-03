let player;
let reverb;
let button;
let roomSlider;
let wetMix;

let baseURL = "./";

reverb = new Tone.JCReverb({
  roomSize: 0.8,
  wet: 0.5,
}).toDestination();

player = new Tone.Player(baseURL + "output.wav").connect(reverb);

function setup() {
  createCanvas(windowWidth, windowHeight);

  wetMix = createSlider(0, 1, 0.5, 0.01);
  wetMix.style("width", "200px");
  wetMix.position(width / 2 - 100, height / 2 + 80);

  roomSlider = createSlider(0, 1, 0.5, 0.01);
  roomSlider.style("width", "200px");
  roomSlider.position(width / 2 - 100, height / 2 + 170);

  button = createButton("Play Sound");
  button.position(width / 2 - 50, height / 2);
  button.mousePressed(play1);
}

function draw() {
  reverb.wet.value = wetMix.value();
  reverb.roomSize.value = roomSlider.value();
  background(92, 173, 191);
  textFont("Helvetica");
  textSize(17);
  text("Reverb Example", width / 2, height / 2 - 100);

  textSize(10);
  fill("white");
  textAlign(CENTER);
  text(
    int(wetMix.value() * 100) + "% effect mix",
    wetMix.x + 100,
    wetMix.y - 10
  );
  textAlign(CENTER);
  text(
    "Room size parameter: " + (roomSlider.value() * 100).toFixed(2) + "%",
    roomSlider.x + 100,
    roomSlider.y - 20
  );
}

function play1() {
  player.start();
}

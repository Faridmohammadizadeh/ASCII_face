console.log("0w0");
const biteCharecter = "@#W$975310!abc;:+=-,._ ";
const biteLen = biteCharecter.length;

let mainImg;
function preload() {
  mainImg = loadImage("/src/target.jpg");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(10);
  // image(mainImg, 0, 0, width, height);

  let w = (width / mainImg.width);
  let h = (height / mainImg.height);
  
  mainImg.loadPixels();

  for (let i = 0; i < mainImg.width; i++) {
    for (let j = 0; j < mainImg.height; j++) {
      const pixelIndex = (i + j * mainImg.width) * 4;
      const r = mainImg.pixels[pixelIndex + 0];
      const g = mainImg.pixels[pixelIndex + 1];
      const b = mainImg.pixels[pixelIndex + 2];
      // const a = mainImg.pixels[pixelIndex + 3];
      const average = (r + g + b) / 3;

      noStroke();
      let c = color(r, g, b);
      fill(average);
      // square(i * w, j * h, w * 0.4);
      const charindex = floor(
        map(average+30, 0, 255, biteLen, 0)
        );
      
      textSize(w);
      textAlign(CENTER, CENTER);
      // text("Retr0", i * w + w * 0.5, j * h + h * 0.5);
      text(biteCharecter.charAt(charindex), i * w + w * 0.5, j * h + h * 0.5);



    }
  }
}

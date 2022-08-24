console.log("0w0");
// const biteCharecter = "@#W$975310!abc;:+=-,._ ";
const biteCharecter = "@#W$97530+=_";
const biteLen = biteCharecter.length;

// for images:
  // let mainImg;
  // function preload() {
  //   mainImg = loadImage("/src/target.jpg");
  // }
// End:for images

// for video:
let videoSource ;
let mainDiv ;


function setup() {
  noCanvas();
  videoSource = createCapture(VIDEO);
  videoSource.size(80, 50);
  mainDiv = createDiv();
}

function draw() {
  // background(10);
  // image(mainImg, 0, 0, width, height);

  // let w = (width / mainImg.width);
  // let h = (height / mainImg.height);
  
  videoSource.loadPixels();

  let eachFrame = "";
  for (let j = 0; j < videoSource.height; j++) {
    for (let i = 0; i < videoSource.width; i++) {
      const pixelIndex = (i + j * videoSource.width) * 4;
      const r = videoSource.pixels[pixelIndex + 0];
      const g = videoSource.pixels[pixelIndex + 1];
      const b = videoSource.pixels[pixelIndex + 2];
      // const a = mainImg.pixels[pixelIndex + 3];

      const average = (r + g + b) / 3;

    // before dom in p5:
      // noStroke();
      // let c = color(r, g, b);
      // fill(average);
    // End:before dom in p5


      const charindex = floor(
        map(average, 0, 225, biteLen, 0)
        );


    // before dom in p5:
      // textSize(w);
      // textAlign(CENTER, CENTER);
      // text("Retr0", i * w + w * 0.5, j * h + h * 0.5);
      // text(biteCharecter.charAt(charindex), i * w + w * 0.5, j * h + h * 0.5);
    // End:before dom in p5

    const eachCharecter = biteCharecter.charAt(charindex);
    if (eachCharecter == " ") {eachFrame += "&nbsp"}
    else {eachFrame += eachCharecter}
  }
  eachFrame += "<br/>"

  }
  mainDiv.html(eachFrame);

}

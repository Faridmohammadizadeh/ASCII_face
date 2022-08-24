console.log("0w0");
const biteCharecter = "@#W$975310!abc;:+=-,._  ";
const biteLen = biteCharecter.length;

// for images:
  // let mainImg;
  // function preload() {
  //   mainImg = loadImage("/src/target.jpg");
  // }
// End:for images

// for video:
let videoSource ;


function setup() {
  noCanvas();
  videoSource = createCapture(VIDEO);
  videoSource.size(48, 48);

  background(10);
  // image(mainImg, 0, 0, width, height);

  let w = (width / mainImg.width);
  let h = (height / mainImg.height);
  
  mainImg.loadPixels();

  for (let j = 0; j < mainImg.height; j++) {
    let eachRow;
    for (let i = 0; i < mainImg.width; i++) {
      const pixelIndex = (i + j * mainImg.width) * 4;
      const r = mainImg.pixels[pixelIndex + 0];
      const g = mainImg.pixels[pixelIndex + 1];
      const b = mainImg.pixels[pixelIndex + 2];
      // const a = mainImg.pixels[pixelIndex + 3];

      const average = (r + g + b) / 3;

    // before dom in p5:
      // noStroke();
      // let c = color(r, g, b);
      // fill(average);
    // End:before dom in p5


      const charindex = floor(
        map(average, 0, 255, biteLen, 0)
        );

    // before dom in p5:
      // textSize(w);
      // textAlign(CENTER, CENTER);
      // text("Retr0", i * w + w * 0.5, j * h + h * 0.5);
      // text(biteCharecter.charAt(charindex), i * w + w * 0.5, j * h + h * 0.5);
    // End:before dom in p5

    const eachCharecter = biteCharecter.charAt(charindex);
    if (eachCharecter == " ") {eachRow += "&nbsp"};
    eachRow += eachCharecter;
  }
  createDiv(eachRow.slice(9));
  }
}

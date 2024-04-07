let colors = [
  [255, 0, 0], // Red
  [255, 127, 0], // Orange
  [255, 255, 0], // Yellow
  [0, 255, 0], // Green
  [0, 0, 255], // Blue
  [127, 0, 255], // Indigo
  [255, 0, 255] // Violet
];

function preload() {
  for (let i = 0; i < colors.length; i++)
    colors[i] = color(colors[i]);
  
  const start_time = performance.now();
  {
    while (colors.length < 1e3) {
      const new_list = new Array(2 * colors.length - 1);
      for (let i = 0; i < colors.length - 1; i++) {
        new_list[2 * i] = colors[i];
        new_list[2 * i + 1] = lerpColor(colors[i], colors[i + 1], 0.5);
      }
      new_list[new_list.length - 1] = colors[colors.length - 1];
      colors = new_list;
    }
    noLoop();
    console.log(performance.now() - start_time);
  }
}

function setup() {
  createCanvas(800, 200);
  noStroke();
}

let calc_time = 0;

function draw() {  
  const tile_shift = width / colors.length;
  const tile_width = Math.ceil(tile_shift);
  
  background(220);
  
  let x = 0;
  // Draw all the rectangles specified in the colors list
  for (const col of colors) {
    push();
    {
      fill(col);
      rect(x, 0, tile_width, height);
    }
    pop();
    
    x += tile_shift;
  }
}

function insert(list, index, value) {
  return [...list.slice(0, index), value, ...list.slice(index)];
}
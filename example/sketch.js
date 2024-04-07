let starting_colors = [
  [255, 0, 0], // Red
  [255, 127, 0], // Orange
  [255, 255, 0], // Yellow
  [0, 255, 0], // Green
  [0, 0, 255], // Blue
  [127, 0, 255], // Indigo
  [255, 0, 255] // Violet
];
let list = new Linked.List();

function preload() {
  for (const starting_color of starting_colors)
    list.push(color(starting_color));
  
  const start_time = performance.now();
  {
    while (list.length < 1e3)
      for (let node = list.head; node.next != null; node = node.next.next) {
        list.insert(node, lerpColor(node.data, node.next.data, 0.5));
      }
    noLoop();
    console.log(performance.now() - start_time);
  }
}

function setup() {
  createCanvas(800, 200);
  noStroke();
}

function draw() {
  
  const tile_shift = width / list.length;
  const tile_width = Math.ceil(tile_shift);
  
  background(220);
  
  let x = 0;
  // Draw all the rectangles specified in the linked list
  for (let node = list.head; node != null; node = node.next) {
    push();
    {
      fill(node.data);
      rect(x, 0, tile_width, height);
    }
    pop();
    
    x += tile_shift;
  }
}
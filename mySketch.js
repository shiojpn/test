
let target = 1;
let current = 0;
let p = 0;
let layers = [];
let colors;

//https://coolors.co/palette/9b5de5-f15bb5-fee440-00bbf9-00f5d4
let background_palette = ["#9b5de5","#f15bb5","#fee440","#00bbf9","#00f5d4"]

//https://coolors.co/palette/9b5de5-f15bb5-fee440-00bbf9-00f5d4
let palette = ["#9b5de5","#f15bb5","#fee440","#00bbf9","#00f5d4"]


function setup() {
  createCanvas(640, 640);
  colorMode( HSB, 360, 100, 100 );
  angleMode(DEGREES);
  rectMode(CENTER);
  //frameRate(1);
  for(i = 0; i < 10; i++){
    let layer = createGraphics(width/2,height/2);
    layer.colorMode(HSB,360,100,100,100);
    layer.angleMode(DEGREES);
    layers[i] = layer
    colors = shuffle(palette.concat());
    background_color = shuffle(background_palette.concat());
  }
}

function draw() {
  //background(background_color);
  
  
  delta_time = 1/120;
  let k = 8;
  current = lerp(target, current, exp(-k * delta_time));
  
  //let x = width/2 + current * width;
  //let y = height/2
  //let n = noise(frameCount/80);
  
  
  for(j = 0; j < 10; j++){
    randomSeed(0);
    let layer = layers[j];
    
    
    let x = layer.width/2 + current * layer.width;
    let y = layer.height/2
    
    layer.background(background_color[j%background_color.length]);
    //layer.noStroke();
    layer.strokeWeight(16);
    layer.noFill();
    layer.stroke(0,0,10);
    layer.rect(0,0,layer.width);
    
    
    //layer.strokeWeight(15);
    //layer.noStroke();
    //layer.stroke(colors[(j+1)%colors.length]);
    layer.fill(colors[(j+1)%colors.length]);
    layer.ellipse(x,y,layer.width/2);
    
    //layer.stroke(colors[j%colors.length]);
    layer.fill(colors[j%colors.length]);
    layer.ellipse(x- layer.width ,y ,layer.width/2);
  
    //rect(x,y-100,150);
    //rect(x- width,y-100,150);
  
    for(l = 0; l < 10; l ++){
      image(layers[(j+l*int(random(10)))%layers.length],j*80,l*80,80,80);
    }
  }
  
  if(current > 0.99){
    current = 0;
    let c = colors[colors.length-1];
    colors.pop();
    colors.unshift(c);
  }
  
  
  p++;
  //noLoop();
  
}

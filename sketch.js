let font;
let fontRegular;
let fontItalic;
let fontBold;
let gif;
let gif2;
let gif3;
let gif4;
let gif5;
let stars=[]
let legend;
let fool;

// Load the image.
function preload() {
  gif = loadImage('FEB 25.gif');
  gif2 = loadImage('FEB 26.gif');
  gif3 = loadImage('FEB 28.gif');
  gif4 = loadImage('March 1.gif');
  gif5 = loadImage('March 2.gif');
  legend = loadImage('LEGEND.png');
fool=loadImage('Running fool.gif');
  
}

function setup() {
  createCanvas(1000, 3500);
  
    //looping function spawn stars
  for (let i=0; i<8; i++){
   let star={
    x:random(0,-800),
    y:random(2,width)
   }
   stars.push(star)
 }
  
}

function draw() {
  background(0);
  


  
  image(legend, 120, 300, 750, 500)//legend
  image(gif, 50, 800,500,500);//FEB 25
  image(gif2, 50, 1300,500,500);//FEB 26
  image(gif3, 50, 1800,500,500);//FEB 28
  image(gif4, 50, 2300,500,500);//MAR 1
  image(gif5, 50, 2800,500,500);//MAR 2
  rect(400, 225, 500, 55);
   rect(170, 150, 500, 55);
  stroke(0);



  //draw stars
  for (let star of stars){
  star.y += (0)
  star.x-=(100)
  rect(star.x, star.y, 80,3);
     if (star.x<width){ 
       stars.splice(stars.indexOf(star), 1)
         let newstar={
    x:random(0,2000),
    y:random(height)
           }
   stars.push(newstar)   
    }
}
  
  
  // Calculate the center coordinates.

  

textSize(50);{
  textFont('Impact');{
  text('RUN MY DATA', 280, 200);
text('Times for 10 miles', 450, 270);
  }
}
  

//writing for dates
  rect(235, 815, 150, 55);
textSize(25);{
    textFont('Courier New');{
      text('Tue FEB 25', 235, 850);
    }
}
  rect(235, 1315, 150, 55);
textSize(25);{
    textFont('Courier New');{
      text('Wed FEB 26', 235, 1350);
    }
}
  rect(235, 1815, 150, 55);
textSize(25);{
    textFont('Courier New');{
      text('Fri FEB 28', 235, 1850);
    }
}  
  rect(235, 2315, 150, 55);
textSize(25);{
    textFont('Courier New');{
      text('Sat MAR 1', 235, 2350);
    }
}
  rect(235, 2815, 150, 55);
textSize(25);{
    textFont('Courier New');{
      text('Sun MAR 2', 235, 2850);
    }
}
  
//temperature
rect(700, 900, 200, 100);
textSize(60);{
  textFont('optima');{
      text('40°F', 740, 970);
    }
}
rect(700, 1400, 200, 100);
textSize(60);{
  textFont('optima');{
      text('46°F', 740, 1470);
    }
}
rect(700, 1900, 200, 100);
textSize(60);{
  textFont('optima');{
      text('40°F', 740, 1970);
    }
}
rect(700, 2400, 200, 100);
textSize(60);{
  textFont('optima');{
      text('43°F', 740, 2470);
    }
}
rect(700, 2900, 200, 100);
textSize(60);{
  textFont('optima');{
      text('18°F', 740, 2970);
    }
}
  
  
  
  
  
    //draw runner
  image(fool, mouseX, mouseY, 100,120)
  
    rotate(1.5);{ 
  image(fool, 100, -160,200,200);
  }
  
  
  
}

function windowResized(){
  resizeCanvas(windowWidth,3500);}

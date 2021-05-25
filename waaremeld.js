 new p5((sketch) => {
    let mX,mY;
    let mont;
    let logo;
    sketch.setup = () => {
      if(innerWidth<1000){
        var myCanvas = sketch.createCanvas(innerWidth, innerHeight/3);
      }
      else{
        var myCanvas = sketch.createCanvas(innerWidth / 2, innerHeight/2);
      }
     
      myCanvas.parent("wearemeld");
      mont = sketch.loadFont("res/montySb.ttf");
      logo= sketch.loadImage("res/meld2.png");
      logo.loadPixels();
      sketch.textFont(mont);
      sketch.textSize(100);
      sketch.textAlign(sketch.CENTER);
  
    };
  
    sketch.draw = () => {
      // sketch.background();
      mX = sketch.map(sketch.mouseX, 0, innerWidth, 10,40);
      mY = sketch.map(sketch.mouseY, 0, innerHeight, 0, 40);
      sketch.clear();
      sketch.fill(200);
      sketch.text("We",sketch.width/8 +mX,sketch.width/4) ; 
      sketch.fill(100);
      sketch.text("are",sketch.width/4+mY,sketch.width/4+50) ;

      sketch.image(logo, sketch.width/4, sketch.width/4+35,logo.width/1.5+mX,logo.height/1.5+mY-10);
      
  
  
    };
  });
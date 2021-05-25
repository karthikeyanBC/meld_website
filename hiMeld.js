let myp5 = new p5((sketch) => {

  
  let mont;
  sketch.setup = () => { 
    if(innerWidth<1000){

      var myCanvas = sketch.createCanvas(innerWidth - 20 , innerHeight/2);

    }else{
      var myCanvas = sketch.createCanvas(innerWidth/2 , innerHeight);
    }
 
    myCanvas.parent("hiweareMeld");
    mont = sketch.loadFont("res/montySb.ttf");
    sketch.textFont(mont);
    sketch.textSize(sketch.height/2);
    sketch.textAlign(sketch.CENTER);

  };

  sketch.draw = () => {
    sketch.background(0);
    // sketch.translate(0,);
    sketch.translate(sketch.width/2, sketch.height/2);
    

    for (var i = 0; i < 5; i++) {
      sketch.fill(80 - i * sketch.random(0, 210));
      if (i == 4) {
        
          sketch.fill(180);
        
      }
      sketch.text("Hi!", i  * sketch.width/30, sketch.width/4 - i * sketch.width/30 *sketch.mouseX * 0.001);

    }


  };
});
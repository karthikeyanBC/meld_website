let landingS = new p5((sketch) => {



    let meld;
    let meldo;
    let xoff = 1;
    let count = 1;
    let mobile = false;
    let aX,aY,aZ;

    // if (window.DeviceMotionEvent) {
    //     window.addEventListener('devicemotion', deviceMotionHandler);
    //     // setTimeout(stopJump, 3*1000);
    //   }

    //   function deviceMotionHandler(event){
    //      aX = event.accelerationIncludingGravity.x*10;
    //      aY = event.accelerationIncludingGravity.y*10;
    //      aZ = event.accelerationIncludingGravity.z*10;
    //   }

    sketch.setup = () => {
        if(innerWidth<1000){
            mobile=true;
        }
        var myCanvas = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight, sketch.WEBGL);
        myCanvas.parent("landing");
        meld = sketch.loadImage('res/meld2.png');
        meldo = sketch.loadImage('res/meldo.png');
        sketch.imageMode(sketch.CENTER);
        sketch.background(0);


    }

    sketch.draw = () => {

        let time = sketch.millis();
        sketch.background(0);
        sketch.rotateY(sketch.sin(time / 3000) / 2);
        sketch.rotateY(sketch.map(sketch.mouseX, 0, sketch.width, 0, sketch.PI / 8));

        xoff = xoff + 0.001;
        //MELD IMAGE
        sketch.image(meld, 0, 0);

        let num = sketch.floor(sketch.map(sketch.mouseX, 0, sketch.width, 0, 8));
        let r = sketch.map(sketch.noise(xoff), 0, 1, -sketch.width, sketch.width);

        for (let i = 1; i < 15; i++) {

            sketch.push();
            sketch.translate(r, r, -200);
            sketch.noFill();
            if (count < 50) {
                sketch.stroke(count * 5, 50);
                count = count + 1;
            } else {
                sketch.stroke(255,200);
                sketch.strokeWeight(2);
                count = 0;


            }
            sketch.ellipse(0, 0, i * 300, i * 300, 40);
            sketch.pop();



        }
        sketch.rotateX(sketch.mouseY * 0.0001);
        for (let i = 1; i < num; i++) {
           
                sketch.push();
                sketch.translate(i, i * 80, i * -100);
                sketch.image(meldo, 0, 0);
                sketch.pop();
            
        }
        if (num > 1) {
            for (let i = 1; i < num - 1; i++) {
                sketch.push();
                sketch.translate(i, i * -80, i * 100);
                sketch.image(meldo, 0, 0);
                sketch.pop();
            }
        }
        window.addEventListener('resize', onWindowResize, false);
        // print(frameRate(noise(xoff)));

    }

    function onWindowResize() {
        var myCanvas = sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);
        sketch.redraw();

    }
});
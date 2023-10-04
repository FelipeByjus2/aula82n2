canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d"); 

  var mouseEvent = "empty";
  var lastPositionX, lastPositionY;

   color = "red";
   widthLine = 1;


     canvas.addEventListener("mousedown", myMouseDown);
   function myMouseDown(e){
    widthLine = document.getElementById("widthLine").value;
    color = document.getElementById("color").value;
    mouseEvent = "mouseDown"
   }

     canvas.addEventListener("mouseleave", myMouseleave);
   function myMouseleave(e){
    mouseEvent = "mouseleave"
   }

    canvas.addEventListener("mouseup", myMouseup);
   function myMouseup(e){
    mouseEvent = "mouseUP"
   }

   canvas.addEventListener("mousemove", myMousemove);
   function myMousemove(e){
    PositionMouseX = e.clientX - canvas.offsetLeft;
    PositionMouseY = e.clientY - canvas.offsetTop;
        if (mouseEvent == "mouseDown" ) {
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = widthLine;

            console.log("Last position of x and y coordinates = ");
            console.log("x =" + lastPositionX + "y = " + lastPositionY);
            ctx.moveTo(lastPositionX, lastPositionY)

            console.log("Current position of x and y coordinates =");
            console.log("x =" + PositionMouseX + "y = " + PositionMouseY);
            ctx.lineTo(PositionMouseX, PositionMouseY);
            ctx.stroke();
        }
        lastPositionX = PositionMouseX;
        lastPositionY = PositionMouseY;

   }
   function clearArea() { ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); }

  
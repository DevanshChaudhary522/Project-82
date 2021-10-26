canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
color="blue";
linewidth=5;
radius=10;
 canvas.addEventListener("mousedown",mymousedown);
 function mymousedown(e) {
     mouseEvent="mousedown";
     console.log(mouseEvent);
     color=document.getElementById("Color").value;
     linewidth=document.getElementById("width").value;
     radius=document.getElementById("Radius").value;
 }

 canvas.addEventListener("mouseup",mymouseup);
 function mymouseup(e) {
     mouseEvent="mouseup";
     console.log(mouseEvent);
 }

 canvas.addEventListener("mouseleave",mymouseleave);
 function mymouseleave(e) {
     mouseEvent="mouseleave";
     console.log(mouseEvent);
 }

 canvas.addEventListener("mousemove",mymousemove);
 function mymousemove(e) {
     current_of_X=e.clientX-canvas.offsetLeft;
    
     current_of_Y=e.clientY-canvas.offsetTop;
     
     if (mouseEvent=="mousedown"){
         console.log("xvalue="+current_of_X+"yvalue="+current_of_Y);
         ctx.beginPath();
         ctx.strokeStyle=color;
         ctx.lineWidth=linewidth;
         ctx.arc(current_of_X,current_of_Y,40,0,2*Math.PI);
         ctx.stroke();
         
     }
     
 }



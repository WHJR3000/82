var lpox, lpoy, cpox, cpoy;
var mouse_event="empty";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
colour="magenta"
Wol=1;
radius=10;





canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
colour=document.getElementById("colour").value;
Wol=document.getElementById("width").value;
radius=document.getElementById("radius").value;
mouse_event="mousedown";


}
canvas.addEventListener("mouseup", myMouseup)
function  myMouseup(e){
    mouse_event="mouseup"
}
canvas.addEventListener("mouseleave", myMouseleave)
 function myMouseleave(e){
mouse_event="mouseleave"
}

canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e){
    cpox=e.clientX-canvas.offsetLeft;
    cpoy=e.clientY-canvas.offsetTop;
    if(mouse_event=="mousedown"){
ctx.beginPath();
ctx.strokeStyle= colour;
ctx.lineWidth= Wol;
ctx.arc(cpox, cpoy, radius, 0, 2* Math.PI);

ctx.stroke();
}
  lpox=cpox;
lpoy=cpoy;
}
function clear(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    }
    
























































































































































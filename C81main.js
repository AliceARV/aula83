canvas= document.getElementById("canvas");
ctx= canvas.getContext("2d");
color= "blue";

canvas.addEventListener("mousedown", myMousedown); 

function myMousedown(e)
{
    color=document.getElementById("color").value;
    largura=document.getElementById("largura").value;
    evento="mousedown";
}
canvas.addEventListener("mouseup", myMouseup);
function myMouseup(e)
{
    evento="mouseup";
}

canvas.addEventListener("mouseleave", myMouseleave);
function myMouseleave(e)
{
    evento="mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
 function my_mousemove(e)
 {
  current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
  current_position_of_mouse_y = e.clientY - canvas.offsetTop;

  if (evento == "mousedown") {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = largura;

  console.log("Last position of x and y coordinates = ");
  console.log("x = " + last_position_of_x + "y = " 
       + last_position_of_y);
  ctx.moveTo(last_position_of_x, last_position_of_y);

  console.log("Current position of x and y coordinates = ");
  console.log("x  = " + current_position_of_mouse_x + "y = " 
          + current_position_of_mouse_y);
  ctx.lineTo(current_position_of_mouse_x, 
          current_position_of_mouse_y);
  ctx.stroke();
  }
  last_position_of_x = current_position_of_mouse_x; 
  last_position_of_y = current_position_of_mouse_y;
}

function apagar ()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
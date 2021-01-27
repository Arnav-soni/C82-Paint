canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var mouse_event = "empty";
color = "black";
width_of_line = 5;
radius = 20;

canvas.addEventListener("mousedown", mymousedown);

function mymousedown(e) {
    color=document.getElementById("color_textinput").value;
    width_of_line=document.getElementById("width_textinput").value;
    radius=document.getElementById("radius_textinput").value;
    mouse_event = "mousedown";
    console.log("i click the mouse")
}

canvas.addEventListener("mouseup", mymouseup);

function mymouseup(e) {
    mouse_event = "mouseup";
}

canvas.addEventListener("mouseleave", mymouseleave);

function mymouseleave(e) {
    mouse_event = "mouseleave";
}

canvas.addEventListener("mousemove", mymousemove);

function mymousemove(e) {
 current_x=e.clientX-canvas.offsetLeft;
 current_y=e.clientY-canvas.offsetTop;

  if(mouse_event == "mousedown"){

    console.log("current position of X and Y coordinates = ");
    console.log("x = " + current_x + "y = "+ current_y)

    ctx.beginPath();
    ctx.strokeStyle=color;
   ctx.lineWidth=width_of_line;
   ctx.arc(current_x, current_y ,radius ,0, 2*Math.PI);
ctx.stroke();
}
 last_x=current_x;
 last_y=current_y;
};

function clear_canvas(){
    ctx.clearRect(0,0,ctx.canvas.width,canvas.height);
}
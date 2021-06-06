var circle= document.getElementById("circle");
var up= document.getElementById("up");
var down= document.getElementById("down");

var rotateVal= circle.style.transform;
var rotatesum;

up.onclick= function()
{
    rotatesum= rotateVal + "rotate(-90deg)";
    circle.style.transform= rotatesum;
    rotateVal= rotatesum;
}

down.onclick= function()
{
    rotatesum= rotateVal + "rotate(90deg)";
    circle.style.transform= rotatesum;
    rotateVal= rotatesum;
}
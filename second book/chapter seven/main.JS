var rightEye = document.getElementById("righteye");

rightEye.style.backgroundColor = "green";

var head = document.getElementById("head")

head.style.backgroundColor = "red";

var mouth = document.getElementById("mouth");

mouth.style.backgroundColor = "black"

var body = document.getElementById("body");

body.style.backgroundColor = ("pink")






rightEye.addEventListener("click", moveUpDown);

 function moveUpDown(e) {
         var robotPart = e.target;
         var top = 0;
         var id = setInterval(frame, 10) // draw every 10ms

    function frame() {
     robotPart.style.top = top + '%';
     top++;
     if (top === 20) {
        clearInterval(id);
       }
   }
 }


 var leftArm = document.getElementById("leftarm");

leftArm.addEventListener("click", moveRightLeft);

function moveRightLeft(e) {
    var robotPart = e.target;
    var left = 0;
    var id = setInterval(frame, 10) // draw every 10ms

      
function frame() {
        robotPart.style.left = left + '%';
        left++;
        if (left === 70) {
            clearInterval(id);
        }
    }
}
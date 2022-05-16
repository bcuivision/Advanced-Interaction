// (function startTime() 
// {
//     var today = new Date();
//     var hr = today.getHours();
//     var min = today.getMinutes();
  
//     min = checkTime(min);
  
//     console.log(document.getElementsByClassName("clock").innerText);
  
//     var clocks = document.getElementsByClassName("clock");
//     clocks[0].innerText = hr + ":" + min;
//     var t = setTimeout(startTime, 500);
  
  
// })();

// function checkTime(i) 
// {
//   if (i < 10) {i = "0" + i};
//   return i;
// }

new Audio('brick.mp3').play();
new Audio('start.mp3').play();
  

var boxes = document.getElementsByClassName("box");
  
for(let i=0; i<boxes.length; i++){
  boxes[i].addEventListener("click", toggleColor);
    
}

function toggleColor(e) 
{
    var box = e.target;

    if (e.target.style.backgroundColor=="rgba(0, 0, 0, 0)")
    {
    //   box.style.backgroundColor = "black";
    //   box.style.border = "solid .5px white";
    //   box.style.height ="11%";
    }
    else
    {
      new Audio('brick.mp3').play();

      box.style.height ="100%";
      // box.style.cursor = "url('styles/red_hammr.png'), pointer";
      generateGrad();

      box.style.boxShadow ="0 0 0 0 rgba(255, 255, 255, 0)";
      box.style.backgroundColor = "rgba(0,0,0,0)";
      box.style.display="hidden";
      box.style.zIndex="-99";
      box.style.border = "solid .5px rgba(0,0,0,0)";
    }
}

let hexString = "0123456789abcdef";

let randomColor = () => {
  let hexCode = "#";
  for( i=0; i<6; i++){
      hexCode += hexString[Math.floor(Math.random() * hexString.length)];
  }
  return hexCode;
}

let generateGrad = () => {
  let colorOne = randomColor();
  let colorTwo = randomColor();
  let angle = Math.floor(Math.random() * 360);
  let outputColor

  document.getElementsByClassName("container")[0].style.background = `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo})`;
}







function destroy()
{
  new Audio('explosion.mp3').play();

  for(let i=0; i<boxes.length; i++)
  {
    boxes[i].style.display="none";
      
  }
}

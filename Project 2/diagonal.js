//customized cursor
let curs = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => 
{
  let x = e.pageX;
  let y = e.pageY;
  curs.style.left = (x-50) + "px";
  curs.style.top = (y-50) + "px";
});

//clickable hover animation trigger
let tempClickableElement = null;
let clickables = document.getElementsByClassName("clickable");

for (let c of clickables)
{
    c.addEventListener("mouseover", mouseOver);
    c.addEventListener("mouseout", mouseOut);
}

cursorLabel = document.getElementById("hoverLabel");

function mouseOver(e) 
{
    console.log("Mouse Hovering Clickable");
    cursorLabel.style.display ="block";
    let classes = e.toElement.classList;
    tempClickableElement = classes;
    classes.add("animate__animated", "animate__pulse", "animate__infinite", "infinite")
}

function mouseOut() 
{
    console.log("Mouse Left Clickable");
    cursorLabel.style.display ="none";
    tempClickableElement.remove("animate__animated", "animate__pulse", "animate__infinite", "infinite")
}

//OnClick Transition
let button = document.getElementById('one');

button.onclick = function(){transition()};

function transition()
{
  console.log("clicked");
  button.style.width = "1000px";
  button.style.height= "1000px";

  document.getElementsByTagName('body')

//   var myTimeout = setTimeout(direct, 1000);
}

function direct()
{
  window.location.href = "nextPage.html";
}
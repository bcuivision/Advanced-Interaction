Marquee3k.init();

var divider = document.getElementById("divider");
var pos = divider.getBoundingClientRect();
console.log(pos.top, pos.right, pos.bottom, pos.left);
console.log("Style: "+divider.style.left);

// divider.ondrag = function(event)
// {
//     console.log("dragged");
//     event.target.style.left = event.clientX;
// }

// dragElement(divider);

// function dragElement(elmnt) 
// {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     /* if present, the header is where you move the DIV from:*/
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
//     /* otherwise, move the DIV from anywhere inside the DIV:*/
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;

//     // set the element's new position:
//     // elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
//     /* stop moving when mouse button is released:*/
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }

function pause() 
{
  console.log("Pausing 1s for transition animation");
}

document.getElementById("bl").onclick = function openMenu()
{
    console.log("clicked");
    document.getElementById("bldropdown").classList.toggle("show");
}

document.getElementById("rp").onclick = function openMenu()
{
    console.log("clicked");
    document.getElementById("rpdropdown").classList.toggle("show");
}

function transformScroll(event) {
  if (!event.deltaY) {
    return;
  }

  event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
  // event.preventDefault();
}

var element = document.scrollingElement || document.documentElement;
element.addEventListener('wheel', transformScroll);

function selectSection(event)
{
  event.target.classList.toggle("selected");
}

function transitionToRupture(event)
{
  if(event!=null)
  {
    event.preventDefault();
  }

  console.log("Moving to the Rupture exibition.");
  
  //move title up
  document.getElementsByClassName("titleType")[0].style.transform = "translateY(-300px)";

  //move navbar up
  let navbar = document.getElementsByClassName("navbar")[0];
  navbar.style.transform = "translateY(-200px)";
  navbar.style.position = "fixed";

  //move date up
  let date = document.getElementById("date");
  date.style.transform = "translateY(-260px)";

  //move right arrow
  let rightArrow = document.getElementById("rightArrow");
  rightArrow.style.transform = "translateX(1120px)";
  

  //move left arrow
  let leftArrow = document.getElementById("leftArrow");
  leftArrow.style.transform = "translateX(-1200px)";

  //move footer
  let footer = document.getElementById("webFooter");
  footer.style.transform = "translateY(-5px)";

  const halfPause = setTimeout(pause, 100);

  //scroll
  window.scrollBy({
    top: 0,
    left: 1635,
    behavior: "smooth"
  }); 

  //move section(divider)
  let divider = document.getElementById("divider");
  divider.style.position = "fixed";
  divider.style.left = "-810px";
  divider.style.mixBlendMode = "normal";
  divider.style.backgroundColor = "black";
  divider.style.zIndex = 0;

  //sidebar
  let sidebar = document.getElementsByClassName("sidebar")[0];
  sidebar.style.position = "fixed";
  sidebar.style.left = "0";
  sidebar.style.color = "white";
  sidebar.style.zIndex = 1;

  let overview = document.getElementsByClassName("overview")[0];
  overview.style.position = "fixed";
  overview.style.left = "30px";
  overview.style.bottom = "100px";
  overview.style.color = "white";
  overview.style.zIndex = 1;

  let title1 = document.getElementsByClassName("sectionTitle1")[0];
  let title2 = document.getElementsByClassName("sectionTitle2")[0];

  title1.style.color = "white";
  title2.style.color = "black";
  title2.style.textShadow = "-1px -1px 0 rgb(245, 245, 245), 1px -1px 0 rgb(245, 245, 245), -1px 1px 0 rgb(245, 245, 245), 1px 1px 0 rgb(245, 245, 245)";

  //home
  let home = document.getElementById("home");
  home.style.width = "0";
  home.style.margin = "0";

  rightArrow.style.zIndex = "5";

  //body
  let body = document.getElementsByTagName("body")[0];
  body.style.width = "0";
  body.style.margin = "0";
  home.style.visibility = "hidden";

  enableScroll();
}

function enableScroll()
{
  console.log("enable horizontal scroll in gallery view.");
  let html = document.getElementsByTagName("html")[0];

  // html.style.overflowX = "auto";
}

//return home
function reload()
{
  location.reload();
}

window.onscroll = function() 
{
  if (document.documentElement.scrollLeft > 200) 
  {
    console.log("scrolled more than 50px")

  } 
  else 
  {

  }
}

// gsap.registerPlugin(ScrollTrigger);

// gsap.utils.toArray(".panel").forEach((panel, i) => {
//   ScrollTrigger.create({
//     trigger: panel,
//     start: "top top", 
//     pin: true, 
//     pinSpacing: false 
//   });
// });


// ScrollTrigger.create({
//   snap: 1 / 4 // snap whole page to the closest section!
// });

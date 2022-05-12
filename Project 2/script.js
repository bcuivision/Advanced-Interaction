//customized cursor
let curs = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => 
{
  let x = e.pageX;
  let y = e.pageY;
  curs.style.left = (x - 22) + "px";
  curs.style.top = (y - 22) + "px";
});


// circle zoom in transition
let button = document.getElementById('entrance');

button.onclick = function(){transition()};

function transition()
{
  console.log("clicked");
  button.style.width = "2000px";
  button.style.height= "2000px";

  document.getElementsByTagName('body')

  var myTimeout = setTimeout(direct, 1000);
}

function direct()
{
  window.location.href = "nextPage.html";
}

// // diagonal transition from lower left corner
// let button2 = document.getElementById('diagonal');

// button2.onclick = function(){transition2()};

// function transition2()
// {
//   console.log("clicked");
//   button2.style.width = "2000px";
//   button2.style.height= "2000px";

//   document.getElementsByTagName('body')

//   var myTimeout = setTimeout(direct, 1000);
// }
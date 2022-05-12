window.scrollTo(5300, 0);

let currentPage = "home";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip);

let websiteTitle = gsap.to(".titleType", {
    y: -235,
    duration: 0.5,
    ease: "power4.in",
    paused: true
});

let date = gsap.to("#date", {
    y: -255,
    duration: 0.5,
    ease: "power4.in",
    paused: true
});

let navbar = gsap.to(".navbar", {
    y: -215,
    duration: 0.5,
    ease: "power4.in",
    paused: true
});

let divider = gsap.to("#divider", {
    x: -1910,
    duration: .6,
    ease: "power4.in",
    paused: true
});

let divider2 = gsap.to("#divider", {
    x: 1910,
    duration: 1,
    ease: "power4.in",
    paused: true
});

let leftArrow = gsap.to("#leftArrow", {
    opacity: 0,
    duration: 0.4,
    ease: "power4.in",
    paused: true
});

let rightArrow = gsap.to("#rightArrow", {
    opacity: 0,
    duration: 0.4,
    ease: "power4.in",
    paused: true
});

let museum = gsap.to("#museum", {
    y: 35,
    duration: 0.8,
    ease: "power4.in",
    paused: true
});

let rupture2 = gsap.to("#rupture", {
    x: 5730,
    duration: 1.5,
    ease: "power4.out(1.7)",
    paused: true
});
let rupture = gsap.to("#rupture", {
    x: -1250,
    duration: 1.5,
    ease: "back.in(1.7)",
    paused: true
});

let barelife = gsap.to("#barelife", {
    x: 5730,
    duration: 1.5,
    ease: "power4.in",
    paused: true
});

let homeSwipeRight = gsap.to("#home", {
    x: 5730,
    duration: 1,
    ease: "none",
    paused: true
});

function transitionToBarelife()
{
    currentPage ="barelife";
    
    console.log("clicked left arrow");
    
    //transition animation

    //up
    websiteTitle.play();
    navbar.play();
    date.play();
    museum.play(); // down

    rupture2.play();
    divider2.play();

    //wait (animation delay)
    const myTimeout = setTimeout(barelifeSlide, 1500);
}

function barelifeSlide()
{
    //swipe left
    // barelife2.play();
    leftArrow.play();
    rightArrow.play();
    barelife.play();
    homeSwipeRight.play();


    //make sidebar stationary/ fixed
    let barelifeSection = document.getElementById("barelife");
    let barelifeSidebar = document.getElementById("barelifeSidebar");

    //make sidebar stationary
    let state = Flip.getState("#barelifeSidebar");

    //remove rupture sidebar content from rupture to avoid fixed and transform conflict
    barelifeSidebar = barelifeSection.removeChild(barelifeSidebar);
    
    let container = document.getElementsByClassName("container")[0];
    container.appendChild(barelifeSidebar);

    barelifeSidebar.classList.toggle("fixSidebarContent");
    document.getElementById("barelifeSidebarBckgrnd").classList.toggle("dropshaow");


    Flip.from(state, {duration: 1, ease: "power1.out"});

    //disable scroll left past rupture section
    disableScrollRight();
}

function disableScrollRight()
{
    console.log("disable scrolling left past the rupture section");

    let barelifeSection = document.getElementById("barelife");
    console.log("starting pos: ");
    console.log(barelifeSection.getBoundingClientRect().left);
    console.log(window.scrollX);

    let startingPos = window.scrollX;

    document.onscroll = function()
    {
        //check if scroll left past limit
        if(barelifeSection.getBoundingClientRect().left > 430)
        {
            console.log("disable scroll past this section " + barelifeSection.getBoundingClientRect().left);

            //disable scroll by scrolling back to previous position
            window.scrollTo(startingPos, 0);
        }
        else if (barelifeSection.getBoundingClientRect().left < -3130)
        {
            console.log("disable scroll past this section " + barelifeSection.getBoundingClientRect().left);

            //disable scroll by scrolling back to previous position
            window.scrollTo(400, 0);

        }
        else
        {
            startingPos = window.scrollX;
        }

        console.log(barelifeSection.getBoundingClientRect().left);
        console.log(barelifeSection.getBoundingClientRect().right);
        console.log(window.scrollX);
    }
}


function transitionToRupture()
{
    currentPage ="rupture";

    console.log("clicked right arrow");

    //up
    websiteTitle.play();
    navbar.play();
    date.play();

    museum.play(); // down

    //wait (animation delay)
    const myTimeout = setTimeout(ruptureSlide, 1500);
}

function ruptureSlide()
{
    //swipe left
    divider.play();
    leftArrow.play();
    rightArrow.play();
    rupture.play();

    //make sidebar stationary/ fixed
    let ruptureSection = document.getElementById("rupture");
    let ruptureSidebar = document.getElementById("ruptureSidebar");

    //make sidebar stationary
    let state = Flip.getState("#ruptureSidebar");

    //remove rupture sidebar content from rupture to avoid fixed and transform conflict
    ruptureSidebar = ruptureSection.removeChild(ruptureSidebar);
    
    let container = document.getElementsByClassName("container")[0];
    container.appendChild(ruptureSidebar);

    ruptureSidebar.classList.toggle("fixSidebarContent");
    document.getElementById("ruptureSidebarBckgrnd").classList.toggle("dropshaow");


    Flip.from(state, {duration: 1, ease: "power1.out"});

    //disable scroll left past rupture section
    disableScrollLeft();
}

function disableScrollLeft()
{
    console.log("disable scrolling left past the rupture section");

    let ruptureSection = document.getElementById("rupture");
    console.log("starting pos: ");
    console.log(ruptureSection.getBoundingClientRect().left);
    console.log(window.scrollX);

    let startingPos = window.scrollX;

    document.onscroll = function()
    {
        //check if scroll left past limit
        if(ruptureSection.getBoundingClientRect().left > 400)
        {
            console.log("disable scroll past this section " + ruptureSection.getBoundingClientRect().left);

            //disable scroll by scrolling back to previous position
            window.scrollTo(startingPos, 0);
        }
    }
}

//navbar dropdown menu for barelife section
document.getElementById("bl").onclick = function openMenu()
{
    console.log("clicked");
    transitionToBarelife();
    document.getElementById("bldropdown").classList.toggle("show");
}

//navbar dropdown menu for rupture section
document.getElementById("rp").onclick = function openMenu()
{
    console.log("clicked");
    transitionToRupture();
    document.getElementById("rpdropdown").classList.toggle("show");
}

//return home
function reload()
{
  location.reload();
}

function learnMore()
{
  window.open("https://www.kemperartmuseum.wustl.edu/barelife");
}

function transitionToAbout()
{   
    // window.open("about.html");

    //remove about from current parent
    let abtPage = document.getElementById("about");
    let copy = abtPage.cloneNode(true);
    abtPage.remove();

    //add about as a child to current page
    let tempPage = document.getElementById(currentPage);
    tempPage.appendChild(copy);

    if(currentPage == "barelife")
    {
        document.getElementById("barelifeSidebar").classList.toggle("fixSidebarContent");

    }
    else if (currentPage == "barelife")
    {
        document.getElementById("ruptureSidebar").classList.toggle("fixSidebarContent");
    }

    let pagename = "#"+currentPage;

    let about = gsap.to(pagename, {
        y: "100%",
        duration: 1,
        ease: "power4.in",
        paused: true
    });
    
    about.play();
    navbar.play();
}

function clearAbout()
{

}
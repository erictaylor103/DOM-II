// Your code goes here
//I have not started yet

//ON CLICK - CHANGE THE COLOR OF THE FUN BUS LOGO WHEN CLICKED RANDOMNLY

let funBusLogo = document.querySelector(".logo-heading");

funBusLogo.addEventListener("click", function(){
  let randomColor = Math.floor(Math.random()*16777215).toString(16); //GENERATES A RANDOM COLOR RGB
  funBusLogo.style.color = "#" + randomColor;

});



//ON MOUSEOVER - CHANGE THE COLOR OF EACH MENU LINK RANDOMNLY
let navMenu = document.getElementsByClassName("nav-link");

for (let i = 0; i < navMenu.length; i++) {
  navMenu[i].addEventListener("mouseover", function(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16); //GENERATES A RANDOM COLOR RGB
    navMenu[i].style.color = "#" + randomColor;
  })
}

//LOAD - CHANGE THE IMAGES WHEN THE MAIN PAGE IS RELOADED
let carouselImages = document.querySelector(".intro img");

window.addEventListener("load", function(){
  //carouselImages.src = "";
  let randomNumber = Math.floor(Math.random()*6)+1;
  carouselImages.src = "./img/" + "img" + randomNumber + ".jpg";
  //console.log(randomNumber);
  //console.log(carouselImages);
});

//KEYDOWN - MAKE THE LOGO FONT SIZE LARGER WHEN ANY KEY IS PRESSED DOWN

window.addEventListener("keydown", function(){
  funBusLogo.style.fontSize = "45px";

});

//KEYUP - MAKE THE LOGO FONT SIZE RESET TO THE CSS PARAMETERS WHEN ANY KEY PRESSED IS LET GO

window.addEventListener("keyup", function(){
  funBusLogo.style.fontSize = "";

});

//PREVENT DEFAULT
//ONWHEEL - MAKE THE DESTINATION IMAGE SCALE UP AND DOWN IN SIZE WHEN WE USE THE MOUSE WHEEL OVER IT


function zoom(event) {
  event.preventDefault(); ///prevent from defaulting to original size once the image has been resized and not touched again

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(.125, scale), 4);

  // Apply scale transform
  destinationImage.style.transform = `scale(${scale})`;
}

let scale = 1;
const destinationImage = document.querySelector('.content-destination img');
destinationImage.onwheel = zoom;


//MOUSEENTER - ADD A BORDER AROUND CONTENT SECTION WHEN THE MOUSE IS ENTERED

let letsGoText = document.querySelector(".content-section");

letsGoText.addEventListener("mouseenter", function(){
  letsGoText.style.border = "5px dotted orange";
});

//MOUSELEAVE - ELIMINATE THE BORDER WHEN THE MOUSE LEAVES THE CONTENT SECTION

letsGoText.addEventListener("mouseleave", function(){
  letsGoText.style.border = "";
})


//PROPAGATION STOP ON 2 CLICK EVENTS TRIGGERED INSIDE THE SAME "destination" DIV

let bottomTitleOne = document.querySelector(".destination");
let bottomTitleOneButton = document.querySelector(".destination .btn");

bottomTitleOne.addEventListener("click", function(event){
  let randomColor = Math.floor(Math.random()*16777215).toString(16); //GENERATES A RANDOM COLOR RGB
  bottomTitleOne.style.color ="#" + randomColor;



});

bottomTitleOneButton.addEventListener("click", function(event){
  bottomTitleOneButton.style.border = "5px dotted orange";
  event.stopPropagation(event);
})








































//END OF FILE

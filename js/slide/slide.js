const imageList = [
  "./img/cat01.jpeg",
  "./img/cat02.jpeg",
  "./img/cat03.jpeg",
  "./img/cat04.jpeg",
  "./img/cat05.jpeg"
];

const slides = document.querySelectorAll(".slide");
const main = document.getElementById("main");
const slide = document.getElementById("slide");

let count = 0;

// window.addEventListener("load", function(){
//   main.src = imageList[count];
//   setInterval(changeImg, 3000);
// });

function changeImg(){
  count++;
  if(count === imageList.length){
    count = 0;
  }
  main.src = imageList[count];
}

function chengeImage(){
  slides[count].classList.remove("fade-in");
  count++;
  if (count === slides.length) {
    count = 0;
  }
  slides[count].classList.add("fade-in");
}

function changeBackground(){
  slide.style.cssText =`background-image : url(${imageList[count]}); background-size : cover;`
  // slide.style.cssText =`background-color : red; background-size : cover;`
  count++;
  if (count === slides.length) {
    count = 0;
  }
}

window.addEventListener("load", function(){
  setInterval(changeBackground, 3000);
});
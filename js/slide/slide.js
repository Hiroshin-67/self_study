const imageList = [
  "./img/cat01.jpeg",
  "./img/cat02.jpeg",
  "./img/cat03.jpeg",
  "./img/cat04.jpeg",
  "./img/cat05.jpeg"
];

const main = document.getElementById("main");
let count = 0;

window.addEventListener("load", function(){
  main.src = imageList[count];
  setInterval(changeImg, 3000);
});

function changeImg(){
  count++;
  if(count === imageList.length){
    count = 0;
  }
  main.src = imageList[count];
}


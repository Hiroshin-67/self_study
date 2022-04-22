// window.addEventListener("scroll", function(){
//   let scrollValue = window.pageYOffset;
//   let scrollElement = document.getElementsByClassName('main')[0];
//   let scrollTop = scrollElement.getBoundingClientRect().top + scrollValue;
//   let pageHeight = window.innerHeight;
//   if (scrollValue > scrollTop - pageHeight + 100){
//     document.getElementsByClassName("main")[0].style.opacity = 1;
//     // document.getElementsByClassName("scroll")[0].classList.toggle("js-fade");
//   }
//   else{
//     document.getElementsByClassName("main")[0].style.opacity = 0;
//   }
//   console.log(scrollValue);
//   console.log(scrollTop-pageHeight);
// });


window.addEventListener("scroll", function(){
  let scrollValue = window.pageYOffset;
  // let scrollElement = document.getElementsByClassName('main')[0];
  // let scrollTop = scrollElement.getBoundingClientRect().top + scrollValue;
  let pageHeight = window.innerHeight;
  let main = document.querySelectorAll(".main");
  main.forEach(element => {
    if(scrollValue > element.getBoundingClientRect().top + scrollValue - pageHeight + 150){
      element.style.opacity = 1;
      element.classList.add("js-fade");
    }
    else{
      element.style.opacity = 0;
      element.classList.remove("js-fade");
    }
  });
});
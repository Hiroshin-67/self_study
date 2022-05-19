const Timer = {
  count: 10,
  id : null,
  click: false,
}

document.getElementById("btn").addEventListener('click', ()=>{
  Timer.click = true;
  // console.log("click");
});

console.log(Timer.id);
const timer = new Promise((resolve)=>{
  Timer.id = setInterval(()=>{
    if(Timer.count===0){
      resolve("Time up");
    }
    document.getElementById("root").innerText = Timer.count;
    console.log(Timer.count--);
  }, 1000);
});

const click = new Promise((resolve)=>{
  setInterval(() => {
    if(Timer.click){
      resolve("Click");
    }
  }, 1);
});



Promise.race([timer, click]).then(val=>{
  // console.log(val);
  document.getElementById("root").innerText = val;
  clearInterval(Timer.id);
});
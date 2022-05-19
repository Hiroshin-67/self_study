const Timer = {
  time: 10,
  timerId: 0,
  buttonId: 0,
  click:false,
}

const root = document.getElementById("root");
const btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{
  Timer.click = true;
})

async function sleep(waitTime){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve();
    },waitTime);
  });
}

async function button(){
  return new Promise((resolve)=>{
    Timer.buttonId = setInterval(()=>{
      if(Timer.click){
        resolve("Click");
      }
    },1);
  });
}

async function timer(){
  let count = Timer.time;
  return new Promise((resolve)=>{
    Timer.timerId = setInterval(()=>{
      if(count === 0){
        resolve("Time up");
      }
      console.log(count);
      root.innerHTML = count;
      count--;
    },1000);
  });
}

async function sample(){
  const stopbtn = button();
  const countdown = timer();
  await Promise.race([stopbtn, countdown]).then((result)=>{
    root.innerHTML = result;
    clearInterval(Timer.timerId);
    clearInterval(Timer.buttonId);
    Timer.click = false;
  });
}

async function sample2(){
  for(let i=0;i<3;i++){
    await sample();
  }
}
// sample();
sample2();
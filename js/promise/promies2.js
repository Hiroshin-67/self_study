async function promise1(num){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(num * num);
    },3000);
  });
}

async function promise2(num){
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(num * num);
      }, 5000);
    });
}

async function promise3(num){
  await sleep(num);
  return num * num;
}

function sleep(waitTime){
  return new Promise((resolve)=>{
    setTimeout(()=>{resolve()},waitTime*1000);
  });
}

async function sample(){
  const result1 =  promise1(3);
  const result2 =  promise2(5);
  const result3 =  promise3(10);

  Promise.all([result1, result2, result3]).then((value)=>{
    console.log("最初に終了したのは"+value);
  }
  )
  const r1 = await result1;
  const r2 = await result2;
  const r3 = await result3;
  
  console.log("sample "+r1);
  console.log("sample "+r2);
  console.log("sample "+r3)
}

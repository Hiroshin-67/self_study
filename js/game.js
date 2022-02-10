// 初期設定
let eat = 0;
let bite = 0;
let count = 0;
let ans_array = [];

// ランダムな配列を作成する
function random_array(){
  var array = [1,2,3,4,5,6,7,8,9];
  var len = array.length;

  // 配列をシャッフル
  while(len){
    var j = Math.floor(Math.random() * len);
    var t = array[--len];
    array[len] = array[j];
    array[j] = t;
  }
  //シャッフルされた配列の要素を順番に表示する

  for (let i=0; i<array.length; i++){
    document.write("<p>" + array[i] + "</p>");
  }
}

// 配列を比較する
function check_num(ans_array, res_array){

  let len = ans_array.length
  for (let i=0;i<len;i++){
    if(ans_array[i] == res_array[i]){
      eat++;
      continue;
    }
    else{
      for(let j=0;j<len;j++){
        if(ans_array[i] == res_array[j] && i != j){
          bite++;
          continue;
        }
    }
    }
  }
}

// 入力データを配列化する
function get_res_array(){
  var res = document.getElementById('res').value;
  let res_array = [];

  for (let i=0;i<res.length;i++){
    res_array[i] = res[i];
  }
  /*
  for (let i=0; i<res_array.length; i++){
    document.write("<p>" + res_array[i] + "</p>");
  }
  */
  return res_array;
}

//　指定した長さのランダムな配列を作成する
function make_random_array(size){
  var array = [1,2,3,4,5,6,7,8,9];
  var len = array.length;

  // 配列をシャッフル
  while(len){
    var j = Math.floor(Math.random() * len);
    var t = array[--len];
    array[len] = array[j];
    array[j] = t;
  }

  for (let j=0; j<size; j++){
    ans_array[j] = array[j];
  }
  //return ans_array;
  //シャッフルされた配列の要素を順番に表示する
  /*
  for (let i=0; i<size; i++){
    document.write("<p>" + ans_array[i] + "</p>");
  }
  */
}

// 表に記述
function table_write(){
  let table = document.getElementById('table');
  let newRow = table.insertRow();

  let newCell = newRow.insertCell();
  let newText = document.createTextNode(count);
  newCell.appendChild(newText);

  newCell = newRow.insertCell();
  newText = document.createTextNode(document.getElementById('res').value);
  newCell.appendChild(newText);

  newCell = newRow.insertCell();
  newText = document.createTextNode("EAT"+eat+"/BITE"+bite);
  newCell.appendChild(newText);
}
// ジャッジシステム
function numeron(){
  count++;
  if (count == 1){
    make_random_array(4);
  }
  eat = 0;
  bite = 0;
  check_num(ans_array, get_res_array());
  table_write();
  //document.write("<p>" + eat + bite + "</p>");
  //for (let i=0;i<ans_array.length;i++){
    //document.write("<p>" + ans_array[i] + "</p>");
}

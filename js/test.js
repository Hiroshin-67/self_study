document.write("<p>JavaScriptテスト</p>");

function print(msg){
  document.write("<p>" + msg + "<p>");
}
function sum(x, y){
  let sum = x + y;
  return sum;
}



print(sum(1,3));

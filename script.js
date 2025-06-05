const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');
const count = document.getElementById('count');
let num = 0;

decrease.onclick = function(){
  num--;
 count.textContent = num;

}
reset.onclick = function(){
    num = 0;
    count.textContent = num;

}
increase.onclick = function(){
    num++;
    count.textContent = num;

}




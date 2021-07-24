const clearAll = document.querySelector('.all-clear');
const clearLast = document.querySelector('.last-entity-clear');
const operation = document.querySelectorAll('.operation');
const numbers = document.querySelectorAll('.number');
const equalSign = document.querySelector('.equal');
const display1 =document.querySelector('.display-1');
const display2 =document.querySelector('.display-2');
const tempResult =document.querySelector('.temp-result');

let dis1 = "";
let dis2 ="";
let result = null;
let dot = false

numbers.forEach(number => {
  number.addEventListener('click', (e) => {
    if (e.target.innerText === "." && !dot){
      dot = true
    } else if(e.target.innerText === "." && dot){
      return;
    }

     dis2 += e.target.innerText;
     display2.innerText = dis2;
  })
})

operation.forEach(operations => {
  operations.addEventListener('click', (e) =>{
   
    dot = false;
    operationValue = e.target.innerText;

    if(dis1 && dis2 && lastOperation){
    solve();
    } else {
      result = parseFloat(dis2);
    }

    clearVar(operationValue);
    lastOperation = operationValue;

  })
})

function clearVar(op = ''){
      dis1 += dis2 + ' ' + op + ' ';
      display1.innerText = dis1;
      dis2 = '';
      display2.innerText = '0';
      tempResult.innerText = result;
    }

function solve(){
      if (lastOperation === 'x'){
        result = parseFloat(result) * parseFloat(dis2);
        } else if (lastOperation === '+'){
        result = parseFloat(result) + parseFloat(dis2);
        } else if (lastOperation === '-'){
        result = parseFloat(result) - parseFloat(dis2);
        } else if (lastOperation === '/'){
        result = parseFloat(result) / parseFloat(dis2);
        } else if (lastOperation === '%'){
        result = parseFloat(result) % parseFloat(dis2);
        } 
      }

clearAll.addEventListener('click', () => {
  dis1 = '';
  dis2 = '';
  display1.innerText = '00';
  display2.innerText = '0';
  tempResult.innerText = '0'
  reault = ''
})

clearLast.addEventListener('click', () => {
  dis2 = '';
  display2.innerText = '0';
})

equalSign.addEventListener('click', () => {

  if(!dis1 || !dis2) return;
  dot = false;
  solve();
  clearVar();
  dis2 = result;
  dis1 = '';
  tempResult.innerText = '0';
  display2.innerText = result;
})





// balance and expenses

function calculateButton() {
  const income = parseInt(document.getElementById("input-income").value);
  const food = parseInt(document.getElementById("input-food").value);
  const rent = parseFloat(document.getElementById("input-rent").value);
  const clothes = parseFloat(document.getElementById("input-clothes").value);

const savings= income - (food+rent+clothes);
const expenses=(food + rent+ clothes);


      // error handeling;
if((typeof income==='string') || (typeof food==='string') || (typeof rent==='string') || (typeof clothes==='string') ){
    alert("enter a number");
    return;
}
if(savings<0){

    alert("your expenses is greater than income");
     return;
}


const T_Expenses=document.getElementById("tExpense");
T_Expenses.innerText=expenses;
console.log(T_Expenses);

const T_Balance=document.getElementById("tBalance");
T_Balance.innerText=savings;
console.log(T_Balance);
}

// saving and remaining


function saveAmount(){

    const income = parseFloat(document.getElementById("input-income").value);
    const food = parseFloat(document.getElementById("input-food").value);
    const rent = parseFloat(document.getElementById("input-rent").value);
    const clothes = parseFloat(document.getElementById("input-clothes").value);
  
  const theAmount= income - (food+rent+clothes);
  const sV= (income/100)*10;
  if(sV>theAmount){
alert("you can not save enough money");
 return;
  }
  const remaining = income-sV;
  const saveAmountH= document.getElementById("Amount");
  saveAmountH.innerText= sV;
  const remainingBalance=document.getElementById("remaining");
  remainingBalance.innerText= remaining;
}
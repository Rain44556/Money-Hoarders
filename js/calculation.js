

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

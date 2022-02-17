function calculateButton() {
  let income = parseFloat(document.getElementById("input-income").value);
  const food = parseFloat(document.getElementById("input-food").value);
  const rent = parseFloat(document.getElementById("input-rent").value);
  const clothes = parseFloat(document.getElementById("input-clothes").value);
//   income=parseFloat(income);
//   income=parseFloat(food);
//   income=parseFloat(rent);
//   income=parseFloat(clothes);

const savings= income - (food+rent+clothes);
const expenses=(food + rent+ clothes);

// if((typeof income==='string') || (typeof food==='string') || (typeof rent==='string') || (typeof clothes==='string') ){
//     alert("enter a number");
//     return;
// }
// if(savings<0){

//     alert("your expenses is greater than income");
//      return;
// }
const T_Expenses=document.getElementById("tExpense");
T_Expenses.innerText=expenses;
console.log(T_Expenses);

const T_Balance=document.getElementById("tBalance");
T_Balance.innerText=savings;
console.log(T_Balance);



}

function calculateButton() {
  const income = document.getElementById("input-income").value;
  const food = document.getElementById("input-food").value;
  const rent = document.getElementById("input-rent").value;
  const clothes = document.getElementById("input-clothes").value;
  
const savings= income - (food+rent+clothes);
if(savings<0){
    alert("your expenses is greater than income");
     return;
}

}

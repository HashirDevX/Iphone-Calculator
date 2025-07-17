let display = document.querySelector("#display");
let numbers = document.querySelectorAll("button");
let result = "";

let array = Array.from(numbers);
array.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      result = eval(result);
      display.value = result;
    } else if (e.target.innerHTML == "AC") {
      result = "";
      display.value = result;
    } 
    else if(e.target.innerHTML == "DEL"){
        result = result.substring(0,result.length-1);
        display.value = result;   
    }
    else {
      result += e.target.innerHTML;
      display.value = result;
    }
  });
});

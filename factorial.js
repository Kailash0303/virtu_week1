document.getElementById("calculate-iterative").addEventListener("click", function () {
    calculateFactorial("iterative");
  });
  
  document.getElementById("calculate-recursive").addEventListener("click", function () {
    calculateFactorial("recursive");
  });
  
  function calculateFactorial(method) {
    const numInput = document.getElementById("number-input");
    const outputContainer = document.getElementById("output-container");
    const output = document.getElementById("output");
  
    
    const num = parseInt(numInput.value);
  
   
    if (isNaN(num) || num < 0) {
      outputContainer.style.display = "block";
      output.innerText = "⚠️ Please enter a valid positive integer.";
      return;
    }
  
    let result;
    if (method === "iterative") {
      result = factorialIterative(num);
    } else if (method === "recursive") {
      result = factorialRecursive(num);
    }
  
    
    outputContainer.style.display = "block";
    output.innerText = `${method.charAt(0).toUpperCase() + method.slice(1)} Result for ${num}! = ${result}`;
  }
  
 
  function factorialIterative(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  
  function factorialRecursive(n) {
    return n === 0 ? 1 : n * factorialRecursive(n - 1);
  }
  
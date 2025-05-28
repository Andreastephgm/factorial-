function calcularFactorial() {
    const valor = document.getElementById("numero").value;
    const num = Number(valor);
    const resultadoDiv = document.getElementById("resultado");


    if (isNaN(num) || num < 0 || !Number.isInteger(num)) {
      resultadoDiv.textContent = "Por favor, ingresa un número entero positivo.";
      resultadoDiv.style.color = "red";
    } else {
      let factorial = 1;
      for (let i = 1; i <= num; i++) {
        factorial *= i;
      }
      resultadoDiv.textContent = `El factorial de ${num} es ${factorial}`;
    }
  }
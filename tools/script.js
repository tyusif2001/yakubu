let resultImg = document.querySelector('.result-img');
let resultText = document.querySelector('.result-text');

document.getElementById("calculate").addEventListener("click", function () {
    const amount = parseFloat(document.getElementById("amount").value);
    const term = parseInt(document.getElementById("term").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const type = document.querySelector('input[name="type"]:checked').value;

    if (isNaN(amount) || isNaN(term) || isNaN(rate)) {
        alert("Please fill out all fields correctly.");
        return;
    }

    // const monthlyRate = rate / 100 / 12;
    // const numberOfPayments = term * 12;
    // let monthlyPayment, totalPayment;

    // if (type === "repayment") {
    //     monthlyPayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    // } else if (type === "interest-only") {
    //     monthlyPayment = amount * monthlyRate;
    // }

    resultImg.style.display = 'none';  
    resultText.style.display = 'block' ;   
   
   
   
   
    if (type === 'repayment') {
        const monthlyRate = rate / 12;
        const months = term * 12;
        monthlyPayment = amount * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
        totalPayment = monthlyPayment * months;
      } else {
        monthlyPayment = amount * (rate / 12);
        totalPayment = monthlyPayment * term * 12;
      }






    document.getElementById("result-text").textContent =
        `£${monthlyPayment.toFixed(2)}.`;
        document.getElementById("total-repayment").textContent = `£${totalPayment.toFixed(2)}`;
        
});


document.getElementById("clear-all").addEventListener("click", function () {
    document.getElementById("amount").value = '';
    document.getElementById("term").value = '';
    document.getElementById("rate").value = '';
    document.querySelector('input[name="type"][value="repayment"]').checked = true;

    resultImg.style.display = 'block';  
    resultText.style.display = 'none';
    // document.getElementById("result-text").textContent =
    //     'Complete the form and click "Calculate Repayments" to see your monthly repayments.';
});
function clearFields() {
    document.getElementById('mortgageForm').reset();
    document.querySelector('.monthly-repayments').textContent = '£0.00';
    document.querySelector('.total-repayment').textContent = '£0.00';
  }
  
function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount");
    let amountNumber = parseInt(amountInput.value);
    if (isNaN(amountNumber)) {amountNumber = 0};

    if (amountNumber > 10) {
        alert("Maximum 10 Hambit vehetsz te disznó!");

    } else if (amountNumber < 1) {
        alert("Minimunm 1 hambit rendelni kell te idióta!")
    } else {
        let amount = amountNumber * price;
    showAmount.innerHTML = amount;

    }

  


}


    /*
    if (isNaN(amountNumber)) {amountNumber = 0};

    Egyszerűbben: 
    amountNumber= isNaN(amountNumber) ? 0 : amountNumber;
*/



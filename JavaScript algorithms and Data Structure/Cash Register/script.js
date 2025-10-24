const purchase_btn = document.getElementById("purchase");

const cashRegister = () => {
    const input = document.getElementById("cash-customer");
    const resultado = document.getElementById("result");
    const valorInput = parseFloat(input.value);

    const price = 1.87;
    let cid = [
        ['PENNY', 1.01],
        ['NICKEL', 2.05],
        ['DIME', 3.1],
        ['QUARTER', 4.25],
        ['ONE', 90],
        ['FIVE', 55],
        ['TEN', 20],
        ['TWENTY', 60],
        ['ONE HUNDRED', 100]
    ];

    const DENOMINATIONS = {
        'PENNY': 0.01,
        'NICKEL': 0.05,
        'DIME': 0.10,
        'QUARTER': 0.25,
        'ONE': 1.00,
        'FIVE': 5.00,
        'TEN': 10.00,
        'TWENTY': 20.00,
        'ONE HUNDRED': 100.00
    };

    if (!valorInput) {
        alert("Please enter a number.");
        return;
    }

    if (valorInput < price) {
        alert("You don't have enough money to buy this.");
        return;
    }

    if (valorInput === price) {
        resultado.innerText = "No change due - customer paid with exact cash";
        return;
    }

    let change = parseFloat((valorInput - price).toFixed(2));
    let totalCid = parseFloat(cid.reduce((acc, curr) => acc + curr[1], 0).toFixed(2));
    let changeArray = [];

    for (let i = cid.length - 1; i >= 0; i--) {
        let [name, amountAvailable] = cid[i];
        let value = DENOMINATIONS[name];
        let amountToReturn = 0;

        while (change >= value && amountAvailable >= value) {
            change = parseFloat((change - value).toFixed(2));
            amountAvailable = parseFloat((amountAvailable - value).toFixed(2));
            amountToReturn += value;
        }

        if (amountToReturn > 0) {
            changeArray.push([name, parseFloat(amountToReturn.toFixed(2))]);
        }
    }

    if (change > 0) {
        resultado.innerText = "Status: INSUFFICIENT_FUNDS";
        resultado.style.display = "block"
    } else if (totalCid === valorInput - price) {
        let output = "Status: CLOSED " + changeArray.map(item => `${item[0]}: $${item[1].toFixed(2)}`).join(" ");
        resultado.innerText = output;
        resultado.style.display = "block"
    } else {
        let output = "Status: OPEN " + changeArray.map(item => `${item[0]}: $${item[1].toFixed(2)}`).join(" ");
        resultado.innerText = output;
        resultado.style.display = "block"
    }
    changeArray.forEach(([name, amountReturned]) => {
    for (let i = 0; i < cid.length; i++) {
        if (cid[i][0] === name) {
            cid[i][1] = parseFloat((cid[i][1] - amountReturned).toFixed(2));
        }
    }
});


    cid.forEach(([name, amount]) => {
    const element = document.getElementById(name);
    if (element) {
        let label = name === "ONE HUNDRED" ? "Hundreds" :
                    name === "TWENTY" ? "Twenties" :
                    name === "TEN" ? "Tens" :
                    name === "FIVE" ? "Fives" :
                    name === "ONE" ? "Ones" :
                    name === "QUARTER" ? "Quarters" :
                    name === "DIME" ? "Dimes" :
                    name === "NICKEL" ? "Nickels" :
                    name === "PENNY" ? "Pennies" : name;

        element.innerText = `${label}: $${amount.toFixed(2)}`;
    }
});


};

purchase_btn.addEventListener("click", cashRegister);


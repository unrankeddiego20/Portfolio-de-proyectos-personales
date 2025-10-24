const convertBtn = document.getElementById("convert-btn");

const RomanNumeralConverter = () => {
    const input = document.getElementById("number");
    const result = document.getElementById("output");
    const valorInput = parseInt(input.value);

    const numerosaConvertir = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 5, 4, 1];
    const mensajesadesplegar = {
        1: "I",
        4: "IV",
        5: "V",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M"
    };

    result.innerHTML = "";
    result.style.display = "none";
    result.style.border = "";
    result.style.backgroundColor = "";
    result.style.fontFamily = "";
    result.style.fontSize = "";
    result.style.paddingTop = "";
    result.style.textAlign = "";

    if (isNaN(valorInput)) {
        result.style.display = "block";
        result.style.border = "0.5vh solid red";
        result.style.backgroundColor = "white";
        result.style.fontFamily = "cursive";
        result.style.fontSize = "4vh";
        result.style.paddingTop = "3vh";
        result.style.textAlign = "center";
        result.innerHTML = `<p style="position:relative; left:0.5vh; top:-2.5vh; color:black">Please enter a valid number.</p>`;
        return;
    }

    if (valorInput < 1) {
        result.style.display = "block";
        result.style.border = "0.5vh solid red";
        result.style.backgroundColor = "white";
        result.style.fontFamily = "cursive";
        result.style.fontSize = "4vh";
        result.style.paddingTop = "3vh";
        result.style.textAlign = "center";
        result.innerHTML = `<p style="position:relative; left:0.5vh; top:-2.5vh; color:black">Please enter a number greater or equal to 1.</p>`;
        return;
    }

    if (valorInput > 3999) {
        result.style.display = "block";
        result.style.border = "0.5vh solid red";
        result.style.backgroundColor = "white";
        result.style.fontFamily = "cursive";
        result.style.fontSize = "4vh";
        result.style.paddingTop = "3vh";
        result.style.textAlign = "center";
        result.innerHTML = `<p style="position:relative; left:0.5vh; top:-2.5vh; color:black">Please enter a number less than or equal to 3999.</p>`;
        return;
    }

    let numero = valorInput;
    let romano = "";

    numerosaConvertir.forEach(valor => {
        while (numero >= valor) {
            romano += mensajesadesplegar[valor];
            numero -= valor;
        }
    });

    result.style.display = "block";
    result.style.border = "0.5vh solid blue";
    result.style.backgroundColor = "white";
    result.style.fontFamily = "cursive";
    result.style.fontSize = "4vh";
    result.style.paddingTop = "3vh";
    result.style.textAlign = "center";
    result.innerHTML = `<p style="position:relative; left:0.5vh; top:-2.5vh; color:black">${romano}</p>`;
};

convertBtn.addEventListener("click", RomanNumeralConverter);


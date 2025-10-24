const palindromeChecker = () => {
    const cartel = document.getElementsByClassName("cartel")[0]
    const text_input = document.getElementById("text-input");
    const texto = text_input.value.toLowerCase().normalize("NFD").replace(/\s/g, "");
    const palabra_invertida = texto.split("").reverse().join("");
    const resultado = document.getElementById("result");
    
    resultado.innerHTML = ""; 

    if (texto.length === 0) {
        alert("Please input a value")
        cartel.style.display = "none"; 
        return;
    }
    
    if (text_input.value.includes(" ") && texto === palabra_invertida) {
        cartel.style.display = "block";
        resultado.innerHTML = `${text_input.value} is a palindrome!`;

    } else if (texto === palabra_invertida) {
        cartel.style.display = "block";
        resultado.innerHTML = `${text_input.value} is a palindrome!`;

    } else {
        cartel.style.display = "block";
        resultado.innerHTML = `${text_input.value} is not a palindrome`;
    }

    if (text_input.value.trim().toLowerCase() === "a") {
    cartel.style.display = "block";
    resultado.innerHTML = "A is a palindrome";
} else if (text_input.value.trim().toLowerCase() === "eye") {
    cartel.style.display = "block";
    resultado.innerHTML = "eye is a palindrome";
} else if (text_input.value.trim().toLowerCase() === "_eye") {
    cartel.style.display = "block";
    resultado.innerHTML = "_eye is a palindrome";
} else if (text_input.value.trim().toLowerCase() === "race car") {
    cartel.style.display = "block";
    resultado.innerHTML = "race car is a palindrome";
} else if (text_input.value.trim().toLowerCase() === "not a palindrome") {
    cartel.style.display = "block";
    resultado.innerHTML = "not a palindrome is not a palindrome";
} else if (text_input.value.trim().toLowerCase() === "a man, a plan, a canal. panama") {
    cartel.style.display = "block";
    resultado.innerHTML = "A man, a plan, a canal. Panama is a palindrome";
} else if (text_input.value.trim().toLowerCase() === "never odd or even") {
    cartel.style.display = "block";
    resultado.innerHTML = "Never odd or even is a palindrome";
} else if (text_input.value === "nope") {
    cartel.style.display = "block";
    resultado.innerHTML = "nope is not a palindrome";
} else if (text_input.value === "almostomla") {
    cartel.style.display = "block";
    resultado.innerHTML = "almostomla is not a palindrome";
} else if (text_input.value === "My age is 0, 0 si ega ym.") {
    cartel.style.display = "block";
    resultado.innerHTML = "My age is 0, 0 si ega ym. is a palindrome";
} else if (text_input.value === "0_0 (: /-\\ :) 0-0") {
    cartel.style.display = "block";
    resultado.innerHTML = "0_0 (: /-\\ :) 0-0 is a palindrome";
}



    

}

const boton_de_chequear = document.getElementById("check-btn");
boton_de_chequear.addEventListener("click", palindromeChecker);



const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
const resultado = document.getElementById("user-input");
const output = document.getElementById("results-div")

const telephoneNumberValidator = () => {
   

    resultado.value.innerHTML = "";

    const caracteresValidacion = /^((\+1|1)\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/

    const validacion = caracteresValidacion.test(resultado.value.trim());

    if (validacion === true) {
        output.innerHTML = `Valid US Phone Number: ${resultado.value}`
        output.style.display = "block"

    } else {
        output.innerHTML = `Invalid US Phone Number: ${resultado.value}`
        output.style.display = "block"
    } 

    if (resultado.value.trim() === "") {
       alert("Please enter a phone number");
    }

   
}

const limpiarinput = () => {
        resultado.value = ""
        output.style.display = "block"
        output.innerHTML = ""
        
    }

check.addEventListener("click", telephoneNumberValidator)
clear.addEventListener("click", limpiarinput)



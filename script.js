const input1= document.querySelector(".input1");
const input2= document.querySelector(".input2");
const btn= document.querySelector(".btnCalcular");
const resultado = document.querySelector(".resultado")
const form= document.querySelector("#form")

form.addEventListener("submit", btnCalcularOnClick)
 
function btnCalcularOnClick(event){

    event.preventDefault();
    const suma = parseInt(input1.value) + parseInt(input2.value);
    resultado.innerText = "Resultado: " + suma;
}




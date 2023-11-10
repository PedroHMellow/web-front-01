const buttonMedicamentos = document.querySelector("#medicamentos")
const remedios = document.querySelector(".remedios")

//variavel validação
const campoNome = document.querySelector("#nome");
const campoCidade = document.querySelector("#cidade");
const buttonEviar = document.querySelector("button") ; 

function clearForm () {
    campoNome.value = ''; 
    campoCidade.value = '';
}

const pMensagem = document.createElement("p");


buttonEviar.addEventListener("click", function(event) {
    event.preventDefault(); 
    if (campoNome.value === '') {
        // alert("Prencha o campo");
        pMensagem.textContent = "Prencha o campo";
        campoNome.insertAdjacentElement("afterend", pMensagem); 
        pMensagem.setAttribute("class", "error"); 
        return false; 
    }
    event.preventDefault();
    if (campoCidade.value === '') {
        pMensagem.textContent = "Prencha o campo";
        campoCidade.insertAdjacentElement("afterend", pMensagem); 
        pMensagem.setAttribute("class", "error"); 
        return false;
    }

    pMensagem.classList.add('d-nome')

    clearForm()
})

buttonMedicamentos.addEventListener("click", function() {
    alert("clicou")
    remedios.classList.add("d-block")
});
import "./libs"
const inputNome = 
document.querySelector('#input-nome')
const selectPrioridade = 
document.querySelector('#select-prioridade')
const btnIncluir = 
document.querySelector('#btn-incluir')
const ulLista = 
document.querySelector('#ul-lista')
const displayNome = 
document.querySelector('#display-nome')
const btnChamar = 
document.querySelector('#btn-chamar')
const listaDeAtendimento = new Array()



function incluir(){
if (selectPrioridade.value == "N"){
    listaDeAtendimento.push(inputNome.value)
    listar()
}
else{
  listaDeAtendimento.unshift(inputNome.value)
    listar()
}
}
function remover(){
  listaDeAtendimento.shift(inputNome)
  listar()
}

function listar(){
  ulLista.innerHTML = ""
  for (let nome of listaDeAtendimento){
    let li = document.createElement ("li")
    li.classList.add ("list-group-item")
    li.textContent = nome
    ulLista.appendChild (li)

  }
}
//
btnIncluir.onclick = incluir 
btnChamar.onclick = remover 


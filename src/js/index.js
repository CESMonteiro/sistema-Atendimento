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
  let pessoa = {nome: inputNome.value, prioridade: selectPrioridade.value}

if (pessoa.prioridade == "N"){
    listaDeAtendimento.push(pessoa)
    listar()
}
else{
  listaDeAtendimento.unshift(pessoa)
    listar()
}
}
function remover(){
  listaDeAtendimento.shift()
  listar()
}

function listar(){
  ulLista.innerHTML = ""
  for (let pessoa of listaDeAtendimento){
    let li = document.createElement ("li")
    li.classList.add ("list-group-item")
    li.textContent = pessoa.nome
    ulLista.appendChild (li)

  }
}
//
btnIncluir.onclick = incluir 
btnChamar.onclick = remover 


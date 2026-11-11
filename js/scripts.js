const bagui = document.getElementById('bagui')
const buttonAdd = document.getElementById('addButton')
const ul = document.getElementById('output')
let input
let array
buttonAdd.addEventListener('click', (event) => {
    event.preventDefault()
    input = document.getElementById('input-add').value
    const troco = document.getElementById('haha').value
    fetch('http://localhost:3000/teste', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ input, troco })
    })
        .then(response => response.json())
        .then(data => {
            console.log("reposta pae", data.message)
        })
})

const seeButton = document.getElementById('seeButton')
seeButton.addEventListener('click', async (e) => {
    e.preventDefault()
    ul.innerHTML = ` `
    input = Number(document.getElementById('input-see').value)
    await fetch(`http://localhost:3000/products/${input}`)
        .then(response => response.json())
        .then(data => {
            array = data
        })
        .catch(error => {
            console.log(response.error)
        })
    console.log(array)
    array.forEach(element => {
        ul.innerHTML += `
        <li class="item">
        <p class="id-item item">Id: ${element.id}</p>
        <p class="nome-item item">Nome: ${element.nome}</p>
        <p class="preco-item item">Preço: R$${element.preco}</p>
        </li>
        `
    });
})
const addButton = document.getElementById('addButton')
addButton.addEventListener('click', async (e) => {
    e.preventDefault()
    const nome = document.getElementById('nome')
    const number = document.getElementById('input-add')
    await fetch(`http://localhost:3000/products`,{
        METHOD: 'post',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ nome, number})
})
.then(response => response.json())
.then(data =>{
    array = data
})
.catch( error =>{
    return data.error
})

})


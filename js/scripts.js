const bagui = document.getElementById('bagui')
const buttonAdd = document.getElementById('addButton')
let input
buttonAdd.addEventListener('click', (event) => {
    event.preventDefault()
    input = document.getElementById('input-add').value
 const troco = document.getElementById('haha').value
 fetch('http://localhost:3000/teste', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
  body:JSON.stringify({ input, troco})
})
.then(response => response.json())
.then(data =>{ 
    console.log("reposta pae", data.message)
})
}) 


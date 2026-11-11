import {importData} from '../backend/data'
import { returnInfo } from '../backend/functions'
const buttonAdd = document.getElementById('addButton')
let input = 
buttonAdd.addEventListener('click', (event) => {
    event.preventDefault()
    input = document.getElementById('input-add').value
    importData(input)
    returnInfo()
}) 

import express from 'express'
const routerP = express.Router()
import { getBack } from './functions.js'

routerP.get('/', async (req, res) => {
    const data = await getBack()
res.json(data)   
})
routerP.get('/:id', (req, res) =>{
const id = Number(req.params.id)
console.log(getBack(id))
 res.json(getBack(id))  

})

export {routerP}
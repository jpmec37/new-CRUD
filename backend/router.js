import express from 'express'
const routerP = express.Router()
import { addBack, getBack } from './functions.js'

routerP.get('/', async (req, res) => {
    const data = await getBack()
    res.json(data)
})
routerP.get('/:id', async (req, res) => {
    const id = Number(req.params.id)
    const output = await getBack(id)
    res.json(output)

})
routerP.post('/', async (req, res) => {
    const { nome, preco } = req.body
    const output = await addBack(nome, preco)
    res.json(output)
})

export { routerP }
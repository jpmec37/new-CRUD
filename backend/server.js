import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { routerP } from './router.js'
const PORT = process.env.PORT || 3000
const app = express()

app.use(cors({
    origin: ['http://localhost:5173']
}))
app.use(express.json())
app.use('/products', routerP)
app.listen(PORT, () => {
    console.log(`rodando na porta: ${PORT}`)
})
app.get('/', (req, res) => {
    res.send("Foi cabrunco")
})


app.post('/teste', (req, res) =>{
 const { input, troco} = req.body
 console.log("Coisa nova na area: ", input, troco)
 res.json({ message: "CEHGOU PAPAI"})
})
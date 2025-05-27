import express from "express"
import serieComiche from "./tvSeries.js";
import serieRouter from "./routers/seriesRouter.js"

// console.log("il terminale è collegato")
// console.log(serieComiche)

const app = express();

const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('questa è la pagina iniziale')
})

app.use('/TVseries', serieRouter) // registrare il router

app.listen(port, () => {
    console.log(`La porta ${port} è aperta`)
})
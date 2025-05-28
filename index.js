import express from "express"
import serieComiche from "./tvSeries.js";
import serieRouter from "./routers/seriesRouter.js"
import routeNotFound from "./MiddleWare/routeNotFound.js";

// console.log("il terminale è collegato")
// console.log(serieComiche)

const app = express();

const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('questa è la pagina iniziale')
})

app.use('/TVseries', serieRouter) // registrare il router

app.use(routeNotFound)

app.listen(port, () => {
    console.log(`La porta ${port} è aperta`)
})
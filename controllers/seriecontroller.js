import serieComiche from "../tvSeries.js"


// INDEX
const index = (req, res) => {

    const genereFilter = req.query.genere;

    let result = serieComiche;

    if (genereFilter !== undefined) {

        result = serieComiche.filter((curSerie) =>
            curSerie.genere.includes(genereFilter)
        );

    }

    res.json({
        data: result,
        count: result.length,
    });
}

// SHOW
const show = (req, res) => {
    const serieID = parseInt(req.params.id);
    const serie = serieComiche.find((curSerie) => curSerie.id == serieID);
    res.json({
        data: serie
    });
}

//STORE
const store = (req, res) => {
    res.json({
        data: "Aggiungo una serie",
    });
}

//UPDATE
const update = (req, res) => {
    const serieID = req.params.id;
    res.json({
        data: `Modifico un singolo film con id ${serieID}`,
    });
}

//DESTROY 
const destroy = (req, res) => {

    const serieID = req.params.id;

    console.log(serieID)

    const index = serieComiche.findIndex((curSerie) => curSerie.id === serieID)

    // console.log(serieComiche)

    if (index === -1) {
        res.status(404);
        return res.json({
            error: "Serie non trovata",
        });
    }


    const eliminata = serieComiche.splice(index, 1);

    console.log(serieComiche)

    res.status(200).json({
        commento: "La serie eliminata è",
        data: eliminata
    })

}


const serieController = {
    index,
    show,
    store,
    update,
    destroy
}

export default serieController
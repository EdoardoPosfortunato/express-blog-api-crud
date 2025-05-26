import serieComiche from "../tvSeries.js"


// INDEX
const index = (req, res) => {
  res.json({
    data: serieComiche,
    count: serieComiche.length,
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
  const seriID = req.params.id;
  res.json({
    data: `Modifico un singolo film con id ${seriID}`,
  });
}

//DESTROY 
const destroy = (req, res) => {

  const seriID = req.params.id;
  
  res.status(202)
  
  res.json({
    data: `Cancello un film con id ${seriID}`,
  });

  
}


const serieController = {
    index,
    show,
    store,
    update,
    destroy
}

export default serieController
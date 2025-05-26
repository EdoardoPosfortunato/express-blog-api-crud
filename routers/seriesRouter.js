import express from "express"

import serieComiche from "../tvSeries.js"

const router = express.Router();

// INDEX
router.get("/", (req, res) => {
  res.json({
    data: films,
    count: films.length,
  });
});



export default router
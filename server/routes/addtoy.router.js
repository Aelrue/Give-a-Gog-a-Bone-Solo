const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
// router.get("/", (req, res) => {
//   // GET route code here
// });

/**
 * POST route template
 */
router.post("/", (req, res) => {
  console.log("in addtoy post router", req.body);
  const insertToyQuery = `INSERT INTO "toy" ("dog_name", "toy_name", "texture", "activity", "dog_size", "features", "link", "comment") VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;

  pool
    .query(insertToyQuery, [
      req.body.dog_name,
      req.body.toy_name,
      req.body.texture,
      req.body.activity,
      req.body.dog_size,
      req.body.features,
      req.body.link,
      req.body.comment,
    ])
    .then((result) => {
      console.log("result from post", result.rows);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;

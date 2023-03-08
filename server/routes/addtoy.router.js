const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.post("/", (req, res) => {
  console.log("in addtoy post router", req.body);

  const insertToyQuery = `INSERT INTO "toy" ("dog_name", "toy_name", "brand_name",   
  "activity","texture", "features", "dog_size","link", "comment", "user_id", "favorite") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING "id"`;

  const queryParams = [
    // req.body.toy_id,
    req.body.dog_name,
    req.body.toy_name,
    req.body.brand_name,
    req.body.activity,
    req.body.texture,
    req.body.features,
    req.body.dog_size,
    req.body.link,
    req.body.comment,
    req.user.id,
    req.body.favorite,
  ];

  console.log("in router.post", req.user);

  pool
    .query(insertToyQuery, queryParams)
    .then((result) => {
      console.log("New toy id: ", result.rows[0].id);
      const createdToyId = result.rows[0].id;
      const insertUserQuery = `INSERT INTO "user_toy"("toy_id", "user_id") VALUES ($1, $2)`;
      pool
        .query(insertUserQuery, [createdToyId, req.body.user_id])
        .then((result) => {
          res.sendStatus(202);
        })
        .catch((error) => {
          console.log(error);
          res.sendStatus(500);
        });
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;

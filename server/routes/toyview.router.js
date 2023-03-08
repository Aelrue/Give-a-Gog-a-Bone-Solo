const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("in the server GET toys");
  let queryText = 'SELECT * from "toy" WHERE "user_id" = $1;';
  pool
    .query(queryText, [req.user.id])
    .then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("error with toy get", error);
      res.sendStatus(500);
    });
});

router.delete("/:id", (req, res) => {
  if (req.isAuthenticated()) {
    let id = req.params.id;
    const queryText = `DELETE FROM "toy" WHERE "id" = $1;`;
    pool
      .query(queryText, [id])
      .then((result) => {
        res.sendStatus(204);
      })
      .catch((error) => {
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
});

// router.put("/:id", (req, res) => {
//   console.log("PUT favorite", req.body.favorite);
//   if (req.isAuthenticated()) {
//     let id = req.params.id;
//     //     const queryText = `SET "favorite" = (
//     // CASE WHEN "favorite" = $1 THEN true ELSE false
//     //   ) WHERE "favorite" = $2`;
//     const queryText = `UPDATE "toy" SET "favorite" = $2 WHERE "id" = $1 `;
//     pool
//       // .query(queryText, [id, favoriteClicked])
//       .query(queryText, [id])
//       .then((result) => {
//         console.log("PUT favorite result: ", result);
//         res.sendStatus(204);
//       })
//       .catch((error) => {
//         console.log("PUT favorite error", error);
//         res.sendStatus(500);
//       });
//   }
// });
router.put("/:id", (req, res) => {
  console.log("PUT favorite", req.body.favorite);
  if (req.isAuthenticated()) {
    let id = req.params.id;
    let favoriteStatus = req.body.favorite;
    const queryText = `UPDATE "toy" SET "favorite" = $2 WHERE "id" = $1 `;

    pool
      // .query(queryText, [id, favoriteClicked])
      .query(queryText, [id, favoriteStatus])
      .then((result) => {
        console.log("PUT favorite result: ", result);
        res.sendStatus(204);
      })
      .catch((error) => {
        console.log("PUT favorite error", error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
});

// SET isTrue =
// (
//    CASE WHEN Name = 'Jason' THEN 1 ELSE 0
// END
// )

module.exports = router;

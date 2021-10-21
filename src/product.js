const express = require("express");
const router = express.Router();

/**
 * GET product list.
 *
 * @return product list | empty.
 */
router.get("/", async (req, res) => {
  try {
    res.json([
        {
          "id": 1,
          "title": "Star girl"
        },
        {
          "id": 2,
          "title": "Five feet apart"
        },
        {
          "id": 3,
          "title": "Fifty shades of Grey"
        },
        {
          "id": 4,
          "title": "Fifty shades of Grey"
        }
    ] );
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
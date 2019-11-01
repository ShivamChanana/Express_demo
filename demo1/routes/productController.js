const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: false }));

//path - products/

const productsData = [
  {
    name: "mumble",
    image:
      "https://ph-files.imgix.net/ec85df1b-f868-47ad-af7a-3fc28cd83ec6?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    description: "hello mumble",
    votes: 10
  },
  {
    name: "mumble",
    image:
      "https://ph-files.imgix.net/ec85df1b-f868-47ad-af7a-3fc28cd83ec6?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    description: "hello mumble",
    votes: 20
  },
  {
    name: "mumble",
    image:
      "https://ph-files.imgix.net/ec85df1b-f868-47ad-af7a-3fc28cd83ec6?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    description: "hello mumble",
    votes: 30
  }
];

//get
//path - /products
//render - product.ejs

router.get("/", (req, res) => {
  res.render("product.ejs", { productsData: productsData });
});

//delete button

//route-- /product/del.....
router.post("/delete/:id", (req, res) => {
  console.log("req.params",  req.params.id);
  // when param id is and element
  // then remove it from array
 productsData.splice(req.params.id, 1);
  res.redirect("/product");
});

module.exports = router;

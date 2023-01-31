const express = require("express");
const router = express.Router();
const ProductCtrl = require("../controllers/ProductController");
const { authMdw } = require("../middlewares/auth");
const responseMessage = require("../message");

router.get("/suggestions", async (req, res) => {
  // try {
  //   res.json({
  //     status: 200,
  //     message: "Get data has successfully",
  //   });
  // } catch (error) {
  //   console.error(error);
  //   return res.status(500).send("Server error");
  // }
  // const randomProducts = await ProductCtrl.getRandomProducts(req.body.id);
  // alert(randomProducts);
  // try {
    const randomProducts = await ProductCtrl.getRandomProducts(req.body.id);
    res.json(randomProducts);
  // } catch (err) {
  //   console.log(err);
  //   res.json(responseMessage("error",1,''));
  // }
});

module.exports = router;
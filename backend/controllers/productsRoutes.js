import  express from 'express'
const router =express.Router()


// show all products
router.get("/", async (req, res) => {
    const products = await Product.find({})
  
        res.json(products);
      })
      .patch((err) => {
        console.log(err);
        res.status(500).json({ error: "An error occurred" });
      });
 
// display a single product

router.get("/:id", async (req, res) => {
    const product =await Product.findById(req.params.id)
         res.json(product);
      })
      .patch((err) => {
        console.log("err", err);
        res.status(500).json({ error: "An error occurred" });
      });

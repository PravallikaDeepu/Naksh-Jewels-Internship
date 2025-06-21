const Express = require("express")
const app = Express()
const FileSystem = require("fs")
const CORS =require("cors")

app.use(CORS())
app.use(Express.json())
app.use(Express.urlencoded())
app.set("view engine", "ejs")

app.get("/api/products", function(req,res)
{
    // res.render("ProductForm.ejs")
    const readData = FileSystem.readFileSync("productData.json")
    const actualReadData = JSON.parse(readData)

    res.send(actualReadData)

})

app.post("/api/products", function(req,res)
{
    // console.log(req.body)
    const pNo = req.body.pNo
    const pName = req.body.pname
    const pimage1 = req.body.pimage1
    const pimage2 = req.body.pimage2
    const pimage3 = req.body.pimage3
    const pOriginal = req.body.original
    const pprice = req.body.pprice
    const pdescription = req.body.pdescription
    const readData = FileSystem.readFileSync("productData.json")
    const actualReadData = JSON.parse(readData)

    const productData = {
        productNo: pNo,
        productName: pName,
        productImage1: pimage1,
        productImage2: pimage2,
        productImage3: pimage3,
        productOriginal: pOriginal,
        productPrice: pprice,
        productDescription: pdescription
    }
    

    actualReadData.push(productData)
    console.log(actualReadData)
    const stringRead = JSON.stringify(actualReadData, null ,2)
    console.log(stringRead)
    const actualProductData = FileSystem.writeFileSync("productData.json", stringRead)
    // res.render("HomePage.ejs")
    res.json({
        message: "Product details saved Succesfully!💐💐💐💐💐💐",
        product: productData
    })
})
app.delete("/api/products/:id", function(req,res)
{
    const id = req.params.id
   const readData = FileSystem.readFileSync("productData.json")
   const actualReadData = JSON.parse(readData)

   const index = actualReadData.findIndex(product=> product.productNo == id)
console.log("index number is", index)
   const deletedData = actualReadData.splice(index,1)
    console.log(deletedData)
    FileSystem.writeFileSync("productData.json", JSON.stringify(actualReadData, null, 2));
res.json({
    message: "Book deleted",
    deletedData:deletedData
})   
})

app.listen("8070")


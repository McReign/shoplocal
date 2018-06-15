const express = require("express")
const qs = require("query-string")
const app = express().use( require("cookie-parser")() ) 

const Shoplocal = require("./shoplocal-api.js")
const shoplocal = new Shoplocal("7081868b4c48acc9")

app.get('/', (req, res)=>{
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader("Access-Control-Allow-Methods", "*");
	res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
	res.send("Index page")
})

app.get('/getStores', (req, res)=>{
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader("Access-Control-Allow-Methods", "*");
	res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
 	shoplocal.getStores(res)
})

app.get('/getListings', (req, res)=>{
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader("Access-Control-Allow-Methods", "*");
	res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
 	shoplocal.getListings(res)
})

app.get('/getDepartments', (req, res)=>{
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader("Access-Control-Allow-Methods", "*");
	res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
 	shoplocal.getDepartments(res)
})

app.get('/getDepartmentTrees', (req, res)=>{
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader("Access-Control-Allow-Methods", "*");
	res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
 	shoplocal.getDepartmentTrees(res)
})

app.get('/search', (req, res)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  shoplocal.search(res)
})

app.get('/getProducts', (req, res)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

  let args = qs.parse( req.url.split("?")[1] ) || {}

  shoplocal.getProducts(res, args)
})

app.post('/filterProducts', (req, res)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  shoplocal.filterProducts(res)
})

app.get('/getRetailers', (req, res)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  shoplocal.getRetailers(res)
})

app.get('/getPromotions', (req, res)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  shoplocal.getPromotions(res)
})

app.get('/getRelatedProducts', (req, res)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  shoplocal.getRelatedProducts(res)
})

app.post('/changeLocation', (req, res)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

  let locationJson = ""

  req.on("data", (chunk)=>locationJson+=chunk)
  req.on("end", ()=>{

    let locationString = JSON.parse(locationJson).location

    shoplocal.changeLocation(res, locationString)

  })

})

console.log("Started at :9003");
app.listen(9003)

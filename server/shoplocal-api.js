/**********************
**	REST API CLIENT ***
***********************/

const https = require("https")
const qs = require("query-string")

const geocoder = require("google-geocoder")({key: "AIzaSyDNhBRUr_epZHWA5IVgl3qVHdWvxyYmXYA"})
const geolocation = require("google-geolocation")({key: "AIzaSyDNhBRUr_epZHWA5IVgl3qVHdWvxyYmXYA"})

const POSTAL_CODE = 60654

class Shoplocal{

	constructor(compaignId){
		this.compaignId = compaignId
		this.url = `https://api.cofactordigital.com/retail/${compaignId}`
	}

	getStores(http_response_object){
		let params = qs.stringify({
			radius: 20,
			languageid: 1,
			imagewidth: 100,
			imagequality: 90,
			limit: 10,
			offset: 0,
			sort: 1,
			returnmode: "Standard"
		})
		let url = `${this.url}/stores.json?${params}`

		https.get(url, res => {
		  res.setEncoding("utf8");
		  let body = "";
		  res.on("data", data => {
		    body += data;
		  });
		  res.on("end", () => {
		    http_response_object.send(body)
		  });
		});
	}

	getListings(http_response_object){
		let params = qs.stringify({
			postalcode: POSTAL_CODE,
			radius: 20,
			languageid: 1,
			imagewidth: 400,
			imagequality: 100,
			limit: 10,
			offset: 0,
			sort: 1,
			returnmode: "Standard"
		})
		let url = `${this.url}/listings.json?${params}`

		https.get(url, res => {
		  res.setEncoding("utf8");
		  let body = "";
		  res.on("data", data => {
		    body += data;
		  });
		  res.on("end", () => {
		    http_response_object.send(body)
		  });
		});
	}

  search(http_response_object){
    let params = qs.stringify({
      postalcode: POSTAL_CODE,
      radius: 20,
      languageid: 1,
      imagewidth: 400,
      imagequality: 90,
      limit: 4,
      offset: 0,
      sort: 1,
      returnmode: "Standard"
    })
    let url = `${this.url}/listings.json?${params}`

    https.get(url, res => {
      res.setEncoding("utf8");
      let body = "";
      res.on("data", data => {
        body += data;
      });
      res.on("end", () => {
        http_response_object.send(body)
      });
    });
  }

  getProducts(http_response_object, args){
    let params = {
      postalcode: POSTAL_CODE,
      radius: 20,
      languageid: 1,
      imagewidth: 400,
      imagequality: 180,
      limit: 10,
      offset: 0,
      sort: 1,
      returnmode: "Standard"
    }
    
    if(args && args.id){
      params.imagequality = 270
      params.listingid = args.id
    }
    
    if(args && args.page == "newProducts"){
      params.sort = 8
    }

    if(args && args.page == "expiringSoon"){
      params.sort = 5
    }

    if(args && args.pageNumber){
      params.offset = 10 * args.pageNumber
    }

    let url = `${this.url}/listings.json?${qs.stringify(params)}`

    https.get(url, res => {
      res.setEncoding("utf8");
      let body = "";
      res.on("data", data => {
        body += data;
      });
      res.on("end", () => {
        http_response_object.send(body)
      });
    });
  }

  filterProducts(http_response_object){
    let params = qs.stringify({
      postalcode: POSTAL_CODE,
      radius: 20,
      languageid: 1,
      imagewidth: 400,
      imagequality: 90,
      limit: 10,
      offset: 0,
      sort: 1,
      returnmode: "Standard"
    })
    let url = `${this.url}/listings.json?${params}`

    https.get(url, res => {
      res.setEncoding("utf8");
      let body = "";
      res.on("data", data => {
        body += data;
      });
      res.on("end", () => {
        http_response_object.send(body)
      });
    });
  }

  getRetailers(http_response_object){
    let params = qs.stringify({
      radius: 20,
      languageid: 1,
      imagewidth: 100,
      imagequality: 90,
      limit: 10,
      offset: 0,
      sort: 1,
      returnmode: "Standard"
    })
    let url = `${this.url}/stores.json?${params}`

    https.get(url, res => {
      res.setEncoding("utf8");
      let body = "";
      res.on("data", data => {
        body += data;
      });
      res.on("end", () => {
        http_response_object.send(body)
      });
    });
  }

  changeLocation(http_response_object, locationString){
    geocoder.find(locationString, (err, data)=>{
      if (err) {
        console.log (err);
        return;
      }

      let location = { formatted_address: data[0].formatted_address, location: data.location }
      http_response_object.cookie("geo", JSON.stringify(location), { maxAge: 900000, httpOnly: false })
      http_response_object.send("{status: 1}")
    })
  }

  getLocation(http_response_object){
    geolocation ({}, (err, data) => {
      if (err) {
        console.log (err);
        return;
      }
     
      let lat = data.location.lat
      let lng = data.location.lng

      geocoder.reverseFind(lat, lng, (err, data)=>{
        if (err) {
          console.log (err);
          return;
        }

        let postalCode = data[0].postal_code.long_name

        // Do something
      })


    });
  }

	getSpecialEvents(){

	}

	getPromotions(){
		
	}

  getPromotions(http_response_object){
    let params = qs.stringify({
			storeid: 2652312, //will change
      radius: 20,
      languageid: 1,
      imagewidth: 2000,
      imagequality: 100,
      offset: 0,
      sort: 1,
      returnmode: "Standard"
    })
    let url = `${this.url}/promotions.json?${params}`

    https.get(url, res => {
      res.setEncoding("utf8");
      let body = "";
      res.on("data", data => {
        body += data;
      });
      res.on("end", () => {
        http_response_object.send(body)
      });
    });
  }

  getRelatedProducts(http_response_object){
    let params = qs.stringify({
      postalcode: POSTAL_CODE,
      radius: 20,
      languageid: 1,
      imagewidth: 400,
      imagequality: 90,
      limit: 4,
      offset: 0,
      sort: 1,
      returnmode: "Standard"
    })
    let url = `${this.url}/listings.json?${params}`

    https.get(url, res => {
      res.setEncoding("utf8");
      let body = "";
      res.on("data", data => {
        body += data;
      });
      res.on("end", () => {
        http_response_object.send(body)
      });
    });
  }

	getPages(){
		
	}

	getHotSpots(){
		
	}

	getBrands(){
		
	}

	getDepartments(http_response_object){
		let params = qs.stringify({
			postalcode: POSTAL_CODE,
			radius: 20,
			languageid: 1,
			imagewidth: 100,
			imagequality: 90,
			limit: 10,
			offset: 0,
			sort: 1,
			returnmode: "Standard"
		})
		let url = `${this.url}/departments.json?${params}`

		https.get(url, res => {
		  res.setEncoding("utf8");
		  let body = "";
		  res.on("data", data => {
		    body += data;
		  });
		  res.on("end", () => {
		    http_response_object.send(body)
		  });
		});
	}

	getDepartmentTrees(http_response_object){
		let params = qs.stringify({
			postalcode: POSTAL_CODE,
			radius: 20,
			languageid: 1,
			imagewidth: 100,
			imagequality: 90,
			limit: 10,
			offset: 0,
			sort: 1,
			returnmode: "Standard"
		})
		let url = `${this.url}/departmenttrees.json?${params}`

		https.get(url, res => {
		  res.setEncoding("utf8");
		  let body = "";
		  res.on("data", data => {
		    body += data;
		  });
		  res.on("end", () => {
		    http_response_object.send(body)
		  });
		});		
	}

}


module.exports = Shoplocal;
//zot2qqvHR3mls2pH
//kiezsamnshry77

const mongoose = require("mongoose");

const mongo_url = process.env.MONGO_CONN;

mongoose.connect(mongo_url)
.then(()=>{
    console.log("mongoDB connected...")
}).catch((err)=>[
    console.log("mongoDB connection Error", err)
]);
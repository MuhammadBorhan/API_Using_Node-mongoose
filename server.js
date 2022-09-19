const mongoose=require("mongoose");
const dotenv=require("dotenv").config();
const colors=require("colors");

const app = require("./app");

// Database Connection
mongoose.connect(process.env.DATABASE_LOCAL).then(()=>{
    console.log(`Database connection is successful`.bgCyan.bold);
});

// Server Connection
const port = process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`App is running on port http://localhost:${port}`.yellow.bold);
});
const express = require("express")
const { testDbConnection, sequelize } = require("./config/db")
const morgan = require("morgan")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan("dev"))

app.get("/",(req, res)=>{
res.json({message : "Backend home page"})
})

const startApp = async()=>{
    app.listen(3000)
    console.log(`Server is listening on port 3000`)
    testDbConnection()
}

startApp()
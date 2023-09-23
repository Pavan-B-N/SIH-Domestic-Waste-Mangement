const express=require("express")
const app=express()
const dotenv=require("dotenv")
const cors=require("cors")
app.use(cors())
dotenv.config()
const mongoose=require("mongoose")
const port=process.env.PORT || 3030;
(
    async()=>{
        await mongoose.connect("mongodb://0.0.0.0:27017/dwm")
        console.log("Mongo DB connected Successfully")
    }
)();

//middlewares
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("<h1>Domestic Waste Management System");
})

///routes management using middlewares
const dustbinRoute=require("./routes/dustbin")
const complaintRoute=require("./routes/raisecomplaint")
const TruckRoute=require("./routes/truckconnection")
const WorkerAppointment=require("./routes/Workerappoint")
const AuthRoute=require("./routes/authroutes")

app.use("/workers",WorkerAppointment)
app.use("/trucks",TruckRoute)
app.use("/dustbin",dustbinRoute)
app.use("/complaints",complaintRoute)
app.use("/auth",AuthRoute)
app.listen(port,()=>console.log(`sever is running on http://localhost:${port}`))
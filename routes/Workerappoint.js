const express=require("express")
const router=express.Router();
const worker=require("../models/WorkerModel")  
// import the worker model

router.get("/workers",async(req,res)=>{
try{
    const workers=await worker.find();
    res.json("workers")
}
catch(error){
    res.status(500).json({message:error.message})
}
});

router.post("/workers",async(req,res)=>{
    const {Name,PhoneNumber,Role,Email,Area}=req.body;
    try{
        const NewWorker=new worker({
            Name,
            PhoneNumber,
            Role,
            Email,
            Area,
        })
    await NewWorker.save();
    res.status(201).json(NewWorker);
        }
    catch(error){
        res.status(400).json({message:error.message})
    }    
})

module.exports=router;

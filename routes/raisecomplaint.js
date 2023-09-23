const express=require("express")
const complaintrouter=express.Router()
const Complaint = require('../models/complaintmodel');
// posting a complaint 
complaintrouter.post('/raisecomplaints', async (req, res) => {
    try {
    //   data exraction 
      const { complaintType, userId, location, description, imageURl} = req.body;
  
      // Create a new complaint
      const complaint = new Complaint({
        complaintType,
        userId,
        location,
        description,
        imageURl,
      });
  
      // Save the complaint to the database
      await complaint.save();
  
      res.status(201).json(complaint);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });


complaintrouter.get('/', async (req, res) => {
    try {
      // Retrieve all complaints from the database
      const complaints = await Complaint.find();
  
      res.status(200).json(complaints);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });


  complaintrouter.get('/complaints/:loc', async (req, res) => {
    try {
    //   extract complaint based on location 
      const { location } = req.params;
  
      // Find the complaint by location
      const complaint = await Complaint.findOne(location);
  
      if (!complaint) {
        return res.status(404).json({ message: 'Complaint not found' });
      }
  
      res.status(200).json(complaint);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  
  module.exports = complaintrouter;
  
  
  
  
  
  
  
  



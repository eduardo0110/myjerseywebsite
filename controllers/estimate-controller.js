const mongoose = require("mongoose")
const Estimate = require("../models/estimate")


exports.saveEstimate = (req , res) => {
    let newEstimate = new Estimate({
        name:req.body.name,
        email:req.body.email,
        message:req.body.message,
        number:req.body.number
       
        

    });


    newEstimate.save()
    .then( () => {
      res.redirect("thanks")
    })
    .catch((error) => {
      res.send(error);
    })

}
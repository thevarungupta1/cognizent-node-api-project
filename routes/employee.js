const express = require("express");
const router = express.Router();
const Employee = require("../models/employe");

/**
 * Get All Employee
 */
router.get("/", async (req, res) => {

//Employee.find().then().catch()
  const employees = await Employee.find();

  try {
    res.status(200).json({
      error: false,
      data: employees
    });
  } catch (err) {
    res.status(400).json({
      error: true,
      message: err.message
    });
  }

});

/**
 * Get Employee by Id
 */
router.get("/:id", async (req, res) => {
  const employee = await Employee.findById(req.params.id)

  if(!employee){
    res.status(404).json({
        error: true,
        message : "employee id does not exist"
    })
}
try{
    res.status(200).json({
        error: false,
        data: employee
    })
}catch(err){
    res.status(400).json({
        error: true,
        message: err.message
    })
}
});

/**
 * Create Emloyee
 */
router.post("/", async (req, res) => {

    // parse json into object using express json
    const emp = req.body;
    const doc = await Employee.create(emp)
   
    try{
        res.status(201).json({
            error: false,
            data: doc
        })
    }catch(err){
        res.status(400).json({
            error: true,
            message: err.message
        })
    }

});

/**
 * Update Employee
 */
router.put("/:id", async (req, res) => {
 
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })

    if(!employee){
        res.status(404).json({
            error: true,
            message : "employee id does not exist"
        })
    }
    try{
        res.status(200).json({
            error: false,
            data: employee
        })
    }catch(err){
        res.status(400).json({
            error: true,
            message: err.message
        })
    }


});

/**
 * Delete Employee
 */
router.delete("/:id", async (req, res) => {
 
    const employee = await Employee.findByIdAndDelete(req.params.id)

    if(!employee){
        res.status(404).json({
            error: true,
            message : "employee id does not exist"
        })
    }
    try{
        res.status(200).json({
            error: false,
            message: "employee deleted successfully"
        })
    }catch(err){
        res.status(400).json({
            error: true,
            message: err.message
        })
    }

});

module.exports = router;

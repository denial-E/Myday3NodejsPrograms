import Employee from "../Models/employee.schema.js";

export const createEmployee = async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res
      .status(200)
      .json({ message: "emp added successfully", data: newEmployee });
  } catch (error) {
    console.log(error);
  }
};
export const getEmployeedetail = async (req, res) => {
  try {
    const employee = await Employee.find();
    res.status(200).json({ data: employee });
  } catch (error) {
    console.log(error);
  }
};
export const getEmployeeDetailById = async (req, res) => {
  try {
    const empId = req.params.id;
    const employee = await Employee.findById(empId);
    if (!employee) {
      return res.status(404).json({ messege: "Employee not found" });
    }
    res.status(200).json({ data: employee });
  } catch (error) {
    console.log(error);
  }
};
export const updateEmployeeById = async (req, res) => {
  try {
    const empId = req.params.id
    const { firstName, lastName, email, designation } = req.body
    const result =await Employee.updateOne({_id:empId},{firstName,lastName,email,designation})
    console.log(result);
    if(result.matchcount==0) {
      return res.status(400).json({message:"emp not found"})
    }
    const updateEmp = await Employee.findById(empId)
    res.status(200).json({data:updateEmp})
  } catch (error) {
    console.log(error);
    res.status(500).json({messege:"internal server error"})
    
  }
}

import express from "express";
import {
  createEmployee,
  getEmployeeDetailById,
  getEmployeedetail,
  updateEmployeeById,
} from "../Controllers/employee.controller.js";

const router = express.Router();

router.post("/create-emp", createEmployee); //http://localhost:4000/api/create-emp
router.get("/get-empdetails", getEmployeedetail); //http://localhost:4000/api/get-empdetails
router.get("/getempdetails/:id", getEmployeeDetailById); //http://localhost:4000/api/getempdetails/:id
router.put("/edit-emp/:id", updateEmployeeById);//http://localhost:4000/api/edit-emp/:id
export default router;

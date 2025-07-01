import express from "express";
import {
  createEmployee,
  getEmployeeDetailById,
  getEmployeeDetail,
  updateEmployeeById,
} from "../Controllers/employee.controller.js";

const router = express.Router();

router.post("/create-emp", createEmployee); //http://localhost:4000/peter/create-emp
router.get("/get-empdetails", getEmployeeDetail); //http://localhost:4000/peter/get-empdetails
router.get("/getempdetails/:id", getEmployeeDetailById); //http://localhost:4000/peter/getempdetails/:id
router.put("/edit-emp/:id", updateEmployeeById);//http://localhost:4000/peter/edit-emp/:id
export default router;

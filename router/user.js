import express from "express";
import { addUser } from "../controller/user.js";
const router = express.Router();

router.post("/add", addUser)




//exporting router 
export default router
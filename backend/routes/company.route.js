import express  from "express";
import { singleUpload } from "../middlewares/multer.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getCompany, getCompanyById, registerCompany, updatecompany } from "../controllers/company.controller.js";
const router = express.Router();
router.route("/register").post( isAuthenticated, registerCompany);
router.route("/get").get( isAuthenticated, getCompany);
router.route("/get/:id").get(isAuthenticated, getCompanyById);

router.route("/update/:id").put(isAuthenticated, singleUpload, updatecompany);
export default router;



import { Router } from "express";
import { ReportType_Controller } from "../Controller/Reports/reportType_Controller.js";



const router = Router();

router.get("/reports",ReportType_Controller.ListProductsWithSubs());

router.post("/reports/attribs",ReportType_Controller.ListAttributes());


export {router};
import { Router } from "express";
import { ReportType_Controller } from "../Controller/Reports/reportType_Controller.js";
import { ReportData_Controller } from "../Controller/Reports/reportData_Controller.js";
import { DashBoard_Controller } from "../Controller/Dashboard/dashboard_Contoller.js";



const router = Router();

router.get("/reports",ReportType_Controller.ListProductsWithSubs());

router.post("/reports/attribs",ReportType_Controller.ListAttributes());

router.post("/reports/data",ReportData_Controller.ReadData());

router.post("/dashboards/save",DashBoard_Controller.SaveDashboard());

router.get("/dashboards/read",DashBoard_Controller.ReadDashboard());


export {router};
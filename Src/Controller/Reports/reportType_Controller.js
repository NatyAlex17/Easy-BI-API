import fs from "fs";
import path from "path";

export class ReportType_Controller
{
    static ListProductsWithSubs()
    {
        return async(req,res,next) => {
            console.log("gig chad");
            
            const currentDir = process.cwd();
            console.log("current dir" , currentDir);
            const filePath = path.join(currentDir, "Src", "Utils", "Reports.json")
            const data = await fs.promises.readFile(filePath,{encoding:"utf8"});
            console.log("data" , data);
            res.status(200).json(JSON.parse(data));
        }
    }

    // this attributes are column , row , 
    static ListAttributes()
    {
        return async (req,res,next) => {
            
            const currentDir = process.cwd();
            const filePath = path.join(currentDir, "Src", "Utils", "ReportAttributes.json")
            const data = await fs.promises.readFile(filePath,{encoding:"utf8"});
            const reportAttributes = JSON.parse(data);
            console.log("gig", reportAttributes );
            const {reportTypeChildName , module , chart } = req.body;
            console.log("the reportTypeChildName" , reportTypeChildName);
            console.log("the module" , module);
            console.log("the chart" , chart);
            const attribs = reportAttributes[module]?.find(elm => elm.name === reportTypeChildName && elm.chart === chart  );
            console.log("the options" , attribs);
            res.status(200).json({ chartOptions : attribs });
        
        }
    }
}


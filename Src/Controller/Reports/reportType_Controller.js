import * as reports from "../../Utils/Reports.json" assert {type : "json"}
import * as reportAttributes from "../../Utils/ReportAttributes.json" assert {type : "json"}

export class ReportType_Controller
{
    static ListProductsWithSubs()
    {
        return async(req,res,next) => {

            res.status(200).json(reports);
        }
    }

    // this attributes are column , row , 
    static ListAttributes()
    {
        return async (req,res,next) => {
         
            console.log("gig", reportAttributes.default );
            const {reportTypeChildName , module , chart } = req.body;
            const attribs = reportAttributes.default[module]?.find(elm => elm.name === reportTypeChildName && elm.chart === chart  );
            console.log("the options" , attribs);
            res.status(200).json({ chartOptions : attribs });
        
        }
    }
}


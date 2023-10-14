import * as chartData from "../../Utils/ReportData.json" assert {type : "json"}

export class ReportData_Controller
{
    static ReadData()
    {
        return async(req,res,next) => {
           
           const {product  , subProduct  , chart  ,  filters   ,  columns  , groupBy  } = req.body;

           console.log("data Configurations" , product  , subProduct  , chart  ,  filters   ,  columns  , groupBy  )
           
           const chartCandidates = chartData.default.filter(chartCandidate => chartCandidate.product === product && chartCandidate.subProduct === subProduct && chartCandidate.chart === chart && chartCandidate.groupBy === groupBy && (chartCandidate.columns.length === columns.length && columns.every(item => chartCandidate.columns.includes(item) )) );
           
           //console.log("candidates" , chartCandidates);

           const chartSelected = chartCandidates.find(chart => {
                    const chartFilters = Object.keys(chart).filter(elm => !(["product"  , "subProduct"  , "chart"  ,  "data"   ,  "columns"  , "groupBy"].includes(elm)));
                    //console.log("Chart Filters" , chartFilters);
                    return chartFilters.length === Object.keys(filters).length  && chartFilters.every(filter => chart[`${filter}`]  === filters[`${filter}`] );
           });

           console.log("Chartselected" , chartSelected);

           const chartClone = structuredClone(chartSelected);

           Object.keys(filters).forEach(element => {
            console.log(element)
                delete chartClone[`${element}`];
           });
           
           chartClone[`filters`] = {...filters}

           res.status(200).json(chartClone);
        
        }
    }

    static SaveData()
    {
        return async(req,res,next) => {
            res.send(200).send("Route In development")
        }
    }

}
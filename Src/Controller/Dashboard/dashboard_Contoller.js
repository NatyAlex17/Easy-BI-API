import * as fs from "fs/promises";

export class DashBoard_Controller
{
    static SaveDashboard()
    {
        return async(req,res,next) => {

            const {dashboard} = req.body;

            console.log(dashboard);

            try {
                 
                
               fs.readFile('./Src/Utils/SavedDashBoards.json',{"encoding" : "utf8"}).then(data => {
                    return JSON.parse(data);
               }).catch(err => {
                    console.log("the error on read " , err);
                    return [];
               }).then( (data) => {
                        console.log("the saved Data " , data);
                        data.push( { name : `Dashboard ${data.length + 1}` ,  value: [...dashboard]});
                        console.log("the new Data to be saved " , data);
                       
                        fs.writeFile('./Src/Utils/SavedDashBoards.json', JSON.stringify(data) ,{"encoding" : "utf8" , "flag" : "w+" })
                        .then( () => { res.status(200).json({res : "new dashboard  was saved"})} )
                        .catch(err => {  console.log("the new Data failed to be saved " , err);  res.status(500).json({res : "new dashboard  failed to save" , error : err}) });
               });


               /*  console.log("the saved Data " , data);
                data.push(...dashboard);
                console.log("the new Data to be saved " , data);

                fs.writeFile('./Utils/SavedDashBoards.json', JSON.stringify(data) ,{"encoding" : "utf8" , "flag" : "w+" })
                .then( () => { res.status(200).json({res : "new dashboard  was saved"})} );
                
                fs.readFile('./Utils/SavedDashBoards.json',{"encoding" : "utf8"}).then(data => {
                    console.log("the saved Data " , data);
                    data.push(...dashboard);
                    console.log("the new Data to be saved " , data);
                 
                }).catch(err => { res.status(200).json({res : "new dashboard  failed to save" , error : err}) }) */
              } catch (err) {
                console.error(err);
                res.status(500).json({error : err}); 
              }

            
        }
    }


    static ReadDashboard()
    {
        return async(req,res,next) => {
            try {
                
            fs.readFile('./Src/Utils/SavedDashBoards.json',{"encoding" : "utf8"})
            .then(data => {
                    const dashboardsData =  JSON.parse(data);
                    res.status(200).json({result : dashboardsData});
            }).catch(err => {
                    console.log("the error on read " , err);
                    res.status(200).json({result : []})})
            } catch (err) {
                 console.error(err);
                 res.status(500).json({result : [] ,  error : err}); 
               }
           
        }
    }
    static ReadDashboardList(){
        return async(req, res, next) => {
            try{
                fs.readFile("./Src/Utils/SavedDashboards.json", {encoding: "utf8"})
                    .then((data) => {
                            const dashboardList = (JSON.parse(data)).map(item => {
                                return {
                                    name: item.name,
                                    value: item.value.map((chart) => {
                                        return {
                                            chartTitle: chart.chartTitle,
                                            widgetName: chart.widgetName,
                                            product: chart.product,
                                            subProduct: chart.subProduct,
                                            api: chart.api,
                                            gridPosition: chart.gridPosition,
                                            query: chart.query
                                        };
                                    })
                                };
                            });
                            res.status(200).json({result: dashboardList});
                        }
                    ).catch((err) => {
                        console.log("Error on reading file: ", err);
                        res.status(404).json({result: [], error: err});
                    })
            } catch(error){
                console.log("Error on getting list of dashboards: ", error);
                res.status(500).json({result: [], error: error});
            }
        }
    }
}
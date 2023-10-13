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
}
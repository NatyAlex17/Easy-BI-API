import express  from 'express';
import dotenv from "dotenv";
///import { router } from "./routes/router.js";
import cors from 'cors';
import { router } from './Routes/router.js';
dotenv.config();

const app = express();

const corsOption = {
    //origin: "http://dev.calendar.ethiocheno.com",
    //origin: "http://localhost:3000",
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
};
app.use(cors(corsOption));


app.use(express.json());
app.use("/api",router);
app.get("/" , (req,res,next) => {
    
    res.status(200).send("Api Working ");
})
app.use((err,req,res,next)=>{
    console.log("Error Occurred: ", err);
    res.status(500).json({ERRor: err.message ? err.message : err});
})

app.listen(process.env.PORT || 5010, ()=>{
    console.log("Server UP And Running ");
})
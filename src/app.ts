import "reflect-metadata"
import {AppDataSource} from "../data-source";
import  express from"express";
import bodyParser from "body-parser";
import  cors from "cors";
import postRoutes from "./routes/postRoutes"


AppDataSource.initialize()
.then(async(connection)=>{
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    app.use("/api",postRoutes);
    app.listen(8080,()=>console.log("App is running at Port 8080"));

})

.catch((error)=> console.log(error));
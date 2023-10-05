import express, {Request , Response} from 'express';

const app = express ();
app.use(express.json());

//Routes 
    app.post("/api/greet", (req:Request , res:Response)=>{
        return res.json({name:"HELLOW"});
    });


    app.route("/api/name")
    .get((req:Request, res:Response)=>{
        return res.json({
            desc: "this is api get"
        });
    })

    .post((req:Request, res:Response)=>{
        return res.json({
            desc: "this is api post"
        });
    })




app.listen(3000, () => {
    console.log("App is Running at http://localhost:3000");
});

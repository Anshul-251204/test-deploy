import { config } from "dotenv";
import express from "express";
import cors from "cors";

config({
    path:'.env'
})
const app = express();

app.listen(process.env.PORT, () =>
	console.log("app is started on ", process.env.PORT)
);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

let arr = ["a"]
app.get("/", (req, res) => res.send(arr));
app.post("/" ,(req,res)=>{
    const { input } = req.body;
    
    arr.push(input)
    res.send('done')
})

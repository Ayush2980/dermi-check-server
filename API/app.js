const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const exp = require("constants");
const upload = multer();
const app = express();
const axios = require("axios")
const cors = require("cors")
const mongoose = require("mongoose")
const auth = require("./routes/auth");
const cookieParser = require("cookie-parser");
const userValidation = require("./routes/userValidation");
const general = require("./routes/general")
const jsonData = require("./json/data.json")
const authMobile = require("./routes/authMobile");
const {deserializeUser} = require("./middlewares/deserializeUser");

main().catch(e => console.log(e)).then(() => console.log("Database connected !!!"));
async function main(){
  await mongoose.connect('mongodb://127.0.0.1:27017/refreshT');
}

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({extended :true}))
app.use(cookieParser());

app.use("/api" ,auth );
app.use("/api" ,userValidation);
app.use("/api" , general)
app.use("/api" , authMobile)
app.post("/test" , upload.single('image') ,async(req ,res , next) => {
    try{
      console.log("Hitt hhua");
        const {data} = await axios.post('https://dermi-check-server-21.onrender.com/uploadTest' , {
            image : req.file
        } ,  {
            headers: {
              'Content-Type': 'application/json'
            }
          })
        console.log("launf")
        const responseObject = jsonData[data];
        const disease = data;
        res.send({diseaseInfo : {...responseObject , disease : data }})
    }
    catch(e){
        next(e);
    }
})

app.get("/api/do",  (req , res) => {
  res.send("connected");
})


app.use((err ,req , res , next) => {
  console.log(err);
  res.send({error : err.message})
})




app.listen(8000, () => {
  console.log("Listening !!");
});

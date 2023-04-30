const mongoose=require('mongoose');
const cors=require('cors');
const bodyParser = require('body-parser');
const express=require('express');
const app=express();
const userRouter=require('./routers/user.js');
const bookRouter=require('./routers/book.js');
const userandbookRouter=require('./routers/userandbook.js');
const categoryRouter=require('./routers/category.js');

require('dotenv').config();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

app.get("/",(req,res)=>{
  res.send("Hello admin this is your server");
})

app.use('/user',userRouter);
app.use('/book',bookRouter);
app.use('/userandbook',userandbookRouter);
app.use('/category',categoryRouter);

console.log(process.env.DB_CONNECTION);
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true,}).catch(err=>console.log(err));
app.listen(3000);
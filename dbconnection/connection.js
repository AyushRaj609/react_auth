const mongoos = require("mongoose");
const DATABASE_URL="mongodb+srv://ayushrajjaiswal609:Ankithhh10012000@cluster0.brswjzd.mongodb.net/?retryWrites=true&w=majority"
// const PORT=3004
// const url = process.env.DATABASE_URL;

function Connect(){
    mongoos.connect(
        DATABASE_URL,{
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
.then(()=>{
    console.log("connected to db");
}).catch((err)=>{
    Connect()
    console.log("Error: "+ err);
})

}

Connect();
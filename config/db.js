import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://positiveprogrammerr:1111@cluster0.nfxypbf.mongodb.net/').then(()=>console.log("DB Connected"));
   
}



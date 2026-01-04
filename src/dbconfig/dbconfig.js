import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ssl: true,
      tlsAllowInvalidCertificates: true, // Bypass SSL handshake issue
    });

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (err) => {
      console.log("MongoDB connection error. Make sure MongoDB is running.\n" + err);
      process.exit(1);
    });

  } catch (error) {
    console.log("Something went wrong during DB connection");
    console.log(error);
  }
}



// import mongoose   from "mongoose";

// export async function connect(){
//     try{
//         mongoose.connect(process.env.MONGO_URI);
//         const connection = mongoose.connection
//         connection.on('connected', ()=>{
//             console.log('MongoDb connected successfully')
//         })
//         connection.on('error', (err)=>{
//             console.log('MongoDb connected error. please make sure mongodb is running' + err);
//             process.exit();
//         })
//     } catch(error){
//         console.log("something goes wrong") 
//         console.log('error')
//     }
// }
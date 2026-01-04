import mongoose from "mongoose";

// Global cache to prevent multiple connections in development/serverless
let isConnected = false; 

export async function connect() {
  // Agar pehle se connected hai, toh dobara connect mat karo
  if (isConnected) {
    console.log("Using existing MongoDB connection");
    return;
  }

  try {
    // Deprecated options (useNewUrlParser, useUnifiedTopology) hata diye gaye hain
    const db = await mongoose.connect(process.env.MONGO_URI, {
      bufferCommands: false,
    });

    isConnected = db.connections[0].readyState === 1;
    console.log("✅ MongoDB connected successfully");

  } catch (error) {
    console.error("Something went wrong during DB connection");
    console.error(error.message);
    // Vercel par process.exit(1) use mat kariye, ye server crash kar deta hai
  }
}

// import mongoose from "mongoose";

// export async function connect() {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       ssl: true,
//       tlsAllowInvalidCertificates: true, // Bypass SSL handshake issue
//     });

//     const connection = mongoose.connection;

//     connection.on("connected", () => {
//       console.log("MongoDB connected successfully");
//     });

//     connection.on("error", (err) => {
//       console.log("MongoDB connection error. Make sure MongoDB is running.\n" + err);
//       process.exit(1);
//     });

//   } catch (error) {
//     console.log("Something went wrong during DB connection");
//     console.log(error);
//   }
// }



// // import mongoose   from "mongoose";

// // export async function connect(){
// //     try{
// //         mongoose.connect(process.env.MONGO_URI);
// //         const connection = mongoose.connection
// //         connection.on('connected', ()=>{
// //             console.log('MongoDb connected successfully')
// //         })
// //         connection.on('error', (err)=>{
// //             console.log('MongoDb connected error. please make sure mongodb is running' + err);
// //             process.exit();
// //         })
// //     } catch(error){
// //         console.log("something goes wrong") 
// //         console.log('error')
// //     }
// // }
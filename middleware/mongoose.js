import mongoose from "mongoose";

const connectDb = (handler) => async (req, res) => {
  if (mongoose.connection.readyState === 1) {
    // Already connected
    return handler(req, res);
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ssl: true,
      tlsAllowInvalidCertificates: true, // Important for TLS handshake fix
    });

    console.log("MongoDB connected in middleware");
    return handler(req, res);

  } catch (error) {
    console.error("MongoDB connection error in middleware", error);
    res.status(500).json({ message: "Database connection failed" });
  }
};

export default connectDb;



// import mongoose from "mongoose";

// const connectDb = handler => async (req,  res)=>{
//     if(mongoose.connection[0].readyState){
//         return handler(req, res)
//     }
//     await mongoose.connect(process.env.MONGO_URI)
//     return handler(req, res)
// }

// export default connectDb;
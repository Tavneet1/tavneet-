import mongoose from "mongoose";

const connectDb = (handler) => async (req, res) => {
  // 1. Check if we have an active connection (readyState 1)
  if (mongoose.connection.readyState === 1) {
    return handler(req, res);
  }

  try {
    // 2. Connect with streamlined options
    // useNewUrlParser and useUnifiedTopology are no longer needed
    await mongoose.connect(process.env.MONGO_URI, {
      ssl: true,
      tlsAllowInvalidCertificates: true, // Keep this if you have specific TLS issues
    });

    console.log("MongoDB connected successfully");
    return handler(req, res);

  } catch (error) {
    console.error("MongoDB connection error:", error);
    // 3. Gracefully handle the error for the API response
    return res.status(500).json({ 
      success: false, 
      message: "Database connection failed" 
    });
  }
};

export default connectDb;
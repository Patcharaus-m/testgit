import mongoose from "mongoose";
import config from "@/config";

export async function connectDB() {
    try {
        await mongoose.connect(config.DATABASE_URL ??"mongodb://127.0.0.1:27017/fullstackbe");
        console.log("Connected to MongoDB");
    } catch (error:any) {
        console.error("Failed to connect to MongoDB" ,error);
    }
}
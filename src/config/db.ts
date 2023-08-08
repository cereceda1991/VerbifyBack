import mongoose from "mongoose";

const { MONGO_URI } = process.env;

export const db = mongoose.createConnection(`mongo://${MONGO_URI}`);

export default db;

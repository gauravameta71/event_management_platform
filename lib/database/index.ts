import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || {conn: null , promise: null};
// In this case, if mongoose is truthy (i.e., it exists), then cached will be assigned the
//  value of mongoose. If mongoose is falsy (e.g., null or undefined), then cached will be 
//  assigned an object with properties conn set to null and promise set to null.

export const connectToDatabase = async () => {
    if (cached.conn) return cached.conn; //this is where we are running our connection first time

    if(!MONGODB_URI) throw new Error('MONGO_URI is missing');

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI,{ // in here we connect to 
        dbName:'evently',                                            // alredy exist connection or if not exist create new
        bufferCommands:false,
    })

    cached.con = await cached.promise;

    return cached.conn;
}

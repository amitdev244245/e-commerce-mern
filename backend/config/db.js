import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to the mongoAtlas database: ` + `${conn.connection.name}`.green.bold);
        console.log(`------------------------------------------------------------------------\n🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂\n`); // used for decorating dev console
    } catch (error) {
        console.log(`Error while connecting to the mongoAtlas database: ` + `${error}`.red.bold);
        console.log(`------------------------------------------------------------------------\n🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂\n`); // used for decorating dev console
    }
}

export default connectDB;
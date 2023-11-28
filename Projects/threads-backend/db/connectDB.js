const mongoose = require ("mongoose");

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log(`MongoDB connected 🎈`)
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
}

module.export = connectDB;
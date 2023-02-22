import mongoose from 'mongoose';

const connectDB = (url) => {
    mongoose.set('strictQuery', true);

    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }

    mongoose.connect(url, options)
        .then(() => console.log('MongoDB connected'))
        .catch((err) => console.log(`MongoDB connection error: ${err}`));
}

export default connectDB;


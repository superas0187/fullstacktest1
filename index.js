import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

const app = express();
dotenv.config();



app.use( express.json({ limit: '30mb', extended: true }));
app.use( express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes);

if(process.env.NODE_ENV === "production") {
    app.use( express.static(path.join(__dirname, 'client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.js"))
    })
}

app.get('/', (req, res) => {
    res.send('APP IS RUNING');
})

//  CONNECTION_URL = 'mongodb://test123:test123@cluster0-shard-00-00.c45ut.mongodb.net:27017,cluster0-shard-00-01.c45ut.mongodb.net:27017,cluster0-shard-00-02.c45ut.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-o8djq2-shard-0&authSource=admin&retryWrites=true&w=majority'
// CONNECTION_URL = 'mongodb+srv://test123:test123@cluster0.c45ut.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true , useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error));

// mongoose.set('useFindAndModify', false);

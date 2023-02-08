import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes.js';
import ScheduleService from './services/ScheduleService.js';
const PORT = process.env.PORT || 3000;
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(router);

app.get('/', (req, res) =>{
    res.send('Hello World');
});
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/calendary', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const INTERVAL = 300000; // 5 minutes
setInterval(() => {
    ScheduleService.notifySchedules();
}, INTERVAL);
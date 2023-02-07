import { mongoose } from 'mongoose';

const ScheduleSchema = new mongoose.Schema({
    name: String,
    email: String,
    cpf: String,
    description: String,
    date: Date,
    time: String,
    finished: Boolean
});

export default mongoose.model('Schedule', ScheduleSchema);
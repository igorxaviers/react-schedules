import Schedule from '../models/Schedule.js';
import BadRequest from '../errors/BadRequest.js';
import InternalError from '../errors/InternalError.js';
import ScheduleFactory from '../factories/ScheduleFactory.js';

class ScheduleService{
    
    constructor(){
        this.Schedule = Schedule;
    }

    async getSchedules(showFinished = false){
        if(showFinished)
            //order by date
            return await this.Schedule.find({}).sort({date: -1});

        else{
            let schedules = await this.Schedule.find({finished: false});
            let complexSchedules = [];

            schedules.forEach(schedule => {
                if(schedule.date !== undefined && schedule.time !== undefined)
                    complexSchedules.push(ScheduleFactory.BuildSchedule(schedule));
            });
            return complexSchedules;
        }
    }

    async searchSchedule(search){
        try{
            let schedules = await this.Schedule.find().or([{'cpf': search}, {'email': search}]);
            return schedules;
        }
        catch(err){
            throw new BadRequest('Schedule not found');
        }
    }

    async createSchedule(schedule){
        // let date = new Date(schedule.date);
        // let today = new Date();
        // if(date <= today)
        //     throw new BadRequest('Date must be greater than today');

        const newSchedule = new Schedule({
            name: schedule.name,
            email: schedule.email,
            cpf: schedule.cpf,
            description: schedule.description,
            date: schedule.date,
            time: schedule.time,
            finished: false
        });
        try{
            const savedSchedule = await newSchedule.save();
            return savedSchedule;
        }
        catch(err){
            throw new InternalError('Error while saving schedule');
        }
    }

    async getSchedule(id){
        try{
            let schedule = await this.Schedule.findById(id);
            return schedule;
        }
        catch(err){
            throw new BadRequest('Schedule not found');
        }
    }

    async finishSchedule(id){
        try{
            let schedule = await this.getSchedule(id);
            schedule.finished = true;
            await schedule.save();
            return schedule;
        }
        catch(err){
            throw new BadRequest('Schedule not found');
        }
    }

}

    export default new ScheduleService();
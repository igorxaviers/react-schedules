import express from 'express';
import ScheduleService from '../services/ScheduleService.js';
import Schedule from '../models/Schedule.js';


class ScheduleController{
    async index(req, res){
        let { finisheds } = req.query;
        try{
            if(finisheds){
                const schedules = await ScheduleService.getSchedules(true);
                return res.status(200).json(schedules);
            }
            const schedules = await ScheduleService.getSchedules();
            res.status(200).json(schedules);
        }
        catch(err){
            console.log(err);
            res.status(500).json({message: err});
        }
    }

    async get(req, res){
        let { id } = req.params;
        if(!id)
            res.status(400).json({message: 'Id not provided'});
        try{
            const schedule = await ScheduleService.getSchedule(id);
            res.status(200).json(schedule);
        }
        catch(err){
            res.status(404).json({message: err});
        }
    }

    async search(req, res){
        let { search } = req.query;
        
        try{
            let schedules;
            if(search === ''){
                schedules = await ScheduleService.getSchedules(true); 
            }
            schedules = await ScheduleService.searchSchedule(search);
            res.status(200).json(schedules);
        }
        catch(err){
            res.status(404).json({message: err});
        }
    }

    async create(req, res){
        if(req.body.name && req.body.email && req.body.description && req.body.date && req.body.time){
            try{
                const savedSchedule = await ScheduleService.createSchedule(req.body);
                res.status(201)
                .json({
                    message:'New schedule created',
                    error: false,
                    schedule: savedSchedule
                });
            }
            catch(err){
                res.status(400)
                .json({
                    message: err,
                    error: true
                });
            }
        }
        else{
            res.status(400)
            .json({
                message: 'Fill all the fields!',
                error: true
            });
        }
    }

    async update(req, res){
        let { id } = req.params;
        if(!id)
            res.status(400).json({message: 'Id not provided'});

        try{
        }
        catch(err){
            res.status(404).json({message: err});
        }
    }

    async finish(req, res){
        let { id } = req.body;
        if(!id)
            res.status(400).json({message: 'Id not provided'});

        try{
            const schedule = await ScheduleService.finishSchedule (id);
            res.status(200).json({message: 'Schedule finished', schedule});
        }
        catch(err){
            console.log(err);
            res.status(404).json({message: err});
        }
    }


}


export default new ScheduleController();
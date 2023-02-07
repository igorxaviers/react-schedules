import express from 'express';
import Schedule from '../models/Schedule.js';


class ScheduleController{
    async index(req, res){
        try{
            const schedules = await Schedule.find();
            res.json(schedules);
        }
        catch(err){
            res.json({message: err});
        }
    }

    async store(req, res){
        if(req.body.name && req.body.email && req.body.cpf && req.body.description && req.body.date && req.body.time){
            const newSchedule = new Schedule({
                name: req.body.name,
                email: req.body.email,
                cpf: req.body.cpf,
                description: req.body.description,
                date: req.body.date,
                time: req.body.time,
                finished: false
            });

            try{
                const savedSchedule = await newSchedule.save();
                res.status(201)
                .json({
                    message:'New schedule created',
                    error: false,
                    schedule: savedSchedule
                });
            }
            catch(err){
                res.satus(400)
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
}


export default new ScheduleController();
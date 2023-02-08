import express from 'express';
const router = express.Router();
import ScheduleController from './schedules/ScheduleController.js';

router.get('/schedule', ScheduleController.index);
router.post('/schedule', ScheduleController.create);
router.put('/schedule/:id', ScheduleController.update);
router.get('/schedule/:id', ScheduleController.get);
router.post('/schedule/finish', ScheduleController.finish);
router.get('/schedule/search', ScheduleController.search);


export default router;
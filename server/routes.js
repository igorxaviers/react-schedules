import express from 'express';
const router = express.Router();
import ScheduleController from './schedules/ScheduleController.js';

router.get('/schedule', ScheduleController.index);
router.post('/schedule', ScheduleController.store);

export default router;
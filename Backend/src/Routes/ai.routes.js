import express from 'express'
import responseController from '../controllers/ai.controllers.js';

const router=express.Router();

router.post('/get-review', responseController)

export default router
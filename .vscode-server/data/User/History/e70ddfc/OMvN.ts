import { Router } from "express";
import authRouter from "./auth"

const router = Router();

router.get('/auth', authRouter);

export default router;
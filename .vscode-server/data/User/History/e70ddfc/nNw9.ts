import { Router } from "express";
import authRouter from "./auth"

const router = Router();

router.use('/auth', authRouter);
router.use('/guilds', guildRouter);

export default router;
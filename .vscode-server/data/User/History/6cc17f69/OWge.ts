import { Router } from "express";
import { getGuildsController } from "../../controllers/guilds";
import { isAuthenticated } from "../../utils/middleware";

const router = Router();

router.use('/', isAuthenticated, getGuildsController);

export default router

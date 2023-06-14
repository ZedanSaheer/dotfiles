import { Router } from "express";
import { getGuildsController } from "../../controllers/guilds";
import { isAuthenticated } from "../../utils/middleware";

const router = Router();

router.get('/', isAuthenticated, getGuildsController); //Redirects user to the guilds controller if authenticated
router.get('/:guildId/permissions')

export default router

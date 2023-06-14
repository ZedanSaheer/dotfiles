import { Router } from "express";
import { getGuildController, getGuildsController, getGuildsPermissionController } from "../../controllers/guilds";
import { isAuthenticated } from "../../utils/middleware";

const router = Router();

router.get('/', isAuthenticated, getGuildsController); //This route  
router.get('/:id/permissions',isAuthenticated,getGuildsPermissionController); //Redirects
router.get('/:id',isAuthenticated,getGuildController);

export default router

import { Router } from "express";
import { getGuildController, getGuildsController, getGuildsPermissionController } from "../../controllers/guilds";
import { isAuthenticated } from "../../utils/middleware";

const router = Router();

router.get('/', isAuthenticated, getGuildsController); //This route invokes the fetch guilds controller if authorized
router.get('/:id/permissions',isAuthenticated,getGuildsPermissionController); //This route invokes the 
router.get('/:id',isAuthenticated,getGuildController);

export default router

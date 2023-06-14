import { Router } from "express";
import { getGuildController, getGuildsController, getGuildsPermissionController } from "../../controllers/guilds";
import { isAuthenticated } from "../../utils/middleware";

const router = Router();

//The is

router.get('/', isAuthenticated, getGuildsController); //This route invokes the fetch guilds controller 
router.get('/:id/permissions',isAuthenticated,getGuildsPermissionController); //This route invokes the guilds controller for checking permission status
router.get('/:id',isAuthenticated,getGuildController); 

export default router

import { Router } from "express";

const router = Router();

router.get('/discord',passport,(req,res)=>{
    res.sendStatus(200);
});

export default router
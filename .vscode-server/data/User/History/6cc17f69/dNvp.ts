import { Router } from "express";

const router = Router();

router.use('/', (req, res) => {
    res.send(200);
});

export default router

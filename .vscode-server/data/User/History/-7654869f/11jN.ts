import { Router } from "express";
import passport from "passport";

const router = Router();

//Routes that redirect to discord auth
router.get('/discord', passport.authenticate('discord'), (req, res) => {
    res.sendStatus(200);
});

router.get('/discord/redirect', passport.authenticate('discord'), (req, res) => {
    //Redirect user to menu page when auth is true 
    res.redirect('http://localhost:3000/menu');
});

//Logout user

router.get('/logout', ((req, res) => {
    //Use the req.logout method injected by passport to clear a session
    req.logout();
    res.redirect('/discord');
}))

//Routes that check the login status of user
router.get('/status', (req, res) => {
    //Send unauthorized code if user does not exist in session
    req.user ? res.send(req.user) : res.sendStatus(401).send({ status: "Unauthorized" });
});

export default router
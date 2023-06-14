import { NextFunction, Request, Response } from "express"

export const isAuthenticated = (req:Request, res:Response , next:NextFunction) => {
    req.user ? next() : res.status(401).send('User is unauthorized')
}
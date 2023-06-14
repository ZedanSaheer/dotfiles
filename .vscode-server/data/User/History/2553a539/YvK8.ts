import { Request, Response } from "express"

export const isAuthenticated = (req:Request, res:Response , next:) => {
    req.user ? 
}
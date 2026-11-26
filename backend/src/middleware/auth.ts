import type { RequestHandler } from "express";
import { appendFileSync } from "node:fs";


export const sanitizeSignIn : RequestHandler = (req, res, next) => {

    try {

        
        // check if email and password are present in req.body
        const { email, password } = req.body
        
        if(!email || !password) {
            return res.status(401).json({ error : "invalid request" })
        }
        
        next()
    } catch (e) {
         appendFileSync("./log.txt", `\n time : ${Date.toString()} error : ${e}`,)
    console.log("error : ", e)
            return res.status(401).json({ error : "empty request body"})
        }
}
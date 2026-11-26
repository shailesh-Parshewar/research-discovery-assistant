import type { RequestHandler } from "express";


export const signIn : RequestHandler =  async (req, res) => {
 try {
    const { email, password } = req.body;


    return res.status(200).json({ message : "ok" })
 } catch (e) {
   
    return res.status(500).json({ error : "Something went wrong"})
 }
}
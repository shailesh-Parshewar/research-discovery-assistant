import { Router } from "express";
import { sanitizeSignIn } from "../middleware/auth";
import { signIn } from "../controllers/auth";

const authRouter = Router()

authRouter.post("/sign-in", sanitizeSignIn, signIn)
// authRouter.post("/sign-up")

export default authRouter;
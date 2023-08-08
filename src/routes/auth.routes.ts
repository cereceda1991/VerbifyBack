import { Router } from "express";
import { signUp } from "../controllers/auth.controller";
import { authGoogleMiddleware, authLocalMiddleware } from "../middlewares/auth";

const router: Router = Router();

// Authenticate using email and password
router.post("/signin", authLocalMiddleware);

// Authenticate using Google account, if user does not exist, creates a new one
router.post("/google", authGoogleMiddleware);

// Sign up is not protected
router.post("/signup", signUp);

export { router as authRouter };

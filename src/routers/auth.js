import express from "express";
import { signin, signup } from "../controllers/auth";
import { validateRequest } from "../middleware/validateRequest";
import { signinSchema, signupSchema } from "../validation/authValidation";

const routeAuth = express.Router();

// Route đăng ký
routeAuth.post("/signup", validateRequest(signupSchema), signup);

// Route đăng nhập
routeAuth.post("/signin", validateRequest(signinSchema), signin);

// Route lấy thông tin người dùng hiện tại

export default routeAuth;
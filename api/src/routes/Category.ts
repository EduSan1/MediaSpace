import { Router } from "express";
import { CategoryController } from "../controller/Category";

const categoryRoute = Router()
const categoryController = new CategoryController()

categoryRoute.post("/", categoryController.create)

export default categoryRoute
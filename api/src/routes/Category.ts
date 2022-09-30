import { Router } from "express";
import { CategoryController } from "../controller/Category";

const categoryRoute = Router()
const categoryController = new CategoryController()

categoryRoute.get("/", categoryController.getAll)
categoryRoute.get("/:categoryId", categoryController.getByID)
categoryRoute.post("/", categoryController.create)
categoryRoute.put("/:categoryId", categoryController.update)
categoryRoute.post("/disable/:categoryId", categoryController.disable)

export default categoryRoute
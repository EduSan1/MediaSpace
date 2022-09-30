import { Router } from "express";
import { SubCategoryController } from "../controller/SubCategory";

const subCategoryRoute = Router()
const subCategoryController = new SubCategoryController()

subCategoryRoute.post("/", subCategoryController.create)
subCategoryRoute.get("/", subCategoryController.getAll)
subCategoryRoute.get("/:subCategoryId", subCategoryController.getByID)
subCategoryRoute.put("/:subCategoryId", subCategoryController.update)
subCategoryRoute.post("/disable/:subCategoryId", subCategoryController.disable)


export default subCategoryRoute
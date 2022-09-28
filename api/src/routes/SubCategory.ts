import { Router } from "express";
import { SubCategoryController } from "../controller/SubCategory";

const subCategoryRoute = Router()
const subCategoryController = new SubCategoryController()

subCategoryRoute.post("/", subCategoryController.create)

export default subCategoryRoute
import { Router } from "express";
import { GenderController } from "../controller/Gender";

const genderRoute = Router()
const genderController = new GenderController()

genderRoute.get("/" , genderController.getAll)
genderRoute.get("/:genderId", genderController.getByID)
genderRoute.post("/" , genderController.create)
genderRoute.put("/:genderId" , genderController.update)
genderRoute.delete("/:genderId", genderController.delete)

export default genderRoute
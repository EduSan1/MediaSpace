import {Request, Response, Router} from "express"
import { UserController } from "../controller/User"

const userRouter = Router()
const userController = new UserController()

userRouter.get("/", userController.getAll)
userRouter.get("/:idUser", userController.getByID)
userRouter.post("/", userController.create)
userRouter.put("/:idUser", userController.update)
userRouter.delete("/:idUser", userController.delete)

export default userRouter
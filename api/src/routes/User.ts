import {Request, Response, Router} from "express"
import { UserController } from "../controller/User"

const userRouter = Router()
const userController = new UserController()

userRouter.get("/", userController.getAll)
userRouter.get("/:userId", userController.getByID)
userRouter.post("/", userController.create)
userRouter.put("/:userId", userController.update)
userRouter.delete("/:userId", userController.delete)

export default userRouter
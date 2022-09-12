import { Router, Request, Response } from "express"
import genderRoute from "./routes/Gender"
import userRouter from "./routes/user"

const router = Router()

router.get("/", (req: Request, res: Response) => {
    return res.json({
        message: "MediaSpace api ok!"
    })
})

router.use("/User", userRouter )
router.use("/Gender" , genderRoute)

export default router
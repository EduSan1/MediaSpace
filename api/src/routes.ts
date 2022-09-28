import { Router, Request, Response } from "express"
import categoryRoute from "./routes/Category"
import genderRoute from "./routes/Gender"
import subCategoryRoute from "./routes/SubCategory"
import userRouter from "./routes/user"

const router = Router()

router.get("/", (req: Request, res: Response) => {
    return res.json({
        message: "MediaSpace api ok!"
    })
})

router.use("/user", userRouter )
router.use("/gender" , genderRoute)
router.use("/category", categoryRoute)
router.use("/subCategory", subCategoryRoute)

export default router
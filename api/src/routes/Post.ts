import { Router } from "express";
import { PostController } from "../controller/Post";

const postRoute = Router()
const postController = new PostController()

postRoute.get("/", postController.getAll)
postRoute.get("/:postId", postController.getById)
postRoute.post("/", postController.create)
postRoute.put("/:postId", postController.update)
postRoute.put("/disable/:postId", postController.disable)

export default postRoute
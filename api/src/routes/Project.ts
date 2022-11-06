import { Router } from "express"
import { ProjectController } from "../controller/Project"

const projectRoute = Router()
const projectController = new ProjectController()

projectRoute.get("/", projectController.getAll)
projectRoute.post("/", projectController.create)
projectRoute.get("/:projectId", projectController.getById)
projectRoute.get("/user/:userId", projectController.getAllUserProjects)
projectRoute.get("/freelancer/:freelancerId", projectController.getAllFreelancerProjects)
projectRoute.put("/:projectId", projectController.update)
projectRoute.post("/disable/:projectId", projectController.disable)
projectRoute.post("/registerInterest/:projectId", projectController.registerInterest)
projectRoute.post("/selectFreelancer/:projectId", projectController.selectFreelancer)
projectRoute.post("/acceptRequirements/:projectId", projectController.acceptRequirements)
projectRoute.post("/denyRequirement/:projectId", projectController.denyRequirements)

export default projectRoute
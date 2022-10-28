import { Router } from "express"
import { ProjectController } from "../controller/Project"

const projectRoute = Router()
const projectController = new ProjectController()

projectRoute.get("/", projectController.getAll)
projectRoute.post("/", projectController.create)
projectRoute.get("/:projectId", projectController.getById)
projectRoute.put("/:projectId", projectController.update)
projectRoute.post("/disable/:projectId", projectController.disable)
projectRoute.post("/registerInterest/:projectId", projectController.registerInterest)
projectRoute.post("/selectFreelancer/:projectId", projectController.selectFreelancer)
projectRoute.post("/confirm/:projectRequirementId", () => "rota de confirmação de requisito")
projectRoute.post("/startProject/:projectRequirementId", () => "rota de confirmação de inicio de projeto")

export default projectRoute
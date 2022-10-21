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
projectRoute.post("/freelancersIntersted/:projectId", () => "rota de listar os freelancer interessados  no projeto")
projectRoute.post("/selectFreelancer/:projectId", projectController.selectFreelancer)
projectRequirementsRoute.post("/accept/:projectId", projectRequirementsController.accept)
projectRequirementsRoute.post("/accept/:projectId", projectRequirementsController.deny)
projectRoute.post("/startProject/:projectRequirementId", () => "rota de confirmação de inicio de projeto")

export default projectRoute
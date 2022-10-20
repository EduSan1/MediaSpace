import { Router } from "express";
import { ProjectRequirementsController } from "../controller/ProjectRequirements";

const projectRequirementsRoute = Router()
const projectRequirementsController = new ProjectRequirementsController()

projectRequirementsRoute.get("/", projectRequirementsController.getAll)
projectRequirementsRoute.get("/:projectRequirementId", projectRequirementsController.getById)
projectRequirementsRoute.post("/", projectRequirementsController.create)
projectRequirementsRoute.post("/disable/:projectRequirementId", () => "rota de desativação")
projectRequirementsRoute.delete("/:projectRequirementId", () => "rota de exclução")
projectRequirementsRoute.put("/:projectRequirementId", () => "rota de edição")

export default projectRequirementsRoute
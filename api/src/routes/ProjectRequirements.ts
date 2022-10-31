import { Router } from "express";
import { ProjectRequirementsController } from "../controller/ProjectRequirements";

const projectRequirementsRoute = Router()
const projectRequirementsController = new ProjectRequirementsController()

projectRequirementsRoute.get("/", projectRequirementsController.getAll)
projectRequirementsRoute.get("/:projectRequirementId", projectRequirementsController.getById)
projectRequirementsRoute.post("/", projectRequirementsController.create)
projectRequirementsRoute.post("/disable/:projectRequirementId", projectRequirementsController.disable)
projectRequirementsRoute.delete("/:projectRequirementId", projectRequirementsController.delete)
projectRequirementsRoute.put("/:projectRequirementId", projectRequirementsController.update)

export default projectRequirementsRoute
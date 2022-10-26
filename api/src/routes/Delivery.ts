import { Router } from "express"
import { ProjectController } from "../controller/Project"

const projectRoute = Router()
const projectController = new ProjectController()

projectRoute.post("/", () => "Rota de criação de entrega")
projectRoute.get("/:projectRequirementId", () => "Rota de listagem por id do requisito")
projectRoute.post("/disable/:projectRequirementId", () => "Rota de desabilitar entrega")
projectRoute.post("/acceptDelivery/:projectRequirementId", () => "Rota de aceitar a entrega")
projectRoute.post("/denyDelivery/:projectRequirementId", () => "Rota de recusar a entrega")

export default projectRoute
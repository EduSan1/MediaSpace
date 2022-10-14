import { Router } from "express";

const projectRequirementRoute = Router()

projectRequirementRoute.get("/", () => "rota de getAll")
projectRequirementRoute.get("/:projectRequirementId", () => "rota de getById")
projectRequirementRoute.post("/", () => "rota de cadsatro")
projectRequirementRoute.post("/disable/:projectRequirementId", () => "rota de desativação")
projectRequirementRoute.delete("/:projectRequirementId", () => "rota de exclução")
projectRequirementRoute.put("/:projectRequirementId", () => "rota de edição")

export default projectRequirementRoute
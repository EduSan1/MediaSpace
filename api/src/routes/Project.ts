import { Router } from "express";
import { ProjectController } from "../controller/Project";

const projectRoute = Router()
const projectController = new ProjectController()

projectRoute.get("/", () => projectController.getAll)
projectRoute.get("/:projectId", () => projectController.getByID)
projectRoute.post("/", () => projectController.create)
projectRoute.post("/disable/:projectId", () => "rota de desativação")
projectRoute.post("/registerInterest/:projectId", () => "rota de registro de interesse do freelancer")
projectRoute.post("/freelancersIntersted/:projectId", () => "rota de listar os freelancer interessados  no projeto")
projectRoute.post("/setFreelancer/:projectId", () => "rota de selecionar freelancer do projeto")
projectRoute.post("/confirm/:projectRequirementId", () => "rota de confirmação de requisito")
projectRoute.post("/startProject/:projectRequirementId", () => "rota de confirmação de inicio de projeto")
projectRoute.put("/:projectId", () => projectController.update)
projectRoute.delete("/:projectId", () => projectController.delete)


export default projectRoute
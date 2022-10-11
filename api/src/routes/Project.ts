import { Router } from "express";

const projectRoute = Router()

projectRoute.get("/", () => "rota de getAll")
projectRoute.get("/:projectId", () => "rota de getById")
projectRoute.post("/", () => "rota de cadsatro")
projectRoute.post("/disable/:projectId", () => "rota de desativação")
projectRoute.post("/registerInterest/:projectId", () => "rota de registro de interesse do freelancer")
projectRoute.post("/freelancersIntersted/:projectId", () => "rota de listar os freelancer interessados  no projeto")
projectRoute.post("/setFreelancer/:projectId", () => "rota de selecionar freelancer do projeto")
projectRoute.post("/confirm/:projectRequirementId", () => "rota de confirmação de requisito")
projectRoute.post("/startProject/:projectRequirementId", () => "rota de confirmação de inicio de projeto")
projectRoute.put("/:projectId", () => "rota de edição")
projectRoute.delete("/:projectId", () => "rota de exclução")


export default projectRoute
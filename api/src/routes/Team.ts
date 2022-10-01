import { Router } from "express";
import { TeamController } from "../controller/Team";

const teamRoute = Router()
const teamController = new TeamController()

teamRoute.get("/", teamController.getAll)
teamRoute.get("/:teamId", teamController.getByID)
// teamRoute.post("/", teamController.create)
teamRoute.post("/freelancer", teamController.createFreelancer)
teamRoute.put("/:teamId", teamController.update)
teamRoute.post("/disable/:teamId", teamController.disable)

export default teamRoute
import { Router } from "express";
import { TeamController } from "../controller/Freelacer";

const freelancerRoute = Router()
const teamController = new TeamController()

freelancerRoute.get("/", teamController.getAll)
freelancerRoute.get("/:freelancerId", teamController.getByID)
// freelancerRoute.post("/", teamController.create)
freelancerRoute.post("/", teamController.create)
freelancerRoute.put("/:freelancerId", teamController.update)
freelancerRoute.post("/disable/:freelancerId", teamController.disable)

export default freelancerRoute
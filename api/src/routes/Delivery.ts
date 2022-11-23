import { Router } from "express"
import { DeliveryController } from "../controller/Delivery"

const deliveryRoute = Router()
const deliveryController = new DeliveryController()

deliveryRoute.post("/create", deliveryController.create)
deliveryRoute.get("/getAll", deliveryController.getAll)
deliveryRoute.get("/:deliveryId", deliveryController.getById)
deliveryRoute.post("/disable/:deliveryId", deliveryController.disable)
deliveryRoute.post("/accept/:deliveryId", deliveryController.accept)
deliveryRoute.post("/deny/:deliveryId", deliveryController.deny)

export default deliveryRoute
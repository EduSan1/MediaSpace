import { Router } from "express"
import { DeliveryController } from "../controller/Delivery"

const deliveryRoute = Router()
const deliveryController = new DeliveryController()

deliveryRoute.post("/", deliveryController.create)
deliveryRoute.get("/:deliveryId", deliveryController.getById)
deliveryRoute.post("/disable/:deliveryId", deliveryController.disable)
deliveryRoute.delete("/:deliveryId", deliveryController.delete)
deliveryRoute.post("/acceptDelivery/:deliveryId", deliveryController.accept)
deliveryRoute.post("/denyDelivery/:deliveryId", deliveryController.deny)

export default deliveryRoute
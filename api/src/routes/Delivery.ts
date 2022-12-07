import { Router } from "express"
import { DeliveryController } from "../controller/Delivery"

const deliveryRoute = Router()
const deliveryController = new DeliveryController()

<<<<<<< HEAD
deliveryRoute.post("/", deliveryController.create)
deliveryRoute.get("/", deliveryController.getAll)
=======
deliveryRoute.post("/create", deliveryController.create)
deliveryRoute.get("/getAll", deliveryController.getAll)
>>>>>>> 0fd725cd510f024f503dea23cb770866887d72be
deliveryRoute.get("/:deliveryId", deliveryController.getById)
deliveryRoute.post("/disable/:deliveryId", deliveryController.disable)
deliveryRoute.post("/accept/:deliveryId", deliveryController.accept)
deliveryRoute.post("/deny/:deliveryId", deliveryController.deny)

export default deliveryRoute
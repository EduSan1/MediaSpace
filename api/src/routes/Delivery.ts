import { Router } from "express"
import { DeliveryController } from "../controller/Delivery"

const deliveryRoute = Router()
const deliveryController = new DeliveryController()

<<<<<<< HEAD
deliveryRoute.post("/create", deliveryController.create)
deliveryRoute.get("/getAll", deliveryController.getAll)
=======
deliveryRoute.post("/", deliveryController.create)
deliveryRoute.get("/", deliveryController.getAll)
>>>>>>> 12fe4e6c757459782848a1d54d1210ca617d6403
deliveryRoute.get("/:deliveryId", deliveryController.getById)
deliveryRoute.post("/disable/:deliveryId", deliveryController.disable)
deliveryRoute.post("/accept/:deliveryId", deliveryController.accept)
deliveryRoute.post("/deny/:deliveryId", deliveryController.deny)

export default deliveryRoute
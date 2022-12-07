import { Router } from "express"
import { DeliveryController } from "../controller/Delivery"

const deliveryRoute = Router()
const deliveryController = new DeliveryController()

<<<<<<< HEAD
<<<<<<< HEAD
deliveryRoute.post("/create", deliveryController.create)
deliveryRoute.get("/getAll", deliveryController.getAll)
=======
deliveryRoute.post("/", deliveryController.create)
deliveryRoute.get("/", deliveryController.getAll)
>>>>>>> 12fe4e6c757459782848a1d54d1210ca617d6403
=======
deliveryRoute.post("/", deliveryController.create)
deliveryRoute.get("/", deliveryController.getAll)
=======
deliveryRoute.post("/create", deliveryController.create)
deliveryRoute.get("/getAll", deliveryController.getAll)
>>>>>>> 0fd725cd510f024f503dea23cb770866887d72be
>>>>>>> a7c3be84ee24b0b6588cbf9410a3a70b136c73ce
deliveryRoute.get("/:deliveryId", deliveryController.getById)
deliveryRoute.post("/disable/:deliveryId", deliveryController.disable)
deliveryRoute.post("/accept/:deliveryId", deliveryController.accept)
deliveryRoute.post("/deny/:deliveryId", deliveryController.deny)

export default deliveryRoute
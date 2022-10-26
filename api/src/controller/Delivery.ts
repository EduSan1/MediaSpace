import { Request, Response } from "express"
import { DeliveryRepository } from "../repository/Delivery"
import { DeliveryService } from "../service/Delivery"
import { DeliveryORM } from "../entity/Delivery"

export class DeliveryController {
    private repository: DeliveryRepository
    private service: DeliveryService

    constructor() {
        this.repository = new DeliveryRepository(),
        this.service = new DeliveryService(this.repository)
    }

    create = (request: Request, response: Response) => {

        this.service.create(request.body).then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
            .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao cadastrar a entrega"))
    }

}
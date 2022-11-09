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
        this.service.create(request.params.userId, request.body).then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
            .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao cadastrar a entrega"))
    } 

    getAll = (request: Request, response: Response) => {
        this.service.list().then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
            .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao listar os requisitos"))
    }

    getById = (request: Request, response: Response) => {
        this.service.getById(request.params.deliveryId).then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
            .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao mostrar a entrega"))
    }

    accept = (request: Request, response: Response) => {
        this.service.accept(request.params.deliveryId).then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
            .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao aceitar a entrega"))
   }

   deny = (request: Request, response: Response) => {
       this.service.deny(request.params.deliveryId).then((res) => {
           response.status(res.statusCode || 200).json(res)
       })
           .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao recusar a entrega"))
   }

    disable = (request: Request, response: Response) => {
        this.service.disable(request.params.deliveryId).then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
            .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao apagar a entrega"))
    }

}
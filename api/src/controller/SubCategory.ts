import SubCategoryDomain from "../domain/SubCategory"
import { SubCategoryRepository } from "../repository/SubCategory"
import { Request, Response } from "express";
import { SubCategoryService } from "../service/SubCategory"

export class SubCategoryController {
    private repository : SubCategoryRepository
    private service : SubCategoryService

    constructor() {
        this.repository = new SubCategoryRepository(),
        this.service = new SubCategoryService(this.repository)
    }

    getAll = (request: Request, response: Response) => {
        this.service.list().then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
        .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao listar as sub-categorias"))
    }

    getByID = (request: Request, response: Response) => {
        this.service.getById(request.params.subCategoryId).then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
        .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao listar a sub-categoria"))
    }

    create = (request: Request, response: Response) => {
        this.service.create( new SubCategoryDomain(request.body)).then((res) => {
            response.json(res)
        })
        .catch(error => response.status(400).send({error : error.message, statusCode: error.status} || "Ocorreu um erro ao criar a sub-categoria"))
    }

    update = (request: Request, response: Response) => {
        this.service.update(request.params.subCategoryId, request.body).then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
        .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao atualizar a sub-categoria"))
     }

     disable = (request: Request, response: Response) => {
        this.service.disable(request.params.subCategoryId).then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
        .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao desativar a sub-categoria"))
  }
}
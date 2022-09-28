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

    create = (request: Request, response: Response) => {
        this.service.create( new SubCategoryDomain(request.body)).then((res) => {
            response.json(res)
        })
        .catch(error => response.status(400).send({error : error.message, statusCode: error.status} || "Ocorreu um erro ao criar o gênero"))
    }

}
import { CategoryRepository } from "../repository/Category"
import { Request, Response } from "express";
import { CategoryService } from "../service/Category"
import CategoryDomain from "../domain/Category";

export class CategoryController {
    private repository : CategoryRepository
    private service : CategoryService

    constructor() {
        this.repository = new CategoryRepository(),
        this.service = new CategoryService(this.repository)
    }

    create = (request: Request, response: Response) => {
        this.service.create( new CategoryDomain(request.body)).then((res) => {
            response.json(res)
        })
        .catch(error => response.status(400).send({error : error.message, statusCode: error.status} || "Ocorreu um erro ao criar o gênero"))
    }

}
import { UserORM } from "../entity/User";
import { userRepository } from "../repository/User"
import { Request, Response } from "express";

export class UserController {

    private _ : any

    constructor() {
        this._ = new userRepository(UserORM)
    }

    getAll = (request: Request, response: Response) => {
        response.json({
            message: "Route get all users!"
        })
    }

    getByID = (request: Request, response: Response) => {
        response.json({
            message: "Route get user by id!"
        })
    }

    create = (request: Request, response: Response) => {
        response.json({
            message: "Route create user!"
        })
    }

    update = (request: Request, response: Response) => {
        return response.json({
            message: "Route edit user!"
        })
    }

    delete = (request: Request, response: Response) => {
        return response.json({
            message: "Route delete user!"
        })
    }

}


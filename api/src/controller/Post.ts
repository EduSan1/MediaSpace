import { Request, Response } from "express"
import { PostRepository } from "../repository/Post"
import { PostService } from "../service/Post"

export class PostController {
    private repository: PostRepository
    private service: PostService

    constructor() {
        this.repository = new PostRepository(),
            this.service = new PostService(this.repository)
    }

    create = (request: Request, response: Response) => {

        this.service.create(request.body).then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
            .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao criar o post"))
    }

    getAll = (request: Request, response: Response) => {
        this.service.list(request.query).then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
            .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao listar os posts"))
    }

    getById = (request: Request, response: Response) => {
        this.service.getById(request.params.postId).then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
            .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao listar o post"))
    }

    update = (request: Request, response: Response) => {
        this.service.update(request.params.postId, request.body).then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
            .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao atualizar o post"))
    }

    disable = (request: Request, response: Response) => {
        this.service.disable(request.params.postId).then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
            .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao apagar o post"))
    }

    createComment = (request: Request, response: Response) => {
        this.service.createComment(request.body).then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
            .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao adicionar o comentario"))
    }

    listCommentByPost = (request: Request, response: Response) => {
        this.service.listComment(request.params.postId).then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
            .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao adicionar o comentario"))
    }

    disableComment = (request: Request, response: Response) => {
        this.service.disableComment(request.params.commentId).then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
            .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao desabilitar o comentario"))
    }
}
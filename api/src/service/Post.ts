import { query } from "express";
import PostDomain from "../domain/Post";
import ProjectDomain from "../domain/Project";
import { PostORM } from "../entity/Post";
import { PostRepository } from "../repository/Post";
import { PostImageRepository } from "../repository/PostImage";

interface IImage {
    url: string
}


export class PostService {
    private _: PostRepository
    private PostImageRepository: PostImageRepository

    constructor(repo: PostRepository) {
        this._ = repo
        this.PostImageRepository = new PostImageRepository()

    }

    create = async (entity: PostDomain) => {
        try {
            const post = await this._.create(entity)

            entity.images?.map(async (image: IImage) => {
                const imageToRegister = {
                    ...image, post: {
                        id: post.id
                    }
                }

                await this.PostImageRepository.create(imageToRegister)
            })
            return {
                message: "Post realizado com sucesso!",
                data: post,
                statusCode: 201,
            };
        } catch (error) {
            return {
                message: "Não foi possivel realizar o post!",
                error: error,
                statusCode: 200,
            };
        }

    }



    list = async (query: any) => {
        try {
            let response = null
            if (query.take !== undefined) {
                const categories = query.categories.split(",")
                const post = await this._.listPerPage(query.take, query.skip, query.search, categories[0] === "" ? [] : categories)

                response = {
                    page: query.page,
                    numberOfPages: Math.ceil((post[post.length - 1] / query.take)),
                    count: post[post.length - 1],
                    data: post
                }
            } else {
                response = await this._.list()
            }

            return {
                message: "posts listados com sucesso",
                data: response,
                statusCode: 200,
            };
        } catch (error) {
            return {
                message: error.message,
                error: error.code,
                statusCode: 400,
            };
        }
    }

    getById = async (id: string) => {
        const post = await this._.getById(id)

        if (post) {
            return {
                message: "post encontrado com sucesso",
                data: post,
                statusCode: 200,
            };
        } else {
            return {
                message: "Não foi possivel encontrar o post",
                statusCode: 200,
            };
        }

    }

    update = async (id: string, entity: PostORM) => {
        try {

            const post = await this._.getById(id)

            if (!post) {
                return {
                    message: "Não foi possivel encontrar o post",
                    statusCode: 200
                };
            }

            for (const [key, value] of Object.entries(entity)) {
                post[key] = value;
            }

            const postUpdated = await this._.update(post)

            return {
                message: "Dados atualizados com sucesso",
                data: postUpdated,
                statusCode: 200
            };

        } catch (error) {
            return {
                message: error.message,
                error: error.code,
                statusCode: 200,
            };
        }
    }

    disable = async (id: string) => {
        try {
            const post = await this._.getById(id);

            if (!post) {
                return {
                    message: "Não foi possivel encontrar o post",
                    statusCode: 200
                };
            }

            post.is_active = false;

            await this._.update(post);

            return {
                message: "post desabilitado com sucesso",
                statusCode: 200
            };

        } catch (error) {
            return {
                message: error.message,
                error: error.code,
                statusCode: 200,
            };
        }
    }

}
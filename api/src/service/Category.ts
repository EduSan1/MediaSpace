import { CategoryORM } from "../entity/Category";
import { CategoryRepository } from "../repository/Category";

export class CategoryService {

    private _: CategoryRepository

    constructor(repo: CategoryRepository) {
        this._ = repo
    }

    create = async (entity: any) => {
        try {
            return await this._.create(entity)
        } catch (error) {
            return {
                message: error.message,
                error: error.code,
                statusCode: 400
            }
        }
    }

    getById = async (id: string) => {
        try {
            return await this._.findById(id);
        } catch (error) {
            return {
                message: error.message,
                error: error.code,
                statusCode: 400,
            };
        }
    };

    list = async () => {
        try {
            return await this._.list();
        } catch (error) {
            return {
                message: error.message,
                error: error.code,
                statusCode: 400,
            };
        }
    };

    update = async (id: string, entity: CategoryORM) => {
        try {
            const entityExists = await this._.findById(id);

            if (!entityExists) {
                return {
                    message: "Não foi possivel encontrar a categoria",
                    statusCode: 200
                };
            }

            for (const [key, value] of Object.entries(entity)) {
                entityExists[key] = value;
            }

            await this._.update(entityExists);

            return {
                message: "Dados atualizados com sucesso",
                statusCode: 200
            };
        } catch (error) {
            return {
                message: error.message,
                error: error.code,
                statusCode: 400,
            };
        }
    };

    disable = async (id: string) => {
        try {
            const entityExists = await this._.findById(id);

            if (!entityExists)
                return {
                    message: "Não foi possivel encontrar a categoria",
                    statusCode: 200
                };

            if (entityExists.is_active === false)
                return {
                    message: "A categoria já está desativada",
                    statusCode: 200
                };

            entityExists.is_active = false;

            await this._.update(entityExists);

            return {
                message: "Categoria desativada com sucesso",
                statusCode: 200
            };
        } catch (error) {
            return {
                message: error.message,
                error: error.code,
                statusCode: 400,
            };
        }
    };

}
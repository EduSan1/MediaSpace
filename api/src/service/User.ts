import { UserORM } from "../entity/User"

export class UserService {
    private _ : any

    constructor(repo : any) {
        this._ = repo
    }

    create  = async (entity: any) => {
        try {
            return await this._.create(entity)
        } catch (error) {
            return {
                message: error.message,
                error: error.code,
                statusCode : 400
            }
        }
    }

    getOne = async (id: string) => {
        try {
            return await this._.listById(id)
        } catch (error) {
            return {
                message: error.message,
                error: error.code,
                statusCode : 400
            }
        }
    }

    list = async () => {
        try {
            return await this._.list()
          
        } catch (error) {
            return {
                message: error.message,
                error: error.code,
                statusCode : 400
            }
        }
    }

    update = async (id : string , entity : UserORM) => {
        try {
            const entityExists = await this._.listById(id)

            if (!entityExists) {
                return {
                    message: "Não foi possivel encontrar o usuário"
                }
            }
            for (const [key, value] of Object.entries(entity)) {
                entityExists[key] = value
            }

            await this._.update(entityExists)

            return {
                message: "Dados atualizados com sucesso",
            }
        } catch (error) {
            return {
                message: error.message,
                error: error.code,
                statusCode : 400
            }
        }
    }

    remove = async (_id: string) => {
        try {

            await this._.remove(_id)

            return {
                message: "Dados removidos com sucesso",
                statusCode : 200
            }
        } catch (error) {
            return {
                message: error.message,
                error: error.code,
                statusCode : 400
            }
        }

    }
}
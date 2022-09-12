export class GenderService<T> {
    private _: any

    constructor(repo: any) {
        this._ = repo
    }

    create = async (entity: any) => {
        try {
            return await this._.create(entity)
        } catch (error) {
            return {
                message: error.message,
                error: error
            }
        }
    }

    getOne = async (id: string) => {
        try {
            return await this._.listById(id)
        } catch (error) {
            return {
                message: error.message
            }
        }
    }

    list = async () => {
        try {
            return await this._.list()
          
        } catch (error) {
            return {
                message: error.message
            }
        }
    }

    update = async (_id: string, entity: T) => {
        try {
            const entityExists = await this._.listById(_id)

            if (!entityExists) {
                return {
                    message: "Não foi possivel encontrar o genero"
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
                message: error.message
            }
        }
    }

    remove = async (_id: string) => {
        try {

            await this._.remove(_id)

            return {
                message: "Dados removidos com sucesso",
            }
        } catch (error) {
            return {
                message: error.message
            }
        }

    }
}
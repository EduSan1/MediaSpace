import * as bcrypt from "bcrypt"
import { response } from "express"
import { PhoneORM } from "../entity/Phone"
import { UserORM } from "../entity/User"
import { PhoneRepository } from "../repository/Phone"

export class UserService {
    private _: any
    private phoneRepo: any

    constructor(repo: any) {
        this._ = repo,
            this.phoneRepo = new PhoneRepository()
    }

    create = async (entity: UserORM) => {
        try {
            // console.log(parseInt(entity.cpf))

            // if (parseInt(entity.cpf) !== 11 || parseInt(entity.cpf) === NaN) {
            //     return {
            //         message: "insira um cpf válido!",
            //         statusCode: 400
            //     }
            // }
            const cpf = await this._.listByVar("cpf", entity.cpf)
            const nickname = await await this._.listByVar("nickname", entity.nickname)
            const mail = await await this._.listByVar("mail", entity.mail)

            if (mail !== null || nickname !== null || cpf !== null)
                return {
                    message: "Não foi possivel cadastrar o usuário pois alguns dados ja estão cadastrados",
                    mail: mail !== null ? true : false,
                    cpf: cpf !== null ? true : false,
                    nickname: nickname !== null ? true : false,
                    statusCode: 400
            }
     

            const hashPassword = await bcrypt.hash(entity.password, 10)
            entity.password = hashPassword
            const user: UserORM = await this._.create(entity)

            if (entity.phone) {
                let phone: PhoneORM = entity.phone
                phone = { ...phone, user: user }
                await this.phoneRepo.create(phone)
            }


            return {
                message: "Usuário cadastrado com sucesso!",
                statusCode: 201
            }

        } catch (error) {
            return {
                message: error.message,
                error: error.code,
                statusCode: 400
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
                statusCode: 400
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
                statusCode: 400
            }
        }
    }

    update = async (id: string, entity: UserORM) => {
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
                statusCode: 400
            }
        }
    }

    remove = async (_id: string) => {
        try {

            await this._.remove(_id)

            return {
                message: "Dados removidos com sucesso",
                statusCode: 200
            }
        } catch (error) {
            return {
                message: error.message,
                error: error.code,
                statusCode: 400
            }
        }

    }
}
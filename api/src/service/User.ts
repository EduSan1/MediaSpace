import * as bcrypt from "bcrypt";
import { response } from "express";
import UserDomain from "../domain/User";
import { PhoneORM } from "../entity/Phone";
import { UserORM } from "../entity/User";
import { PhoneRepository } from "../repository/Phone";
import { Mail } from "./helpers/Mail";
import * as jwt from "jsonwebtoken";
import { APP_SECRET } from "../constants/consts";

export class UserService {
    private _: any;
    private phoneRepo: any;

    constructor(repo: any) {
        (this._ = repo), (this.phoneRepo = new PhoneRepository());
    }

    create = async (entity: UserDomain) => {
        try {

            const regexCpf = new RegExp("^[0-9]{11}$");
            const regexPhone = new RegExp("^9[0-9]{8}$");
            const regexDdd = new RegExp("^[0-9]{1,4}$");

            if (!regexCpf.test(entity.cpf))
                return {
                    message: "insira um cpf válido!",
                    statusCode: 400,
                };
            if (entity.phone) {
                if (!regexPhone.test(entity.phone.phone) || !regexDdd.test(entity.phone.ddd))
                    return {
                        message: "insira um telefone válido!",
                        statusCode: 400,
                    };
            }

            const cpf = await this._.findByWhere("cpf", entity.cpf);
            const nickname = await await this._.findByWhere(
                "nickname",
                entity.nickname
            );
            const mail = await await this._.findByWhere("mail", entity.mail);

            if (mail !== null || nickname !== null || cpf !== null)
                return {
                    message:
                        "Não foi possivel cadastrar o usuário pois alguns dados ja estão cadastrados",
                    mail: mail !== null ? true : false,
                    cpf: cpf !== null ? true : false,
                    nickname: nickname !== null ? true : false,
                    statusCode: 400,
                };

            const hashPassword = await bcrypt.hash(entity.password, 10);
            entity.password = hashPassword;
            const user: UserORM = await this._.create(entity);

            if (entity.phone) {
                let phone: PhoneORM = entity.phone;
                phone = { ...phone, user: user };
                await this.phoneRepo.create(phone);
            }

            const mailer = new Mail()
            await mailer.confirmRegister(entity.mail, entity.first_name)


            return {
                message: "Usuário cadastrado com sucesso!",
                statusCode: 201,
            };
        } catch (error) {
            return {
                message: error.message,
                error: error.code,
                statusCode: 400,
            };
        }
    };

    getOne = async (id: string) => {
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

    list = async (query: any) => {
        try {
            if (query.showDisabled === undefined)
                return await this._.listWhere("is_active", true);
            else
                return await this._.list();
        } catch (error) {
            return {
                message: error.message,
                error: error.code,
                statusCode: 400,
            };
        }
    };

    update = async (id: string, entity: UserORM) => {
        try {
            const entityExists = await this._.findById(id);

            if (!entityExists) {
                return {
                    message: "Não foi possivel encontrar o usuário",
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

    login = async (mail: string, password: string) => {
        try {
            let userDetails = await this._.findByWhere("mail", mail);

            if (await bcrypt.compare(password, userDetails.password)) {

                delete userDetails.password
                
                const userJwt = jwt.sign({userDetails}, APP_SECRET, {expiresIn: '1d',})
                
                return {
                    message: "Login realizado com sucesso",
                    loged: true,
                    statusCode: 200,
                    userDetails: userJwt
                }
            } else {
                return {
                    message: "Senha incorreta",
                    loged: false,
                    statusCode: 200
                }
            }


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

            if (!entityExists) {
                return {
                    message: "Não foi possivel encontrar o usuário",
                    statusCode: 200
                };
            }

            entityExists.is_active = false;

            await this._.update(entityExists);
            return {
                message: "Usuário desabilitado com sucesso",
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

    authentication = async (_id: string) => {
        try {

            const entityExists = await this._.findById(_id);

            if (!entityExists)
                return {
                    message: "Não foi possivel encontrar o usuário",
                    statusCode: 200
                };

            if (entityExists.is_authenticated == true)
                return {
                    message: "Usuário já está autenticado",
                    statusCode: 200
                };

            entityExists.is_authenticated = true;

            await this._.update(entityExists);

            return {
                message: "Usuário autenticado com sucesso!",
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

    remove = async (_id: string) => {
        try {
            await this._.remove(_id);
            return {
                message: "Dados removidos com sucesso",
                statusCode: 200,
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

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

            const mailer = new Mail()




            if (!regexCpf.test(entity.cpf))
                return {
                    message: "insira um cpf válido!",
                    statusCode: 200,
                };
            if (entity.phone) {
                if (!regexPhone.test(entity.phone.phone) || !regexDdd.test(entity.phone.ddd))
                    return {
                        message: "insira um telefone válido!",
                        statusCode: 200,
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
                    statusCode: 200,
                };
         

            const hashPassword = await bcrypt.hash(entity.password, 10);
            entity.password = hashPassword;
            const user: UserORM = await this._.create(entity);

            const hasSend = await mailer.confirmRegister(user.mail, user.id, user.first_name)

            if (!hasSend.accepted) {
                return {
                    message: "Não foi possivel enviar o email",
                    statusCode: 200,
                };
            }

            if (entity.phone) {
                let phone: PhoneORM = entity.phone;
                phone = { ...phone, user: user };
                await this.phoneRepo.create(phone);
            }

            return {
                message: "Usuário cadastrado com sucesso!",
                statusCode: 201,
            };
        } catch (error) {
            return {
                message: error.message,
                error: error.code,
                statusCode: 200,
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
                statusCode: 200,
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
                statusCode: 200,
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

            if (entity.password !== undefined) {
                const hashPassword = await bcrypt.hash(entity.password, 10);
                entity.password = hashPassword;
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
                statusCode: 200,
            };
        }
    };

    login = async (mail: string, password: string) => {
        try {
            let userDetails = await this._.findByWhere("mail", mail);

            if (userDetails === null)
                return {
                    message: "Não foi possivel encontrar o usuário",
                    statusCode: 200
                };

            if (await bcrypt.compare(password, userDetails.password)) {

                delete userDetails.password

                const userJwt = jwt.sign({ userDetails }, APP_SECRET, { expiresIn: '1d', })

                return {
                    message: "Login realizado com sucesso",
                    is_logged: true,
                    statusCode: 200,
                    userDetails: userJwt
                }
            } else {
                return {
                    message: "Senha incorreta",
                    is_logged: false,
                    statusCode: 200
                }
            }


        } catch (error) {
            return {
                message: error.message,
                error: error.code,
                statusCode: 200,
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
                statusCode: 200,
            };
        }
    };

    authentication = async (idJwt: string) => {
        try {

            const user : any = jwt.decode(idJwt)

            const entityExists = await this._.findById(user.id);

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
                statusCode: 200,
            };
        }
    }

    recoverPassword = async (mail: string) => {


        const user = await this._.findByWhere("mail", mail);

        if (user === null)
            return {
                message: "Não foi possivel encontrar o usuário",
                hasSend: false,
                statusCode: 200
            };

        const mailer = new Mail()
        await mailer.recoverPassword(mail, user.id, user.first_name)

        return {
            message: "Email enviado com sucesso",
            hasSend: true,
            statusCode: 200
        };

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
                statusCode: 200,
            };
        }
    };

    changePassword = async (idJwt : string, entity : UserORM) => {
        try {
            const user : any = jwt.decode(idJwt)
            const status = await this.update(user.id, entity)
            return status
        } catch (error) {
            return {
                message: error.message,
                error: error.code,
                statusCode: 200,
            };
        }
    }
}

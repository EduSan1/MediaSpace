import { APP_MAIL_AUTH, APP_SECRET } from "../../constants/consts"
import * as jwt from "jsonwebtoken"
const mailer = require("nodemailer")

export class Mail {


    confirmRegister = async (userMail : string, id : string, userName : string) => {
        try {
            const transporter = await mailer.createTransport({
                service: "gmail",
                auth: APP_MAIL_AUTH,
                secure: true,
                tls: {
                  rejectUnauthorized: false,
                }
            })

            const jwtID = jwt.sign({id : id}, APP_SECRET, {expiresIn: '1d',})

            const mail = await transporter.sendMail({
                from: `"Media Space"`,
                to: userMail,
                subject: "Confirme seu cadastro",
                text: `Olá ${userName}, acesse o link para confirmar seu cadastro! \n http://localhost:3000/confirmRegister?user=${jwtID}`,
            })
    
            return mail
    
        } catch (error) {
            return error
        } 
    }

    recoverPassword = async  (userMail : string, id : string, userName : string) => {
        try {
            const transporter = await mailer.createTransport({
                service: "gmail",
                auth: APP_MAIL_AUTH,
                secure: true,
                tls: {
                  rejectUnauthorized: false,
                }
            })

            const jwtID = jwt.sign({id : id}, APP_SECRET, {expiresIn: '30min',})

            const mail = await transporter.sendMail({
                from: `"Media Space"`,
                to: userMail,
                subject: "Recuperação de senha",
                text: `Olá ${userName}, acesse o link para redefinir sua senha! \n http://localhost:3000/changePassword?user=${jwtID}`,
            })
            return mail

        } catch (error) {
            return error
        } 
    }
}
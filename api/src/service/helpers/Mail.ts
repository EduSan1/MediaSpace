const mailer = require("nodemailer")

export class Mail {


    confirmRegister = async (userMail : string, userName : string) => {

        try {

            const transporter = await mailer.createTransport({
                service: "gmail",
                auth: {
                  user: "mediaspacetcc@gmail.com",
                  pass: "vyollwahbbledeqy",
                },
                secure: true,
                tls: {
                  rejectUnauthorized: false,
                }
            })

            const mail = await transporter.sendMail({
                from: `"Media Space"`,
                to: userMail,
                subject: "Confirme seu cadastro",
                text: `Olá ${userName}, acesse o link para confirmar seu cadastro! \n http://localhost:3000`,
            })
    
            return mail
    
        } catch (error) {
            return error
        }



        

 

    }

}
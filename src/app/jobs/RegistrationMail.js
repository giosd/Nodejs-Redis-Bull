import Mail from "../lib/Mail";

export default {
    key: 'RegistrationMail',
    async handle({ data }) {

        const { user } = data

        await Mail.sendMail({
            from: 'teste queue <queue@queue.com.br>',
            to: `${user.name} <${user.email}>`,
            subject: 'cadastro de user',
            html: `Olá, ${user.name}, seja bem-vindo`
        })
    }
}
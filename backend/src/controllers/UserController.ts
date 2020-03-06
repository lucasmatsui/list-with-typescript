import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
    { id: 1, name: "Lucas Kenzo", email: "lucas-matsui@hotmail.com" },
    { id: 2, name: "Diego", email: "diego@hotmail.com" },
    { id: 3, name: "Ricardo Fernandes" }
];

export default {
    async index(req: Request , res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendEmail({
            to: { name: "Gilberto", email: "gilberto@hotmail.com"},
            message: { subject: "Bem-vindo ao Sistema", body: "Seja bem-vindo!" }
        });

        res.send();
    }
};
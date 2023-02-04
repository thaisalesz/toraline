import { Request, Response } from "express";
import { listUsersService } from "../services/users.services";


const listUsersController = async (req: Request, res: Response): Promise<Response> => {
    const users = await listUsersService()
    return res.status(200).json(users)
}

export { listUsersController }
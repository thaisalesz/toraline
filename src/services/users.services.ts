import { api } from "../api";
import { AppError } from "../errors";
import { IUser } from "../interfaces";


const listUsersService = async ():Promise<IUser[]> => {
    const users = api.get('/users')
    .then(res => res.data)
    .catch(err => {
        throw new AppError(err.data)
    })
    
    return users
}

export { listUsersService }
import axios from "axios";
import { IUser } from "../interfaces";


const listUsersService = async ():Promise<IUser[]> => {
    const users = axios.get('https://mockend.com/juunegreiros/BE-test-api/users')
    .then(res => res.data)
    .catch(err => console.log(err))
    
    return users
}

export { listUsersService }
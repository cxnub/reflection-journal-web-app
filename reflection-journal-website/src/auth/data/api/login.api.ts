import axios from "axios";

import { UserLoginBody, UserLoginResponse } from "../../domain/entities/user.entity";

export async function login(user: UserLoginBody): Promise<UserLoginResponse> {
    const response = await axios.post(`/api/auth/login`, user);

    return response.data;
}

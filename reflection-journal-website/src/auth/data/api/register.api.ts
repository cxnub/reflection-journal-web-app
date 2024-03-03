import axios from 'axios';

import { UserRegisterBody, UserRegisterResponse } from '../../domain/entities/user.entity';

export async function register(user: UserRegisterBody): Promise<UserRegisterResponse> {
    const response = await axios.post(`/api/auth/register`, user);

    return response.data;
}
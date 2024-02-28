import jsonwebtoken from 'jsonwebtoken';
import UserAccount from '../models/user-account';
import jwtConfig from '../config/jwt.config';

function generateToken(account: UserAccount) {
    return jsonwebtoken.sign(
        {
            id: account.id
        },
        jwtConfig.SECRET,
        {
            expiresIn: jwtConfig.EXPIRATION
        }
    );
}

export { generateToken };

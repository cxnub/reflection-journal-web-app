import axios from "axios";

export async function isTokenValid(token: string): Promise<boolean> {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    let valid = true;

    await axios.get(`/api/auth/checkToken`, config)
        .catch((error) => {
            if (error.response) {
                valid = false;
            }
        });

    return valid;
}

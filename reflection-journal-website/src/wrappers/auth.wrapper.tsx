import { createContext, useContext, useState } from "react"
import { RenderNavbar } from "../components/structure/navbar/navbar.component";
import { RenderRoutes } from "../components/structure/render-navigation";
import { isTokenValid } from "../auth/data/api/validate-token.api";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(
    {
        user: { email: "", token: "", isAuthenticated: false },
        authenticate: (email: string, token: string) => { },
        logout: () => { }
    }
);
export const AuthData = () => useContext(AuthContext);


export const AuthWrapper = () => {

    const [user, setUser] = useState({ email: "", token: "", isAuthenticated: false })
    const navigate = useNavigate();

    const authenticate = async (email: string, token: string) => {
        console.log("Authenticating user");
        const authenticated = await isTokenValid(token);
        console.log("User authenticated: ", authenticated);
        
        if (authenticated) {
            console.log("User authenticated");
            setUser({ email: email, token: token, isAuthenticated: true });
            navigate("/home");
        }

        return new Promise((resolve, reject) => {
            if (authenticated) {
                resolve({ email, token, isAuthenticated: true });
            } else {
                reject({ email: "", token: "", isAuthenticated: false });
            }
        })
    }
    const logout = () => {

        setUser({ email: "", token: "", isAuthenticated: false });
        navigate("/login");
    }


    return (

        <AuthContext.Provider value={{ user, authenticate, logout }}>
            <>
                {
                // for testing purposes
                // <RenderNavbar />
                user.isAuthenticated && <RenderNavbar />
                }
                <RenderRoutes />
            </>

        </AuthContext.Provider>

    )

}
import { createContext, useContext, useEffect, useState } from "react";
import { RenderNavbar } from "../components/structure/navbar/navbar.component";
import { RenderRoutes } from "../components/structure/render-navigation";
import { isTokenValid } from "../auth/data/api/validate-token.api";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
    user: { email: "", token: "", isAuthenticated: false },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    authenticate: (_email: string, _token: string) => {},
    logout: () => {},
});
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
    const [user, setUser] = useState({
        email: "",
        token: "",
        isAuthenticated: false,
    });
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            // If token exists in local storage, validate it
            isTokenValid(token)
                .then((authenticated) => {
                    if (authenticated) {
                        setUser({ email: "", token: token, isAuthenticated: true });
                        navigate("/home");
                    } else {
                        logout();
                    }
                })
                .catch(() => {
                    logout();
                });
        }
    }, []);

    const authenticate = async (email: string, token: string) => {
        const authenticated = await isTokenValid(token);

        if (authenticated) {
            localStorage.setItem("token", token);
            // refresh web page
            window.location.reload();
            setUser({ email: email, token: token, isAuthenticated: true });
            navigate("/home");
        }

        return new Promise((resolve, reject) => {
            if (authenticated) {
                resolve({ email, token, isAuthenticated: true });
            } else {
                reject({ email: "", token: "", isAuthenticated: false });
            }
        });
    };

    const logout = () => {
        localStorage.removeItem("token");
        // refresh web page
        window.location.reload();
        setUser({ email: "", token: "", isAuthenticated: false });
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ user, authenticate, logout }}>
            <>
                {
                    user.isAuthenticated && <RenderNavbar />
                }
                <RenderRoutes />
            </>
        </AuthContext.Provider>
    );
};
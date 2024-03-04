import LoginScreen from "../../auth/presentation/screens/login.screen";
import RegisterScreen from "../../auth/presentation/screens/register.screen";

export const nav = [
    { path: "/", name: "Home", element: <h1>Landing</h1>, isMenu: false, isPrivate: false },
    { path: "/register", name: "Register", element: <RegisterScreen />, isMenu: false, isPrivate: false },
    { path: "/login", name: "Login", element: <LoginScreen />, isMenu: false, isPrivate: false },
    { path: "/home", name: "Home", element: <h1>Home</h1>, isMenu: true, isPrivate: true },
    { path: "/analytics", name: "Analytics", element: <h1>Analytics</h1>, isMenu: true, isPrivate: true },
]
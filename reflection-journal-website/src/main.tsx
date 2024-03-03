import React from "react";
import * as ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import RequireAuth from "@auth-kit/react-router/RequireAuth";
import LoginScreen from "./auth/presentation/screens/login.screen";
import RegisterScreen from "./auth/presentation/screens/register.screen";
import AuthProvider from 'react-auth-kit';
import createStore from "react-auth-kit/createStore";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RequireAuth fallbackPath="/login" children={<LoginScreen />} />,
        children: [
        { path: "/", element: <App /> },
        ],
    },
    { path: "/login", element: <LoginScreen /> },
    { path: "/register", element: <RegisterScreen /> },
    { path: "*", element: <h1>Not Found</h1> },
  ]);

const queryClient = new QueryClient();

const store = createStore({
    authName: '_auth',
    authType: 'cookie',
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === 'https:',
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
                <AuthProvider store={store}>
                    <RouterProvider router={router} />
                </AuthProvider>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
    </React.StrictMode>
);

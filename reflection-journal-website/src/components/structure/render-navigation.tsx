import { Navigate, Route, Routes } from "react-router-dom";
import { AuthData } from "../../wrappers/auth.wrapper";
import { nav } from "./navigation";


export const RenderRoutes = () => {

    const { user } = AuthData();

    return (
        <Routes>
            {
                nav.map((r, i) => {
                    // for testing purposes
                    // return <Route key={i} path={r.path} element={r.element} />

                    if (r.isPrivate && user.isAuthenticated) {
                        return <Route key={i} path={r.path} element={r.element} />
                    } else if (!r.isPrivate) {
                        return <Route key={i} path={r.path} element={r.element} />
                    } else return <Route key={i} path={r.path} element={<Navigate to={"/login"} />} />
                })
            }

            <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
    )
}

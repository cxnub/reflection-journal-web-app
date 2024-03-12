import { AuthData } from "../../../wrappers/auth.wrapper"
import "./navbar.css";
import { Button, Dropdown, Navbar } from "react-bootstrap"
import { useState } from "react";
import Sidebar from "./sidebar.component";
import { useNavigate } from "react-router-dom";

export const RenderNavbar = () => {

    const [search, setSearch] = useState<string>("");
    const [ showSidebar, setShowSidebar ] = useState<boolean>(false);

    const { logout } = AuthData()

    const navigate = useNavigate()

    return (
        <>
            <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
            <Navbar className="navbar navbar-expand-lg sticky-top p-0">
                <div className="container-fluid navbar-container p-0">
                    <div className="col col-4 d-flex align-items-center">
                        <Button className="sidebar-btn navbar-btn ms-4" onClick={() => setShowSidebar(!showSidebar)}>
                            <i className="bi bi-list navbar-icon fs-2 m-0 p-0"></i>
                        </Button>
                        <Navbar.Brand className="ms-4 fw-semibold">Reflection Time</Navbar.Brand>
                    </div>
                    <div className="col col-4">
                        <div className="w-100">
                            <div className="input-group search-input-group search-bar">
                                <input
                                    className="form-control border-end-0 border search-input"
                                    type="text"
                                    placeholder="Search..."
                                    value={search}
                                    id="search-input"
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <span className="input-group-text search-icons">
                                    {
                                        search.length > 0 &&
                                        <Button className="clear-btn me-3 ps-2" onClick={() => setSearch("")}>
                                            <i className="bi bi-x-lg" />
                                        </Button>
                                    }
                                    <Button className="search-btn ps-2 pe-2" onClick={() => console.log("click")}>
                                        <i className="bi bi-search" />
                                    </Button>

                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col col-4 d-flex justify-content-end">
                        <Button className="add-journal-btn navbar-btn ms-2 me-2 ps-3 pe-3" onClick={() => navigate("/create_journal")}>
                            <i className="bi bi-plus-square navbar-icon fs-4"></i>
                        </Button>
                        <Button className="notification-btn navbar-btn ms-2 me-2 ps-3 pe-3">
                            <i className="bi bi-bell navbar-icon fs-4"></i>
                        </Button>
                        <Dropdown className="dropdown-container">
                            <Dropdown.Toggle className="caret-off profile-btn navbar-btn ms-2 me-4 ps-3 pe-3">
                                <i className="bi bi-person-circle fs-1 m-0 p-0"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="profile-menu">
                                <Dropdown.Item>Profile</Dropdown.Item>
                                <Dropdown.Item>Settings</Dropdown.Item>
                                <Dropdown.Item onClick={() => logout()}>Log out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </Navbar>
        </>
    )
}

// export const RenderNavbar = () => {

//     const { user, logout } = AuthData()

//     const MenuItem = ({ r }) => {
//         return (
//             <div className="menuItem"><Link to={r.path}>{r.name}</Link></div>
//         )
//     }
//     return (
//         <div className="menu">
//             {nav.map((r, i) => {

//                 if (!r.isPrivate && r.isMenu) {
//                     return (
//                         <MenuItem key={i} r={r} />
//                     )
//                 } else if (user.isAuthenticated && r.isMenu) {
//                     return (
//                         <MenuItem key={i} r={r} />
//                     )
//                 } else {
//                     return false;
//                 }
//             })}

//             {user.isAuthenticated ?
//                 <div className="menuItem"><Link to={'/login'} onClick={logout}>Log out</Link></div>
//                 :
//                 <div className="menuItem"><Link to={'login'}>Log in</Link></div>}
//         </div>
//     )
// }
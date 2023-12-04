import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Strona domowa</Link>
                    </li>
                    <li>
                        <Link to='blogs'>Blogi</Link>
                    </li>
                    <li>
                        <Link to='Contact'>Kontakt</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Layout;
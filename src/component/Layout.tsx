import NavBar from "./NavBar.tsx";
import {Outlet} from "react-router-dom";
import React from "react";

const Layout: React.FC = () => {
    return(
        <>
            <NavBar/>
            <main style={{ marginTop: '56px' }}>
                <Outlet/>
            </main>
        </>
    )
};

export default Layout;
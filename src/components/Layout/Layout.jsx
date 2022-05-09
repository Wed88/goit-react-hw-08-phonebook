import { Navigation } from "components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import { Header, Nav } from "./Layout.styled";


export const Layout = () => {
    return (
        <>
            <Header>
                <Nav>
                    <Navigation />
                    {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */} 
                </Nav>
            </Header>
            <Outlet />
            <GlobalStyle />
        </>
    )
}
import { useSelector } from "react-redux";
import { Navigation } from "components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import { Header, Nav } from "./Layout.styled";
import { AuthNav } from "components/AuthNav/AuthNav";
import { UserMenu } from "components/UserMenu/UserMenu";
import authSelectors from '../../redux/auth/auth-selectors'


export const Layout = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

    return (
        <>
            <Header>
                <Nav>
                    <Navigation />
                    {isLoggedIn ? <UserMenu /> : <AuthNav />} 
                </Nav>
            </Header>
            <Outlet />
            <GlobalStyle />
        </>
    )
}
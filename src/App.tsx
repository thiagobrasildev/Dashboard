import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Logo } from "./components/Logo";
import { MenuFooter } from "./components/MenuFooter";
import { Navbar } from "./components/Navbar";
import { UserCard } from "./components/UserCard";
import { ThemeProvider } from "styled-components";
import * as S from "./AppStyles";
import { GlobalStyles } from "./styles/GlobalStyles";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import { ToggleTheme } from "./components/ToggleTheme";

export const App = () => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const handleMenuToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <S.ContainerMain>
        <S.Header>
          <S.MenuMobile onClick={handleMenuToggle}>
            <FaBars color="#fff" size={18} />
            Menu
          </S.MenuMobile>
          <ToggleTheme toggle={toggleTheme} />
          <Logo />
        </S.Header>
        {toggleMenu && (
          <S.Modal onClick={handleMenuToggle} title="close side menu">
            <S.SidebarMobile onClick={(e) => e.stopPropagation()} title="">
              <UserCard />
              <Navbar
                closeMenu={toggleMenu}
                handleMenuToggle={handleMenuToggle}
              />
            </S.SidebarMobile>
          </S.Modal>
        )}
        <S.Sidebar>
          <UserCard />
          <Navbar />
        </S.Sidebar>

        <div className="content-page">
          <Outlet />
        </div>

        <div className="menu-footer">
          <MenuFooter
            title="Demographic"
            colorBar="#4caf50"
            links={["Language", "Country", "City"]}
          />
          <MenuFooter
            title="System"
            colorBar="#f44336"
            links={["Browser", "OS", "More"]}
          />
          <MenuFooter
            title="Target"
            colorBar="#ff9800"
            links={["Users", "Active", "Geo", "Interests"]}
          />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </S.ContainerMain>
    </ThemeProvider>
  );
};

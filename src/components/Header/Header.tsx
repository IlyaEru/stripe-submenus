import {
  StyledHeaderContainer,
  StyledHeaderLogoContainer,
  StyledHeaderNav,
  StyledHeaderNavContainer,
  StyledHeaderNavListItem,
  StyledHeaderNavSignInButton,
  StyledHeaderShowNavButton,
} from "./Header.style";
import logo from "../../assets/logo.svg";
import navLinks from "./Header.constants";

import HeaderNavDropdown from "./HeaderNavDropdown";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import MobileNav from "../MobileNav/MobileNav";

export default function Header() {
  const [dropdownNavValues, setDropdownNavValues] = useState({
    isOpen: false,
    activeNav: "",
  });
  const [isActiveNav, setIsActiveNav] = useState(false);

  const handleNavLinkHover = (hoveredLink: string) => {
    setDropdownNavValues({
      isOpen: true,
      activeNav: hoveredLink,
    });
  };

  const handleNavLinkHoverOut = () => {
    setTimeout(() => {
      setDropdownNavValues({
        isOpen: false,
        activeNav: "",
      });
    }, 150);
  };

  return (
    <StyledHeaderContainer onMouseLeave={handleNavLinkHoverOut}>
      <StyledHeaderNavContainer>
        <StyledHeaderLogoContainer>
          <img src={logo} alt="logo" />
        </StyledHeaderLogoContainer>
        <StyledHeaderNav>
          <ul>
            {navLinks.map((link, index) => (
              <StyledHeaderNavListItem
                className={
                  dropdownNavValues.activeNav === link.page ? "active" : ""
                }
                onMouseOver={() => handleNavLinkHover(link.page)}
                key={index}
              >
                {link.page}
              </StyledHeaderNavListItem>
            ))}
            <HeaderNavDropdown
              {...dropdownNavValues}
              handleNavLinkHoverOut={handleNavLinkHoverOut}
            />
          </ul>
        </StyledHeaderNav>
        <StyledHeaderNavSignInButton>Sign In {">"}</StyledHeaderNavSignInButton>
        <StyledHeaderShowNavButton>
          <FaBars onClick={() => setIsActiveNav(true)} />
        </StyledHeaderShowNavButton>
        <MobileNav isActiveNav={isActiveNav} setIsActiveNav={setIsActiveNav} />
      </StyledHeaderNavContainer>
    </StyledHeaderContainer>
  );
}

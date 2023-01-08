import React from "react";
import { StyledHeaderLogoContainer } from "../Header/Header.style";
import {
  StyledMobileNavCloseButton,
  StyledMobileNavContainer,
  StyledMobileNavFooter,
  StyledMobileNavFooterButton,
  StyledMobileNavHeader,
  StyledMobileNavList,
  StyledMobileNavListItem,
  StyledMobileNavLogo,
  StyledMobileSubNavListItem,
} from "./MobileNav.style";

import mobileLogo from "../../assets/mobile-logo.svg";
import navLinks from "../Header/Header.constants";

interface MobileNavProps {
  setIsActiveNav: (isActiveNav: boolean) => void;
  isActiveNav: boolean;
}

export default function MobileNav({
  setIsActiveNav,
  isActiveNav,
}: MobileNavProps) {
  return (
    <StyledMobileNavContainer className={isActiveNav ? "active" : ""}>
      <StyledMobileNavHeader>
        <StyledHeaderLogoContainer>
          <StyledMobileNavLogo
            src={mobileLogo}
            alt="logo"
            className="mobile-logo"
          />
        </StyledHeaderLogoContainer>
        <StyledMobileNavCloseButton onClick={() => setIsActiveNav(false)}>
          X
        </StyledMobileNavCloseButton>
      </StyledMobileNavHeader>
      <StyledMobileNavList>
        {navLinks.map((link, index) => (
          <StyledMobileNavListItem key={index}>
            <h2>{link.page}</h2>
            <ul>
              {link.links.map((subLink, index) => (
                <StyledMobileSubNavListItem key={index}>
                  {subLink.icon}
                  <a href={subLink.url}>{subLink.label}</a>
                </StyledMobileSubNavListItem>
              ))}
            </ul>
          </StyledMobileNavListItem>
        ))}
      </StyledMobileNavList>
      <StyledMobileNavFooter>
        <StyledMobileNavFooterButton>Sign In {">"}</StyledMobileNavFooterButton>
      </StyledMobileNavFooter>
    </StyledMobileNavContainer>
  );
}

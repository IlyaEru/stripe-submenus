import React from "react";
import {
  StyledHeaderNavDropdown,
  StyledHeaderNavDropdownHeader,
  StyledHeaderNavDropdownList,
  StyledHeaderNavDropdownListItem,
} from "./Header.style";
import navLinks from "./Header.constants";

interface HeaderNavDropdownProps {
  isOpen: boolean;
  activeNav: string;
  handleNavLinkHoverOut: () => void;
}

export default function HeaderNavDropdown({
  isOpen,
  activeNav,
  handleNavLinkHoverOut,
}: HeaderNavDropdownProps) {
  return (
    <StyledHeaderNavDropdown
      className={isOpen ? "active" : ""}
      onMouseLeave={(e) => {
        if (e.clientY < e.currentTarget.getBoundingClientRect().top + 20) {
          return;
        }

        handleNavLinkHoverOut();
      }}
    >
      <StyledHeaderNavDropdownHeader>{activeNav}</StyledHeaderNavDropdownHeader>
      <StyledHeaderNavDropdownList>
        {navLinks
          .find((link) => link.page === activeNav)
          ?.links.map((subLink, index) => (
            <StyledHeaderNavDropdownListItem key={index}>
              {subLink.icon}
              {subLink.label}
            </StyledHeaderNavDropdownListItem>
          ))}
      </StyledHeaderNavDropdownList>
    </StyledHeaderNavDropdown>
  );
}

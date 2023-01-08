import styled from "styled-components";
import { StyledButton } from "../../style/globalStyle";

export const StyledHeaderContainer = styled.header`
  display: flex;
  padding: 0 1rem;
  margin-bottom: 2rem;
`;

export const StyledHeaderNavContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0.5rem 0.5rem;
`;
export const StyledHeaderNav = styled.nav`
  display: flex;
  align-items: center;
  position: relative;
  > ul {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    display: none;
  }
`;

export const StyledHeaderNavListItem = styled.li`
  position: relative;
  font-weight: 500;
  padding: 0 2rem;
  color: ${({ theme }) => theme.colors.white};
  text-transform: capitalize;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  ::after {
    opacity: 0;
    content: "";
    position: absolute;
    top: 170%;
    left: 45%;
    width: 15px;
    height: 15px;
    display: block;
    background: white;
    transform: rotate(45deg);
  }
  &.active {
    ::after {
      opacity: 1;
    }
  }
`;

export const StyledMobileHeaderNav = styled.nav`
  position: absolute;
  max-height: 0;
  width: 20rem;
  right: 1rem;
  top: 1rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
  &.active {
    max-height: 100%;
  }
  .mobile-logo {
    height: 1.4rem;
  }
  > ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
  }
`;

export const StyledMobileHeaderNavHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

export const StyledMobileHeaderNavListItem = styled.li`
  font-weight: 500;
  padding: 1rem 1.1rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  text-transform: capitalize;
`;

export const StyledMobileHeaderNavCloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
`;

export const StyledHeaderNavSignInButton = styled(StyledButton)`
  border-radius: 4rem;
  height: 1.8rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    display: none;
  }
`;
export const StyledHeaderShowNavButton = styled(StyledButton)`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.transparentWhite};
  border-radius: 4rem;
  height: 1.8rem;
  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.transparentWhite2};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    display: none;
  }
  @media (width: ${({ theme }) => theme.breakpoints.small}) {
    display: block;
  }
`;

export const StyledHeaderNavDropdown = styled.div`
  opacity: 0;
  position: absolute;
  top: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  padding: 1rem 3rem 1rem 1rem;
  z-index: 100;
  margin-top: 1rem;
  &.active {
    opacity: 1;
  }
`;
export const StyledHeaderNavDropdownHeader = styled.h2`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.black};
  text-shadow: none;
`;

export const StyledHeaderNavDropdownList = styled.ul`
  display: flex;
`;

export const StyledHeaderNavDropdownListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.primaryDarkBlue};
  text-transform: capitalize;
  cursor: pointer;
`;

export const StyledHeaderLogoContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.2s linear;
  :hover {
    opacity: 0.6;
  }
  img {
    height: 2rem;
  }
`;

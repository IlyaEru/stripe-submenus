import styled from "styled-components";
import { StyledButton } from "../../style/globalStyle";

export const StyledMobileNavContainer = styled.nav`
  position: absolute;
  max-height: 0;
  width: 20rem;
  box-shadow: ${({ theme }) => theme.darkShadow};
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
  @media (max-width: ${({ theme }) => theme.breakpoints.xSmall}) {
    width: 90%;
    left: 50%;
    transform: translate(-50%);
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    display: none;
  }
`;

export const StyledMobileNavHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

export const StyledMobileNavCloseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.1rem;
  font-weight: 700;
`;

export const StyledMobileNavLogo = styled.img``;
export const StyledMobileNavList = styled.ul`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  flex-direction: column;
`;
export const StyledMobileNavListItem = styled.li`
  width: 100%;
  h2 {
    font-weight: 600;
    font-size: 1.2rem;
    padding: 1rem 1.1rem;
    text-transform: capitalize;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    padding: 1rem 1.1rem;
  }
`;

export const StyledMobileSubNavListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  a {
    text-transform: capitalize;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primaryDarkBlue};
  }
`;

export const StyledMobileNavFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const StyledMobileNavFooterButton = styled(StyledButton)`
  border-radius: 4rem;
  height: 1.8rem;
  background-color: #635bff;
`;

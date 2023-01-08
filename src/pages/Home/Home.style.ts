import styled from "styled-components";
import hero from "../../assets/hero.svg";
import { StyledButton } from "../../style/globalStyle";

export const StyledHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 55%;
    top: 0;
    left: 0;
    background-image: url(${hero});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    z-index: -1;
    @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
      background-size: contain;
      height: 100%;
    }
  }
`;

export const StyledHomeContentContainer = styled.main`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.smallMaxWidth};
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-auto-flow: column;
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    grid-template-columns: 1fr;
  }
`;

export const StyledHomeContent = styled.section`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

export const StyledHomeContentHero = styled.h1`
  color: #3a3a3a;
  font-family: "montserrat", sans-serif;
  font-size: clamp(2rem, 8vw, 4rem);
  font-weight: 700;
`;

export const StyledHomeContentText = styled.p`
  padding: 0 2rem 0 0;
  color: #425466;
  line-height: 1.5rem;
  max-width: ${({ theme }) => theme.smallMaxWidth};
`;

export const StyledHomeContentFooter = styled.footer`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const StyledHomeContentFooterPrimaryLink = styled(StyledButton).attrs({
  as: "a",
})`
  background-color: #0a2540;
  border-radius: 4rem;
  padding: 0.5rem 1rem;
  :hover,
  :focus {
    background-color: #0a2540;

    opacity: 0.6;
  }
`;
export const StyledHomeContentFooterSecondaryLink = styled.a`
  color: #0a2540;
  font-weight: 500;
  cursor: pointer;
  :hover,
  :focus {
    opacity: 0.6;
  }
`;

export const StyledHomeContentPhoneImgContainer = styled.div`
  img {
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    display: none;
  }
`;

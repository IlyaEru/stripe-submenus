import styled, { createGlobalStyle } from 'styled-components';

interface Props {
  width?: string;
  height?: string;
  color?: string;
  bg?: string;
  size?: string;
}

export const GlobalStyle = createGlobalStyle`
   *, ::after,
::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
font-family: 'heebo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
:root{
  font-size: clamp(0.5rem, calc(.6rem + 1vw), 1.2rem);
}

h1,
h2,
h3,
h4 {
  
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
}
body{
  width:  100%;
  min-height:  100vh;
  background-color: ${({ theme }) => theme.colors.lightGrey};
}
ul {
  list-style-type: none;
}
`;

export const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 50px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 0 30px;
  }
`;

export const StyledButton = styled.button<Props>`
  border-radius: 4px;
  padding: ${({ size }) => (size === 'small' ? '6px 12px' : '10px 16px')};
  display: flex;
  flex: none;
  align-items: center;
  font-weight: 500;
  justify-content: center;
  color: ${({ color, theme }) => (color ? color : theme.colors.white)};
  background: ${({ bg, theme }) => (bg ? bg : theme.colors.blueStage1)};
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s linear;
  font-size: ${({ size }) => (size === 'small' ? '0.8rem' : '1rem')};
  :hover,
  :focus {
    background: ${({ bg, theme }) => (bg ? bg : theme.colors.blueStage2)};
  }
  :active {
    background: ${({ bg, theme }) => (bg ? bg : theme.colors.blueStage3)};
  }
`;

export const StyledOutlineButton = styled(StyledButton)<Props>`
  background: transparent;
  border: 1px solid
    ${({ color, theme }) => (color ? color : theme.colors.blueStage1)};
  color: ${({ color, theme }) => (color ? color : theme.colors.blueStage1)};
  :hover,
  :focus {
    background: ${({ color, theme }) =>
      color ? color : theme.colors.blueStage2};
    color: ${({ theme }) => theme.colors.white};
  }
  :active {
    background: ${({ color, theme }) =>
      color ? color : theme.colors.blueStage3};
  }
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.lightShadow};
  border-radius: 0.4rem;
`;
export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  th,
  td {
    padding: 0.4rem;
    text-align: left;
    border: 1px solid #ddd;
  }
`;

export const StyledMainHeading = styled.h1`
  font-size: clamp(2rem, 8vw, 3rem);
  color: ${({ color, theme }) =>
    color ? color : theme.colors.primaryDarkBlue};
  margin-bottom: 2rem;
  width: 100%;
  text-align: center;
`;

export const StyledSection = styled.section`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 0 70px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xSmall}) {
    padding: 0 30px;
  }
`;

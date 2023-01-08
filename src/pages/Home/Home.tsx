import Header from '../../components/Header/Header'
import { StyledHomeContainer, StyledHomeContent, StyledHomeContentContainer, StyledHomeContentFooter, StyledHomeContentFooterPrimaryLink, StyledHomeContentFooterSecondaryLink, StyledHomeContentHero, StyledHomeContentPhoneImgContainer, StyledHomeContentText } from './Home.style'
import phoneImg from '../../assets/phone.svg'

export default function Home() {
  return (
    <StyledHomeContainer>
        <Header />
        <StyledHomeContentContainer >
            <StyledHomeContent >
              <StyledHomeContentHero >
              Financial infrastructure for the internet
              </StyledHomeContentHero>
              <StyledHomeContentText >

      Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.
    
              </StyledHomeContentText>
              <StyledHomeContentFooter >
                <StyledHomeContentFooterPrimaryLink>
                  Start now {'>'}
                </StyledHomeContentFooterPrimaryLink>
                <StyledHomeContentFooterSecondaryLink >
                  Contact Sales {'>'}
                </StyledHomeContentFooterSecondaryLink>
              </StyledHomeContentFooter>
            </StyledHomeContent>
            <StyledHomeContentPhoneImgContainer >
                <img src={phoneImg} alt = "phone" />
            </StyledHomeContentPhoneImgContainer>
        </StyledHomeContentContainer>
    </StyledHomeContainer>
  )
}

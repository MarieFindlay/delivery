import React from "react";
import GLOBALS from './../../../globals';
import { SMainTitle, SSubTitle, callToActionDestination } from './../../commons/StyledComponents';
import { SHeroContainer, SHeroImage, SButtonContainer, SSubTitleContainer, SHeroImageContainer, SHeroButton, SHeroTextContainer } from './styled';

const Hero = () => {
    return (
        <SHeroContainer color={GLOBALS.COLORS.PURPLE}>
            <SHeroTextContainer>
                <SMainTitle>juggle.</SMainTitle>
                <SSubTitleContainer>
                    <SSubTitle>All your essentials – to your door, on your schedule.</SSubTitle>
                    <SSubTitle>We’ll take care of the boring stuff, so you can dream of bigger things.</SSubTitle>
                </SSubTitleContainer>
                <SButtonContainer>
                    <SHeroButton href={'#' + callToActionDestination}>Get started</SHeroButton>
                </SButtonContainer>
            </SHeroTextContainer>
            <SHeroImageContainer>
                <SHeroImage src={GLOBALS.IMAGES.WOMAN_HERO}/>
            </SHeroImageContainer>
        </SHeroContainer>
    )
}

export default Hero;
import React from "react";
import GLOBALS from './../../../globals';
import { SMainTitle, SSubTitle, callToActionDestination } from './../../commons/StyledComponents';
import { Button } from './../../commons/Button';
import { SHeroContainer, SHeroImage, SButtonContainer, SSubTitleContainer, SHeroImageContainer, SHeroButton } from './styled';

const Hero = () => {
    return (
        <SHeroContainer color={GLOBALS.COLORS.PURPLE}>
            <SMainTitle>juggle.</SMainTitle>
            <SSubTitleContainer>
                <SSubTitle>All your essentials – to your door, on your schedule.</SSubTitle>
                <SSubTitle>We’ll take care of the boring stuff, so you can dream of bigger things.</SSubTitle>
            </SSubTitleContainer>
            <SHeroImageContainer>
                <SHeroImage src={GLOBALS.IMAGES.WOMAN_HERO}/>
            </SHeroImageContainer>
            <SButtonContainer>
                <SHeroButton href={'#' + callToActionDestination}>Build my box</SHeroButton>
            </SButtonContainer>
        </SHeroContainer>
    )
}

export default Hero;
import React from "react";
import GLOBALS from './../../../globals';
import { SMainTitle, SSubTitle } from './../../commons/StyledComponents';
import { Button } from './../../commons/Button';
import { SHeroContainer, SHeroImage, SButtonContainer } from './styled';

const Hero = () => {
    return (
        <SHeroContainer color={GLOBALS.COLORS.PURPLE}>
            <SMainTitle>juggle.</SMainTitle>
            <SSubTitle>All your essentials – to your door, on your schedule.</SSubTitle>
            <SSubTitle>We’ll take care of the boring stuff, so you can dream of bigger things.</SSubTitle>
            <SHeroImage src={GLOBALS.IMAGES.WOMAN_HERO}/>
            <SButtonContainer>
                <Button handleClick={() => console.log('click')} size={'large'} color={GLOBALS.COLORS.BEIGE} text={'Build my box'}/>
            </SButtonContainer>
        </SHeroContainer>
    )
}

export default Hero;
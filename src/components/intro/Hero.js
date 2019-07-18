import React from "react";
import GLOBALS from './../../globals'
import styled from 'styled-components'
import { SMainTitle, SSubTitle, SContainer } from './../commons/StyledComponents'
import { Button } from './../commons/Button';

export const Hero = () => {
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

const SHeroContainer = styled(SContainer)`
    height: 80vh;
    position: relative;
`;

const SHeroImage = styled.img`
    height: 20vh;
    object-fit: cover;
    align-self: flex-end;
    margin-top: ${GLOBALS.DIMENSIONS.RESP_MARGIN};
    border-radius: 100px;
`

const SButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate3d(-50%, 50%, 0);
`
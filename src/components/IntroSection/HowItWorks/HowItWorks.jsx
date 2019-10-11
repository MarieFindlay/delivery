import React from "react";
import { SHowItWorksContainer, SParagraph, SHowItWorksTitle, SHowItWorksStepsContainer, SStepContainer, SStepIcon, SStepImageContainer } from './styled';
import GLOBALS from './../../../globals';

const HowItWorks = () => {
    return (
        <SHowItWorksContainer>
            <SHowItWorksTitle>How it works.</SHowItWorksTitle>
            <SHowItWorksStepsContainer>
                <SStepContainer>
                    <SStepImageContainer color={GLOBALS.COLORS.GREEN}>
                        <SStepIcon src={GLOBALS.IMAGES.PHONE}/>
                    </SStepImageContainer>
                    <SParagraph>1. Tell us what you need, how often you need it and when you want it delivered.</SParagraph>
                </SStepContainer>
                <SStepContainer>
                    <SStepImageContainer color={GLOBALS.COLORS.PINK}>
                        <SStepIcon src={GLOBALS.IMAGES.BOX_DOG}/>
                    </SStepImageContainer>
                    <SParagraph>2. We deliver your box of essentials regularly and reliably on days that suit you.</SParagraph>
                </SStepContainer>
                <SStepContainer>
                    <SStepImageContainer color={GLOBALS.COLORS.ORANGE}>
                        <SStepIcon src={GLOBALS.IMAGES.LAUGHING_WOMAN}/>
                    </SStepImageContainer>
                    <SParagraph>3. Live your life – free from niggly admin!</SParagraph>
                </SStepContainer>
            </SHowItWorksStepsContainer>
        </SHowItWorksContainer>
    )
}

export default HowItWorks;
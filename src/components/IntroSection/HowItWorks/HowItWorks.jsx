import React from "react";
import { SContainer } from './../../commons/StyledComponents';
import { SHowItWorksContainer, SParagraph, SHowItWorksTitle, SHowItWorksStepsContainer, SStepContainer, SStepIcon } from './styled';
import GLOBALS from './../../../globals';

const HowItWorks = () => {
    return (
        <SHowItWorksContainer>
            <SHowItWorksTitle>How it works.</SHowItWorksTitle>
            <SHowItWorksStepsContainer>
                <SStepContainer>
                    <SStepIcon src={GLOBALS.IMAGES.LIST_ICON}/>
                    <SParagraph>1. Tell us what you need, how often you need it and when you want it delivered.</SParagraph>
                </SStepContainer>
                <SStepContainer>
                    <SStepIcon src={GLOBALS.IMAGES.BOX_ICON}/>
                    <SParagraph>2. We deliver your box of essentials regularly and reliably on days that suit you.</SParagraph>
                </SStepContainer>
                <SStepContainer>
                    <SStepIcon src={GLOBALS.IMAGES.DANCING_ICON}/>
                    <SParagraph>3. Live your life – free from niggly admin!</SParagraph>
                </SStepContainer>
            </SHowItWorksStepsContainer>
        </SHowItWorksContainer>
    )
}

export default HowItWorks;
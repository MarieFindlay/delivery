import React from "react";
import { SContainer } from './../../commons/StyledComponents';
import { SParagraph, SHowItWorksTitle } from './styled';

const HowItWorks = () => {
    return (
        <SContainer>
            <SHowItWorksTitle>How it works.</SHowItWorksTitle>
            <SParagraph>1. Tell us what you need, how often you need it and when you want it delivered.</SParagraph>
            <SParagraph>2. We deliver your box of essentials regularly and reliably on days that suit you.</SParagraph>
            <SParagraph>3. Live your life – free from niggly admin!</SParagraph>
        </SContainer>
    )
}

export default HowItWorks;
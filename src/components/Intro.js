import React from "react";
import { SContainer, SPageTitle, SText } from './commons/StyledComponents';

export const Intro = () => {
    return (
        <SContainer>
            <SPageTitle>how it works.</SPageTitle>
            <SText>1. Tell us what you need, how often you need it and when you want it delivered.</SText>
            <SText>2. We deliver your box of essentials regularly and reliably on days that suit you.</SText>
            <SText>3. Live your life – free from niggly admin!</SText>
        </SContainer>
    )
}
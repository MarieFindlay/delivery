import React from "react";
import GLOBALS from './../../globals'
import styled from 'styled-components'
import { SContainer, SPageTitle, SText } from './../commons/StyledComponents';

export const Intro = () => {
    return (
        <SContainer>
            <SPageTitle>How it works.</SPageTitle>
            <SParagraph>1. Tell us what you need, how often you need it and when you want it delivered.</SParagraph>
            <SParagraph>2. We deliver your box of essentials regularly and reliably on days that suit you.</SParagraph>
            <SParagraph>3. Live your life – free from niggly admin!</SParagraph>
        </SContainer>
    )
}

const SParagraph = styled(SText)`
    margin-top: 0.5vh;
    line-height: 1.5;
    text-align: left;
`
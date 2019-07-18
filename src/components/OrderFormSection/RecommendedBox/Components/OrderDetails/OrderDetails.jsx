import React from "react";
import { SText } from './../../../../commons/StyledComponents';
import { SOrderDetails } from './styled';

export const OrderDetails = ({ items }) => {
    return (
        <SOrderDetails>
            {items.map(item => {
                return <SText>{item.amount} {item.quantifiedName}</SText>
            })}
        </SOrderDetails>
    )
}
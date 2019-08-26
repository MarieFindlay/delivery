import React from "react";
import { SOrderDetails, SItem } from './styled';

export const OrderDetails = ({ items }) => {
    return (
        <SOrderDetails>
            {items.map(item => {
                return <SItem>{item}</SItem>
            })}
        </SOrderDetails>
    )
}
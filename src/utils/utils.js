export const getBasketItemsArrFromObj = itemQuantitiesById => {
    const basketItemsArr = Object.keys(itemQuantitiesById);
    const basketItemsArrNum = basketItemsArr.map(string => parseInt(string));
    return basketItemsArrNum;
}

export const getItemById = (id, availableItems) => {
    return availableItems.find(item => item.id === id)
}

export const getQuantityById = (id, itemQuantitiesById ) => itemQuantitiesById[id];
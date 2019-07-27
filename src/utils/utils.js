export const getBasketItemIdArrFromObj = itemQuantitiesById => {
    const basketItemsArr = Object.keys(itemQuantitiesById);
    const basketItemsArrNum = basketItemsArr.map(string => parseInt(string));
    return basketItemsArrNum;
}

export const getItemById = (id, availableItems) => {
    return availableItems.find(item => item.id === id)
}

export const getQuantityById = (id, itemQuantitiesById ) => itemQuantitiesById[id];

export const humanizeNumber = (number) => {
    if(number % 100 >= 11 && number % 100 <= 13)
        return number + "th";
    
    switch(number % 10) {
        case 1: return number + "st";
        case 2: return number + "nd";
        case 3: return number + "rd";
        default: return number + "th";
    }
}

const apiKey = 'gaWz7iI9EUmgHpGp-ku5mQ18850';

export const getAddressesByPostcode = async (postcode) => {
    const response = await fetch(`https://api.getaddress.io/find/${postcode}?api-key=${apiKey}`);
    const result = await response.json();
    return result.addresses;
}
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

export const getNthDayFromDate = date => {
    const nthDay = humanizeNumber(parseInt(date.toString().slice(8,10),10));
    return nthDay;
}

const GET_ADDRESS_API_KEY = 'gaWz7iI9EUmgHpGp-ku5mQ18850';

export const getAddressesByPostcode = async (postcode) => {
    const response = await fetch(`https://api.getaddress.io/find/${postcode}?api-key=${GET_ADDRESS_API_KEY}`);
    const result = await response.json();
    return result.addresses;
}



export const convertToUSEasternFormat = (timestamp: string | number | Date, includeTime = false) => {
    // Check if timestamp is null or undefined
    if (!timestamp) {
        return '-';
    }

    const usEasternOffset = -5.0;
    let date = new Date(timestamp);

    // Convert to US Eastern Time
    date.setTime(date.getTime() + usEasternOffset * 60 * 60 * 1000);

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    // Format date as MM/dd/yyyy
    let formattedDate = `${month < 10 ? '0' + month : month}/${day < 10 ? '0' + day : day}/${year}`;

    if (includeTime) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        formattedDate += ` ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
    }

    return formattedDate;
}



export const convertToDecimalAmount = (amount: any) => {
    // Handle non-numeric values
    if (isNaN(amount)) {
        console.error('Invalid value provided to convertToDecimalAmount:', amount);
        return '₹ 0.00';
    }

    let decimalAmount: any = Number(amount).toFixed(2);

    // Handle negative numbers
    if (decimalAmount < 0) {
        return '-₹ ' + Math.abs(decimalAmount);
    }

    return '₹ ' + decimalAmount;
}

export const formatCurrency = (amount: string, currencySymbol = "$", decimalCount = 2, decimal = ".", thousands = ",") => {
    try {
        // Check if amount is null or undefined
        if (!amount) {
            return '-';
        }

        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = Number(amount) < 0 ? "-" : "";

        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        return currencySymbol + negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(Number(amount) -  Number(i)).toFixed(decimalCount).slice(2) : "");
    } catch (error) {
        console.error('Error in formatCurrency:', error);
        return amount;
    }
}
// export const convertToUSEasternFormat = (timestamp: string | number | Date, includeTime = false) => {
//     const usEasternOffset = -5.0;
//     let date = new Date(timestamp);

//     // Convert to US Eastern Time
//     date.setTime(date.getTime() + usEasternOffset * 60 * 60 * 1000);

//     const options: any = {
//         year: 'numeric',
//         month: 'long',
//         day: 'numeric',
//         timezone: 'ET' // Eastern Time
//     };

//     if (includeTime) {
//         options.hour = 'numeric';
//         options.minute = 'numeric';
//     }

//     return date.toLocaleString('en-US', options);
// }


/**
 * Example how to pass ::
 * 
    let usFormattedDate = convertToUSEasternFormat('2023-12-20T06:16:31.183Z', false);
    console.log(usFormattedDate); // Outputs "December 19, 2023"

    let usFormattedDateTime = convertToUSEasternFormat('2023-12-20T06:16:31.183Z', true);
    console.log(usFormattedDateTime); // Outputs "December 19, 2023, 1:16 AM"
    
 */
let getFormatedDateFromDbDate = (dateInt) => {
    if (dateInt == null)
        return '-';
    let dateString = String(dateInt);
    return `${dateString.substring(6,8)}.${dateString.substring(4,6)}.${dateString.substring(0,4)}`;
}

let maybeNull = (data) => {
    console.log(data);
    if (data == null || data === 0)
        return '-';
    else
        return data;
}

let formatDouble = (double) => {
    return Number(double).toFixed(2);
}
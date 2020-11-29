let getFormatedDateFromDbDate = (dateString) => {
    let date = dateString.split('T')[0];
    let ymd = date.split('-');
    return `${ymd[2]}.${ymd[1]}.${ymd[0]}`;
}

let maybeNull = (data) => {
    if (data == null || data === 0)
        return '-';
    else
        return data;
}

let formatDouble = (double) => {
    return Number(double).toFixed(2);
}
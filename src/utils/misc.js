export function formatDate(d) {
    var month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

export const floatInputKeyHandler = (e) => {
    let isnum = (e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105);
    let ispoint = e.keyCode === 110 || e.keyCode === 190;
    let isbackspace = e.keyCode === 8;
    if (!isnum && !ispoint && !isbackspace){
        e.preventDefault();
    }
}
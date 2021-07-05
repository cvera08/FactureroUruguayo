function printDateInTodaysDateID() {
    document.getElementById("todaysDate").value = getDateInYYYMMDDFormat(new Date());
    document.getElementById("spTodaysDate").innerHTML = getDateInSpFormat(new Date());
}

function printDatePlus15InDueDate() {
    var today15 = addDays(new Date(), 15); //Adding 15 days to today on purpose
    document.getElementById("dpDueDate").value = getDateInYYYMMDDFormat(today15);
    document.getElementById("spDueDate").innerHTML = getDateInSpFormat(today15);
}

function changeDateInputSpanishFormat(id1, id2){
    var selectedDate = document.getElementById(id1).value;
    var selectedDateFixed = addDays(new Date(selectedDate), 1); //Because if not we loose 1 day (UTC vs GMT vs GMT-3)
    document.getElementById(id2).innerHTML = getDateInSpFormat(selectedDateFixed);
}

function getDateInSpFormat(originalDate) {
    date = new Date(originalDate);
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = date.toLocaleString('es-ES', { month: 'long' }); //Source: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
    var yyyy = date.getFullYear();

    formattedDate = dd + ' ' + mm + ', ' + yyyy;
    return formattedDate;
} //Source: https://stackoverflow.com/questions/16167675/return-the-value-of-a-js-function-and-use-it-as-the-value-for-an-input-button


function getDateInYYYMMDDFormat(originalDate) { // I won't use new Date().toISOString().split('T')[0]; because generates issues with internationalization + converting dates (GMT vs GMT-3 vs UTC vs ISO)
    date = new Date(originalDate);
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0');
    var yyyy = date.getFullYear();

    formattedDate = yyyy + '-' + mm + '-' + dd;
    return formattedDate;
}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
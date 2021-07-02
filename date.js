function printDateInTodaysDateID() {
    document.getElementById("todaysDate").innerHTML = getDateInSpFormat(new Date());
} 

function printDatePlus15InDueDate() {
    var today15 = addDays(new Date(), 15); //Adding 15 days to today
    todayYYYmmDD= today15.toISOString().split('T')[0]; //converting to yyyy-MM-dd format

    document.getElementById("dpDueDate").value = todayYYYmmDD;
    document.getElementById("spDueDate").innerHTML = getDateInSpFormat(today15);
}

function changeDP() {
    var selectedDate = document.getElementById("dpDueDate").value;
    var selectedDateFixed = addDays(new Date(selectedDate), 1); //Because if not we loose 1 day (UTC vs GMT vs GMT-3)
    document.getElementById("spDueDate").innerHTML = getDateInSpFormat(selectedDateFixed);
}

function getDateInSpFormat(originalDate){
    date = new Date(originalDate);
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = date.toLocaleString('es-ES', { month: 'long' }); //Source: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
    var yyyy = date.getFullYear();

    formattedDate = dd + ' ' + mm + ', ' + yyyy;
    return formattedDate;
} //Source: https://stackoverflow.com/questions/16167675/return-the-value-of-a-js-function-and-use-it-as-the-value-for-an-input-button


function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
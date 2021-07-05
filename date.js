function printDateInTodaysDateID() {
    document.getElementById("todaysDate").value = getDateInFormat("yyymmdd", new Date());
    document.getElementById("spTodaysDate").innerHTML = getDateInFormat("sp", new Date());
}

function printDatePlus15InDueDate() {
    var today15 = addDays(new Date(), 15); //Adding 15 days to today on purpose
    document.getElementById("dpDueDate").value = getDateInFormat("yyymmdd", today15);
    document.getElementById("spDueDate").innerHTML = getDateInFormat("sp", today15);
}

function changeDateInputSpanishFormat(id1, id2){
    var selectedDate = document.getElementById(id1).value;
    var selectedDateFixed = addDays(new Date(selectedDate), 1); //Because if not we loose 1 day (UTC vs GMT vs GMT-3)
    document.getElementById(id2).innerHTML = getDateInFormat("sp", selectedDateFixed);
}

function getDateInFormat(format, originalDate) {
    date = new Date(originalDate);
    var dd = String(date.getDate()).padStart(2, '0');
    var yyyy = date.getFullYear();
    if (format == "sp"){
        var mm = date.toLocaleString('es-ES', { month: 'long' }); //Source: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
        return dd + ' ' + mm + ', ' + yyyy;
    }else if(format == "yyymmdd"){
        var mm = String(date.getMonth() + 1).padStart(2, '0');
        return yyyy + '-' + mm + '-' + dd;
    } else {
        console.log("Invalid date format. Availables: sp, yyymmdd")
    }
} //Source: https://stackoverflow.com/questions/16167675/return-the-value-of-a-js-function-and-use-it-as-the-value-for-an-input-button


function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
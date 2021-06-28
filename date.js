function printDateInTodaysDateID() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = today.toLocaleString('es-ES', { month: 'long' }); //Source: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
    var yyyy = today.getFullYear();

    today = dd + ' ' + mm + ', ' + yyyy;

    document.getElementById("todaysDate").innerHTML = today;
} //Source: https://stackoverflow.com/questions/16167675/return-the-value-of-a-js-function-and-use-it-as-the-value-for-an-input-button
function printDateInTodaysDateID() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    document.getElementById("todaysDate").innerHTML = today;
} //Source: https://stackoverflow.com/questions/16167675/return-the-value-of-a-js-function-and-use-it-as-the-value-for-an-input-button


function clickEvent() {
    document.getElementById("demo").innerHTML = "See it works!";
}
function hideText() {
    document.getElementById("demo").style.display = "none";
}
function showText() {
    document.getElementById("demo").style.display = "block";
}
function writeFunction() {
    document.write("Click<br>");
    document.write("subtext".substring(1,3));
    console.log(5+7);
}
let alertTest = () => {
    alert("click ok");
}
let additionOfNumbers = () => {
    let first, sec, sum;
    first = document.getElementById("firstnum").value;
    sec = document.getElementById("secnum").value;
    sum = Number(first) + Number(sec);
    document.getElementById("add").innerHTML = "The sum is " + sum;
    document.getElementById("addAgain").innerHTML = `The sum again is ${sum} (This time using template literals)`;
}
let add = additionOfNumbers;

let tableToArray = [];

$("table#demotable tr").each(function() {
    let rowDataArray = [];
    let actualData = $(this).find('td');
    if (actualData.length > 0) {
       actualData.each(function() {
          rowDataArray.push($(this).text());
       });
       tableToArray.push(rowDataArray);
    }
 });
 console.log(tableToArray);


/*let savingsFunction = () => {
    let earnings, expense, saved;
    earnings = document.getElementById("").value;
    expense = document.getElementById("").value;
    saved = Number(earnings) - Number(expense);
    document.getElementById("").innerHTML = saved;
} */
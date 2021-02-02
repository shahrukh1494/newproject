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
    sum = Number(first, 10) + Number(sec, 10);
    document.getElementById("add").innerHTML = "The sum is " + sum;
    document.getElementById("addAgain").innerHTML = `The sum again is ${sum} (This time using template literals)`;
}
let add = additionOfNumbers;
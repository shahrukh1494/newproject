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
function alertTest() {
    alert("click ok");
}
function add() {
    var first, sec, sum;
    first = document.getElementById("firstnum").value;
    sec = document.getElementById("secnum").value;
    sum = Number(first, 10) + Number(sec, 10);
    document.getElementById("add").innerHTML = "The sum is "+sum;
}

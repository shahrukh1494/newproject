function clickEvent() {
    document.getElementById("demo").innerHTML = "See it works!";
}
function hideText() {
   // document.getElementById("demo").style.display = "none";
    document.getElementById("demo").style.visibility = "hidden";
}
function showText() {
    // document.getElementById("demo").style.display = "block";
    document.getElementById("demo").style.visibility = "visible";
}
function writeFunction() {
    document.write("Click<br>");
    document.write("subtext".substring(1,3));
    console.log(5+7);
}
let alertTest = () => {
    alert("click ok");
}
let add = () => {
    let first, sec, sum;
    first = document.getElementById("firstnum").value;
    sec = document.getElementById("secnum").value;
    if (first < 1 || first === "") {
        document.getElementById("add").innerHTML = "Invalid Input! Please enter a positive number";
    }
    else if (sec < 1 || sec === "") {
        document.getElementById("add").innerHTML = "Invalid Input! Please enter a positive number";
    }
    else {
        sum = Number(first) + Number(sec);
        //document.getElementById("add").innerHTML = "The sum is " + sum;
        document.getElementById("add").innerHTML = `The sum is ${sum}`;
    }
}

let change = () => {
    document.getElementById("add").className = "outputbg";
} 

//fuction to display current day of the month and date
let dispDate = () => {
    let n =  new Date();
    let y = n.getFullYear();
    let m = n.getMonth() + 1;
    let d = n.getDate();
    let dy = n.getDay();
    let dname;
    if (dy === 0) {
        dname = "Sunday";
    }
    else if (dy === 1) {
        dname = "Monday";
    }
    else if (dy === 2) {
        dname = "Tuesday";
    }
    else if (dy === 3) {
        dname = "Wednesday";
    }
    else if (dy === 4) {
        dname = "Thursday";
    }
    else if (dy === 5) {
        dname = "Friday";
    }
    else if (dy === 6) {
        dname = "Saturday";
    }
    else {
        dname = "unknown";
    }
    console.log(dname);
    document.getElementById("date").innerHTML = `Today is ${dname}, ${d} / ${m} / ${y}`;
}
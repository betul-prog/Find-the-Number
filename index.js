const result = document.getElementById("result");
const num = document.getElementById("num");
const check = document.getElementById("check");
const refresh = document.getElementById("refresh");
const countNum = document.getElementById("count");

const randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

let count = 0;

check.onclick=function(){
    if (num.value == randomNumber) {
        result.style.color = "green";
        result.innerText = "Congratulations";
        count += 1;
        refresh.style.visibility = "visible";
    }
    else if (num.value < randomNumber) {
        result.style.color = "red";
        result.innerText = "Up!";
        count += 1;
    }
    else if (num.value > randomNumber) {
        result.style.color = "red";
        result.innerText = "Down!";
        count += 1;
    }
    else {
        result.innerText = "Just Enter Numeric Value";
    }
    countNum.innerText = count;
}


refresh.onclick = function() {
    location.reload();
}






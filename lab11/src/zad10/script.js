let count = 0;
let interval = "";
function startCounter(){
    count++;
    // console.log(count);
    document.getElementById("count").innerHTML = count;
    interval = setInterval(() => {
        count++;
        // console.log(count);
    document.getElementById("count").innerHTML = count;

    }, 1000);
}

function stopCounter() {
    clearInterval(interval);
}

function clearCounter() {
    count = 0;
    document.getElementById("count").innerHTML = count;
}


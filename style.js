var ms = document.getElementById("ms"),
    s = document.getElementById("s"),
    m = document.getElementById("m"),
    h = document.getElementById("h"),
    startPauseBtn = document.getElementById("startPauseBtn"),
    resetBtn = document.getElementById("resetBtn"),
    lapBtn = document.getElementById("lapBtn"),
    lapBoard = document.getElementById("laps"),
    interval;

//runs functions after event
startPauseBtn.addEventListener("click", startPause);
resetBtn.addEventListener("click", resetTimer);
lapBtn.addEventListener("click", lap);
window.addEventListener("keypress", function() {
    switch(event.keyCode)
    {
        case 49: // 1-key
            startPause();
            break;
        case 50: // 2-key
            lap();
            break;
        case 51: // 3-key
            resetTimer();
            break
    }
});

//function to update the numbers the user sees
function update() {
    ms.innerText = parseInt(ms.innerText) + 1;
    var types = [ms, s, m, h],
        maxNum = [10, 60, 60, 10];

    for(var i=0; i<types.length; i++)
    {
        if(types[i].innerText == maxNum[i])
        {
            console.log(types[i].innerText);
            types[i+1].innerText++;
            types[i].innerText = "0"
        }

        if(types[i] !== ms)
        {
            if(types[i].innerText.length == 1)
            {
                types[i].innerText = "0"+types[i].innerText;
            }
        }
    }
}

//function that starts or ends the interval
function startPause() {
    if(!interval) //if there is no interval
    {
        interval = setInterval(update, 100);
        startPauseBtn.innerText = "Pause"
    }
    else if(interval) //if there is an interval
    {
        clearTimeout(interval);
        interval = null;
        startPauseBtn.innerText = "Start"
    }
}

//function to reset the current numbers and the set laps
function resetTimer() {
    var types = [ms, s, m, h];
    for(var j = 0; j < types.length; j++)
    {
        types[j].innerText = "00";
        if(types[j] = ms)
        {
            types[j].innerText = "0";
        }
    }
    lapBoard.innerHTML = "";
}

//function that stores the numbers that are on the screen at that moment into paragraphs in html
function lap() {
    var timeLap = h.innerText+":"+ m.innerText+":"+ s.innerText+":"+ ms.innerText,
        p = document.createElement("P"),
        t = document.createTextNode(timeLap);
    p.appendChild(t);
    p.classList.add("lap");
    lapBoard.appendChild(p);
}
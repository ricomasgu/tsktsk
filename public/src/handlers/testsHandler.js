document.getElementById("start")
        .addEventListener("click" , () => {
            timer = new Timer();
            timer.start(() => {
                const time = timer.showTimer();
                document.getElementById("timer").innerHTML = `${time[0]}:${time[1]}:${time[2]}`;
            });
}, false);

document.getElementById("stop")
        .addEventListener("click",() => {
            if(timer !== undefined){
                timer.stop();
            }
}, false);

document.getElementById("reset")
        .addEventListener("click",() => {
            timer.reset(() => {
                const time = timer.showTimer();
                document.getElementById("timer").innerHTML = `${time[0]}:${time[1]}:${time[2]}`;
            });
}, false);
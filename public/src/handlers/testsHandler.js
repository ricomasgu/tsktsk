let timer;

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

let task;

document.getElementById("create")
        .addEventListener("click",() => {
            const inputs = document.getElementsByTagName("input");
            const [name, description, status, priority] = [...inputs];
            task = new Task(name, description, status, priority);
            //Next step, create a HTML object that contains the info and insert into the HTML.
            //<tr>
            //    <td>name</td>
            //    <td>description</td>
            //    <td>status</td>
            //    <td>priority</td>
            //</tr>
}, false);
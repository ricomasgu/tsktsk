document.getElementById("projects-button")
        .addEventListener("click", function() {
            document.getElementById("projects").hidden = false;
            document.getElementById("services").hidden = true;
            document.getElementById("resources").hidden = true;
            document.getElementById("templates").hidden = true;
}, false);

document.getElementById("project1")
        .addEventListener("click", function() {
            document.getElementById("project1-tasks").hidden = false;
            document.getElementById("project2-tasks").hidden = true;
}, false);

document.getElementById("project2")
        .addEventListener("click", function() {
            document.getElementById("project1-tasks").hidden = true;
            document.getElementById("project2-tasks").hidden = false;
}, false);

document.getElementById("project1-task1")
        .addEventListener("click", function() {
            document.getElementById("project1-task1-todos").hidden = false;
            document.getElementById("project1-task2-todos").hidden = true;
}, false);

document.getElementById("project1-task2")
        .addEventListener("click", function() {
            document.getElementById("project1-task1-todos").hidden = true;
            document.getElementById("project1-task2-todos").hidden = false;
}, false);

document.getElementById("templates-button")
        .addEventListener("click", function() {
            document.getElementById("projects").hidden = true;
            document.getElementById("services").hidden = true;
            document.getElementById("resources").hidden = true;  
            document.getElementById("templates").hidden = false;
}, false);

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
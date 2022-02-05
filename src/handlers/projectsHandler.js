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
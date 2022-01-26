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


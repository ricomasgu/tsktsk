document.getElementById("tasks-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const nameTask = event.target[0].value;
    console.log(nameTask);
    try {
        const api = new HandlerAPI();
        const resFromDb = await api.createTask(nameTask);
        console.log(resFromDb);

        if (resFromDb.status != 200) return;

        //DOM Manipulation. Add the task to the table.


    } catch (error) {
        console.log(error);
    }
});
class HandlerAPI {
    constructor(){
        this.api = axios.create({
            baseURL: `http://localhost:${process.env.PORT}`
        });
    }

    createTask() {
        return this.api.post("/tasks/create");
    }

    getTask() {
        return this.api.get("tasks");
    }
}
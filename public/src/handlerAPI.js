class HandlerAPI {
    constructor(){
        this.api = axios.create({
            baseURL: `http://localhost:4000`
        });
    }

    createTask() {
        const [ name ] = arguments;
        return this.api.post("/tasks/create", { name });
    }

    getTask() {
        return this.api.get("tasks");
    }
}
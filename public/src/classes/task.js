class Task  extends SubTask {
    constructor (name) {
        super(name);
        this.subTasks = [];
    }

    createSubTask(name){
        this.subTasks.push(new SubTask(name));
    }

    deleteSubTask(id){
        this.subTasks.splice(id,1);
    }

    showSubTasks(){
        return this.subTasks;
    }

    showTask(){
        return this;
    }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = Task;
class SubTask {
    constructor (name) {
        this.name = name;
        this.description;
        this.time;
        this.startDate;
        this.endDate;
        this.startPlannedDate;
        this.endPlannedDate;
        this.status;
        this.assignedResources;
        this.priority;
        this.notes;
        this.files;
        this.issues;
        this.meetings;
        this.chat;
    }

    showSubTask(){
        return this;
    }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = SubTask;
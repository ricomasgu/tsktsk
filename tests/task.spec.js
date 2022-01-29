const Task = require('./../src/task');

let task;

describe('Task', () => {
    beforeEach(() => {
        task = new Task(value);
    });

    it('should be declared', () => {
        expect(typeof Task).toBe('function');
    });

    describe('constructor method', () => {
        it('should receive AT LEAST `name` as a parameter and store the value in its own `name` property', () => {
            expect(Task.constructor.length).toBe(1);
            expect(task.name).toBe(true);
            expect(task.description).toBe(true);
            expect(task.time).toBe(true);
            expect(task.startDate).toBe(true);
            expect(task.endDate).toBe(true);
            expect(task.startPlannedDate).toBe(true);
            expect(task.endPlannedDate).toBe(true);
            expect(task.status).toBe(true);
            expect(task.assignedResources).toBe(true);
            expect(task.priority).toBe(true);
            expect(task.notes).toBe(true);
            expect(task.chat).toBe(true);
            expect(task.files).toBe(true);
            expect(task.issues).toBe(true);
            expect(task.meetings).toBe(true);
        });
    });

    describe('createSubTask method', () => {
        beforeEach(() => {
          task = new Task();
        });
    
        it('should be declared', () => {
          expect(typeof task.createSubTask).toBe('function');
        });
    
        it('should return the value of the task', () => {
            expect(task.createSubTask() === task.value).toBe(true);
        });
    });

    describe('deleteSubTask method', () => {
        beforeEach(() => {
          task = new Task();
        });
    
        it('should be declared', () => {
          expect(typeof task.deleteSubTask).toBe('function');
        });
    
        it('should return the value of the task', () => {
            expect(task.deleteSubTask() === task.value).toBe(true);
        });
    });

    describe('showTask method', () => {
        beforeEach(() => {
          task = new Task(value);
        });
    
        it('should be declared', () => {
          expect(typeof task.showTask).toBe('function');
        });
    
        it('should return the value of the task', () => {
            expect(task.showTask() === task.value).toBe(true);
        });
    });
});
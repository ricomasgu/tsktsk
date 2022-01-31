const Task = require('./../public/src/classes/task');

let task;
const name = "First task";

describe('Task', () => {
    beforeEach(() => {
        task = new Task(name);
    });

    it('should be declared', () => {
        expect(typeof Task).toBe('function');
    });

    describe('constructor method', () => {
        it('should receive AT LEAST `name` as a parameter and store the value in its own `name` property', () => {
            expect(Task.constructor.length).toBe(1);
            expect(task.subTasks instanceof Array);
        });
    });

    describe('createSubTask method', () => {
        beforeEach(() => {
          task = new Task(name);
        });
    
        it('should be declared', () => {
          expect(typeof task.createSubTask).toBe('function');
        });
    
        it('should return the value of the task', () => {
          const before = task.subTasks.length;
          task.createSubTask(name);
          expect(before + 1 === task.subTasks.length).toBe(true);
        });
    });

    describe('deleteSubTask method', () => {
        beforeEach(() => {
          task = new Task(name);
        });
    
        it('should be declared', () => {
          expect(typeof task.deleteSubTask).toBe('function');
        });
    
        it('should return the value of the task', () => {
          const id = 1;
          task.createSubTask(name);
          task.createSubTask(name);
          const before = task.subTasks.length;
          task.deleteSubTask(id);
          expect(before - 1 === task.subTasks.length).toBe(true);
        });
    });

    describe('showTasks method', () => {
        beforeEach(() => {
          task = new Task(name);
        });
    
        it('should be declared', () => {
          expect(typeof task.showTask).toBe('function');
        });
    
        it('should return the value of the task', () => {
            expect(task.showTask() instanceof Task).toBe(true);
        });
    });
});
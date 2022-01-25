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
        it('should receive `value` as a parameter and store the value in its own `value` property', () => {
            expect(Task.constructor.length).toBe(1);
            expect(task.value === value).toBe(true);
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
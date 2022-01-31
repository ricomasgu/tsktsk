const SubTask = require('./../public/src/classes/subtask');

let subtask;
const name = "First subtask";

describe('SubTask', () => {
    beforeEach(() => {
        subtask = new SubTask(name);
    });

    it('should be declared', () => {
        expect(typeof SubTask).toBe('function');
    });

    describe('constructor method', () => {
        it('should receive AT LEAST `name` as a parameter and store the value in its own `name` property', () => {
            expect(SubTask.constructor.length).toBe(1);
            expect(subtask.name === name).toBe(true);
            expect(subtask).toHaveProperty("description", undefined);
            expect(subtask).toHaveProperty("time", undefined);
            expect(subtask).toHaveProperty("startDate", undefined);
            expect(subtask).toHaveProperty("endDate", undefined);
            expect(subtask).toHaveProperty("startPlannedDate", undefined);
            expect(subtask).toHaveProperty("endPlannedDate", undefined);
            expect(subtask).toHaveProperty("status", undefined);
            expect(subtask).toHaveProperty("assignedResources", undefined);
            expect(subtask).toHaveProperty("priority", undefined);
            expect(subtask).toHaveProperty("notes", undefined);
            expect(subtask).toHaveProperty("chat", undefined);
            expect(subtask).toHaveProperty("files", undefined);
            expect(subtask).toHaveProperty("issues", undefined);
            expect(subtask).toHaveProperty("meetings", undefined);
        });
    });

    describe('showSubTask method', () => {
        beforeEach(() => {
          subtask = new SubTask(name);
        });
    
        it('should be declared', () => {
          expect(typeof subtask.showSubTask).toBe('function');
        });
    
        it('should return the value of the subtask', () => {
            expect(subtask.showSubTask() instanceof SubTask).toBe(true);
        });
    });
});
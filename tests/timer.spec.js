const Timer = require('./../src/timer');

let timer;

describe('Timer', () => {
    beforeEach(() => {
        timer = new Timer();
    });

    it('should be declared', () => {
        expect(typeof Timer).toBe('function');
    });

    describe('constructor method', () => {
        it('should initialize the properties hours, minutes, seconds and id', () => {
            expect(Timer.constructor.length).toBe(1);
            expect(timer.hours === 0).toBe(true);
            expect(timer.minutes === 0).toBe(true);
            expect(timer.seconds === 0).toBe(true);
            expect(timer.id === 0).toBe(true);
        });
    });

    describe('start method', () => {
        beforeEach(() => {
          timer = new Timer();
        });
    
        it('should be declared', () => {
          expect(typeof timer.start).toBe('function');
        });
    
        it('should create and assign a value to the id', () => {
          timer.start(() => {});
          expect(timer.id !== 0).toBe(true);
        });
    });
    
    describe('stop method', () => {
        beforeEach(() => {
          timer = new Timer();
        });
    
        it('should be declared', () => {
          expect(typeof timer.stop).toBe('function');
        });
    
        it('should return the value of the timer', () => {
            timer.start();
            timer.stop();
            expect(timer.id === 0).toBe(true);
        });
    });

    describe('reset method', () => {
      beforeEach(() => {
        timer = new Timer();
      });
  
      it('should be declared', () => {
        expect(typeof timer.reset).toBe('function');
      });
  
      it('should reinitialize the values of the properties', () => {
        timer.reset();
        expect(timer.hours === 0).toBe(true);
        expect(timer.minutes === 0).toBe(true);
        expect(timer.seconds === 0).toBe(true);
      });
  });

    describe('showTimer method', () => {
        beforeEach(() => {
          timer = new Timer();
        });
    
        it('should be declared', () => {
          expect(typeof timer.showTimer).toBe('function');
        });
    
        it('should return the value of the timer', () => {
            expect(timer.showTimer() instanceof Array).toBe(true);
        });
    });
});
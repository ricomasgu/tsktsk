class Timer {
    constructor () {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.id = 0;
    }

    start(callback){
        this.id = setInterval(() => {
            this.seconds++;
            if(this.seconds === 60){
                this.minutes++;
                this.seconds = 0;
                if(this.minutes === 60) {
                    this.hours++;
                    this.minutes = 0;
                }
            }
            callback();
         } , 1000);
    }

    stop(){
        clearInterval(this.id);
        this.id = 0;
    }

    reset(callback){
        if(this.id !== 0){
            this.stop();
        }
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        callback();
    }

    showTimer(){
        return [this.hours,this.minutes,this.seconds];
    }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = Timer;
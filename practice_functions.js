class Clock {
  constructor() {
    let date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();

    // 3. Call printTime.

    this.printTime();
    // 4. Schedule the tick at 1 second intervals.
    setInterval(() => this._tick(), 1000)
  }

  printTime() {
    // Format the time in HH:MM:SS
    
    console.log(this.hours.toString().padStart(2, "0") + ":" + this.minutes.toString().padStart(2, "0") + ":" + this.seconds.toString().padStart(2, "0"))
    // Use console.log to print it.
  }

  _tick() {
    // 1. Increment the time by one second.
    this.seconds++;
    if(this.seconds === 60) {
        this.seconds = 0;
        this.minutes++;
        if(this.minutes===60) {
            this.minutes = 0;
            this.hours++;
            if(this.hours===24){
                this.hours = 0;
    };
};
    };
      // 2. Call printTime.
      this.printTime();
};
};
const clock = new Clock();
class GuessingGame {
    constructor() {
        this.left = null;
        this.rigth = null;
        this.middle = null;
    }

    //this method accepts min and max value of range of number to guess
    setRange(min, max) {
        this.left = min;
        this.rigth = max;
    }

    //this method returns solution candidate (you make an assumption based on range and previous assumptions)
    guess() {
        this.middle = Math.floor((this.left + this.rigth) / 2);
        return this.middle;
    }

    //this method is called if prev call of guess() returned number which is greater than answer
    lower() {
        this.rigth = this.middle;
    }

    //this method is called if prev call of guess() returned number which is lower than answer
    greater() {
        this.left = this.middle;
    }
}

module.exports = GuessingGame;

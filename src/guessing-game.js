class GuessingGame {
    constructor() {
        this.left = null;
        this.right = null;
        this.middle = null;
    }

    //this method accepts min and max value of range of number to guess
    setRange(min, max) {
        this.left = min;
        this.right = max;
    }

    //this method returns solution candidate (you make an assumption based on range and previous assumptions)
    guess() {
        this.middle = Math.ceil((this.left + this.right) / 2); // Math.ceil() round a number upward to its nearest integer.
        return this.middle;
    }

    //this method is called if prev call of guess() returned number which is greater than answer
    lower() {
        this.right = this.middle;
    }

    //this method is called if prev call of guess() returned number which is lower than answer
    greater() {
        this.left = this.middle;
    }
}

module.exports = GuessingGame;

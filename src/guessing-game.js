class GuessingGame {
    constructor() {
        this.array = [];
        this.middleNum;
    }

    setRange(min, max) {
        for (let i = min; i <= max; i++) {
            this.array.push(i);
        }
    }

    guess() {
        this.middleNum = this.array[Math.floor(this.array.length / 2)];
        return this.middleNum;
    }

    lower() {
        this.array = this.array.filter(el => el <= this.middleNum);
    }

    greater() {
        this.array = this.array.filter(el => el >= this.middleNum);
    }
}

module.exports = GuessingGame;

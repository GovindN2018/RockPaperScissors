describe("RPS", function () {
    var rps = require('C:\\Users\\Govin\\source\\repos\\NewRPS\\src\\js\\rockPaperScissors.js')


    describe("compare the choices", function () {

        it("should return result as tie when userChoice === computerChoice", function () {
            expect(rps.compare("rock", "rock")).toBe('Its a tie!');
        });


        it("should return result as You win!", function () {
            expect(rps.compare("paper", "rock")).toBe('You win!');
        });

        it("should return result as You win!", function () {
            expect(rps.compare("rock", "scissors")).toBe('You win!');
        });

        it("should return result as You win!", function () {
            expect(rps.compare("scissors", "paper")).toBe('You win!');
        });


        it("should return result as You lose! Try again", function () {
            expect(rps.compare("rock", "paper")).toBe('You lose! Try again');
        });

        it("should return result as You lose! Try again", function () {
            expect(rps.compare("scissors", "rock")).toBe('You lose! Try again');
        });

        it("should return result as You lose! Try again", function () {
            expect(rps.compare("paper", "scissors")).toBe('You lose! Try again');
        });

    });

    describe("test computerChoice", function () {

        it("should return result as rock", function () {
            expect(rps.getComputerChoice(0.00)).toBe('rock');
        });

        it("should return result as rock", function () {
            expect(rps.getComputerChoice(0.33)).toBe('rock');
        });

        it("should return result as paper", function () {
            expect(rps.getComputerChoice(0.34)).toBe('paper');
        });

        it("should return result as paper", function () {
            expect(rps.getComputerChoice(0.67)).toBe('paper');
        });

        it("should return result as scissors", function () {
            expect(rps.getComputerChoice(0.68)).toBe('scissors');
        });

        it("should return result as scissors", function () {
            expect(rps.getComputerChoice(0.99)).toBe('scissors');
        });


    });
});


//    computerChoice,
//    results,
//    getCount,
//    resetScores
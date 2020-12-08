// var ourChoice;
// var computerChoice;
// var outcome = determineOutcome(ourChoice, computerChoice);
// console.log(outcome);

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Steen, papier of schaar? ", function(item) {
        console.log(item);
        rl.close();
});

var GameResult = {
    WIN: 1,
    LOSSES: 2,
    EQUAL: 3,
};

rl.on("close", function() {
    process.exit(0);
});

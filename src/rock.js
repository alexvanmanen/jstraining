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

rl.on("close", function() {
    process.exit(0);
});

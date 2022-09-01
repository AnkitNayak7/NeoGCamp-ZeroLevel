// markOne: “Do you know me?” CLI quiz app

var readlineSync = require('readline-sync');

var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + ', Welcome to Superhero Hunter');


function check(userInput, correctAnswer) {
    if (userInput.toLowerCase() == correctAnswer.toLowerCase()) {
        return true
    } else {
        return false
    }
}

score = 0

var userInput1 = readlineSync.question('Who is more Powerful, Hulk or Spiderman? ');

if (check(userInput1, 'Hulk')) {
    score += 1
} else {
    score -= 1
}
console.log(score)

var userInput2 = readlineSync.question('Who posses power of Sea, Superman or Aquaman? ');
if (check(userInput2, 'Aquaman')) {
    score += 1
} else {
    score -= 1
}
console.log(score)

var userInput3 = readlineSync.question('Who can travel Multiverse, Doctor Strange or Ironman? ');
if (check(userInput3, 'Doctor Strange')) {
    score += 1
} else {
    score -= 1
}


var highScores = [{
        name: "Ankit",
        score: 3,
    },

    {
        name: "Jerry",
        score: 2,
    },
]

function showScores() {
    console.log("YAY! You SCORED: ", score);

    console.log("Check out the high scores, if you should be there ping me and I'll update it");

    highScores.map(score => console.log(score.name, " : ", score.score))
}

showScores()
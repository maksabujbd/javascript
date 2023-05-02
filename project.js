// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet money
// 4. Spin the slot machine
// 5. Check if the user won
// 6. give the user their warnings.
// 7. play again

//Row style function
// function deposit() {
//     console.log('deposited money');
//     return 1;
// }

const prompt = require("prompt-sync")();

//EC6 style function
const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);
        if (isNaN(numberDepositAmount) || numberDepositAmount < 1) {
            console.log("Invalid deposit amount, try again.");
        } else {
            return numberDepositAmount;
        }
    }
}

const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);
        if (isNaN(numberOfLines) || numberOfLines < 1 || numberOfLines > 3) {
            console.log("Invalid number of lines, try again");
        } else {
            return numberOfLines;
        }
    }
}

const depositAmount = deposit();
console.log("Your deposited amount is: " + depositAmount);

const line = getNumberOfLines();
console.log("Your selected number of lines: " + line);

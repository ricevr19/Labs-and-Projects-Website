let bill = Number(prompt(`Please enter the valid bill amount (ex: $0.00)`));
do {
    
    if (bill == 0) {
        bill = Number(prompt(`Please enter the valid bill amount (ex: $0.00) not a zero`));
    } else if (bill < 0) {
        bill = Number(prompt(`Negative numbers aren't allowed. Enter the valid bill amount (ex: $0.00) greater than zero and positive amount`));
    } else if (isNaN(bill)) {
        bill = Number(prompt(`Input is invalid. Enter a valid numeric bill amount (ex: $0.00)`));
    }
} while (isNaN(bill) || bill <= 0);

let tip = bill * 0.10;

let tipMessage = `Restaurant bill: $${bill}, be sure to tip your waiter at least $${tip}.`;
console.log(tipMessage);
document.write(tipMessage);
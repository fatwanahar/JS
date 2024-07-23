// make a simple recursive function that will print out the numbers from user to next 10 numbers

// take input user
let user = prompt("Enter a number: ");

// make a recursive function
function recursive(num) {
    if (num < user + 10) {
        console.log(num);
        recursive(num + 1);
    }
}

// call the function
recursive(user);
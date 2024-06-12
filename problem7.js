//8. Write a function to check if a string is a palindrome. 

function checkPalindrome(string) {

    const stringValues = string.split('');
    const reverseStringValues = stringValues.reverse();
    const reverseString = reverseStringValues.join('');

    if (string == reverseString) {
        console.log("It's a palindrome");

    }
    else {
        console.log("It's not a palindrome");


    }



}

let string = 'madam';

checkPalindrome(string);
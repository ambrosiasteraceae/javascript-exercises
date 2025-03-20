const reverseString = function(string) {

    let reverse = "";
    for (let i = string.length - 1; i >= 0;  i--)
    {
        reverse+=string.charAt(i);

    }
    console.log(reverse);
    return reverse;

};

reverseString("manas");
// Do not edit below this line
module.exports = reverseString;

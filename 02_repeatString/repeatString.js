const repeatString = function(string, num) {
    let hold = "";
    if (num <0) return "ERROR"
    for (let i = 0; i<num; i++)
    {
        hold+=string;
    }
    console.log(hold.length);

    return hold
};

repeatString("aa", 3)
// Do not edit below this line
module.exports = repeatString;

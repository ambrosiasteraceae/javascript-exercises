const leapYears = function(year) {
    if (year %4 == 0)
    {
        if (year % 100 == 0)
        {
            if (year%400 == 0)
                    return true
            return false;
        }
        return true

    }
        // check to see if it is also divisible by 
return false

};

console.log(leapYears(3004))
// Do not edit below this line
module.exports = leapYears;

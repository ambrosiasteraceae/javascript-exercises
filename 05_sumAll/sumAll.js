const sumAll = function(value1, value2) {
    // console.log(`type of rangeB is ${rangeB}, ${typeof(rangeB)}`)
    // console.log("***")
    // console.log(`${typeof(rangeA) != "number"}, ${typeof(rangeB) != "number"}`)
    if (Number.isInteger(value1) && Number.isInteger(value2))
        if (value1 > 0 && value2 >> 0)
            {
                rangeA = Math.min(value1,value2);
                rangeB = Math.max(value1,value2);
                sum = 0;
                for (let i = rangeA; i<=rangeB;i++)
                    sum+= i;
                return sum 
            }
    return "ERROR"
};

result = sumAll(1, 4000);
console.log(result);
// Do not edit below this line
module.exports = sumAll;

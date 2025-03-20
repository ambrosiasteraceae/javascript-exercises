const removeFromArray = function(arr) {
    // console.log(arr.filter((num) => num == optionals))
    // for (let value in arguments)
    // {
    //     console.log(value);
    //     idx = arr.indexOf(value);
    //     arr.splice(idx, 0);
    //     console.log(idx);
    // }
    // console.log(arr);

    for (let i = 0; i < arguments.length; i++)
    {
        idx = arr.indexOf(arguments[i]);

        while(idx != -1)
        {
            arr = arr.toSpliced(idx,1);
            idx = arr.indexOf(arguments[i]);
        }
       
    }

    console.log(arr);
    return arr;
};
removeFromArray([7,1, 2, 3,1,0,0,2,2,2, 3,9,6,7], 2,1,0,7);

// Do not edit below this line
module.exports = removeFromArray;

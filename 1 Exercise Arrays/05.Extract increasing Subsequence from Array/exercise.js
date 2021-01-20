function solve(input) {

    let output = [];
    let max = Number.MIN_VALUE;

    input.forEach(num => {
        if(num > max){
            max = num;
           output.push(max)
        }
    })
    console.log(output.join("\n"))

}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24])
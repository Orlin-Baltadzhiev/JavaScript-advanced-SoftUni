function solve(input) {
    let result = {};
    let juicesInOrder = {};

    input.forEach(line => {
        let [product, quantity] = line.split(' => ');

        if (!result[product]) {
            result[product] = Number(quantity);
        } else {
            result[product] += Number(quantity);
        }

        if(result[product] >= 1000){
            let bottles =Math.floor(result[product]/1000);            
            juicesInOrder[product] = bottles;
        }
        
    })
    Object.keys(juicesInOrder).forEach(j => console.log(`${j} => ${juicesInOrder[j]}`));

  

}

solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'])

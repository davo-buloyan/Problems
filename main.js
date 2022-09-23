function checkLeastAndMostBytes(number) {
  const LSB = String(number.toString(2)).split("").pop();

  if (String(number.toString(2)).length == 32) {
    const MSB = String(number.toString(2)).split("")[0];
    console.log(LSB, MSB);
    return LSB == MSB;
  }
  console.log(LSB == 0);
  return LSB == 0;
}

checkLeastAndMostBytes(1256);

function printF(row, ...args) {
  let arrayOfResult = row.split(/,| /) ;

    let j = 0;
    let k = 0;
    
      const numbersOfArgs = [...args].filter(
        element => typeof element === 'number'
      );
    
      const stringsOfArgs = [...args].filter(
        element => typeof element === 'string'
      );

    for(let i = 0; i< arrayOfResult.length; i++) {
        if(arrayOfResult[i] == '%d') {
            arrayOfResult[i] = numbersOfArgs[j]
            j ++
        }

        if(arrayOfResult[i] == '%s') {
            arrayOfResult[i] = stringsOfArgs[k]
            k ++
        }
    }

    console.log(arrayOfResult.join(' '));
    return arrayOfResult.join(' ')

}

printF('%d,%d, How are you? %s,', 1, 2, "hey");
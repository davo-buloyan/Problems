function sumOfArrays(num1, num2) {
  let res = [];
  let temp = 0;

  let myArr1 = numberToArray(num1);

  let myArr2 = numberToArray(num2);

    for( let i = myArr1.length - 1; i >= 0; i-- ) {
        if(myArr1[i] == 0 && myArr2[i] == 0 && temp == 0) {
            res.push(0)
        } else if (myArr1[i] == 0 && myArr2[i] == 0 && temp == 1)  {
            res.push(temp)
            temp = 0;
        } else if ( (myArr1[i] + myArr2[i] + temp) <= 9 ) {
            res.push( (myArr1[i] + myArr2[i] + temp) )
            temp = 0
        } else {
            res.push( (myArr1[i] + myArr2[i] + temp) % 10 )
            temp = 1
        }
    }

  return res.reverse().join('');
}

function numberToArray(num) {
    return num
    .split("")
    .map((num) => {
      return Number(num);
    });
}

console.log(sumOfArrays("00004562", "00008561"));

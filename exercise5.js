function symbolCount(string, symbol) {
  let count = 0;
  string.split("").map((index) => {
    if (index == symbol) {
      count++;
    }
  });
  return count;
}


function customSplit(string, ...args) {
    const res = [];
    let temp = '';
    for(let i = 0; i < string.length; i++){
       const elem = string[i];
           if(args.includes(elem) && temp){
              res.push(temp);
              temp = '';
           };
           if(!args.includes(elem)){
              temp += elem;
           }
       
    };
    if(temp){
       res.push(temp);
       temp = '';
    };
    return res;
}

console.log( customSplit('this is som$e string', '$', ' ' ))

// console.log(symbolCount('abaaba', 'a'));




function fakeMD5Algoritm(string) {
  //private letiable
  let count = 20;

  for (let i = 0; i < string.length; i++) {
    
    count += (string.charCodeAt(i));
  }

  console.log(count);

  return count
}


function allPossibleCombinations(input, length, myString) {
    if(myString.length == 16) return [ myString ];
    let result = [];
    for(let i = 0; i < input.length; i++) {
        result.push.apply(result, allPossibleCombinations(input, length, myString + input[i]));
    }
    return result;
}

let input = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ];
// console.log(allPossibleCombinations(input, 16, ''));
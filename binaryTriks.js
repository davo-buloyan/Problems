function setByneryPosition(num, pos) {
  let mask = getOneAtPosition(pos);
  // console.log(mask);
  let temp = ~mask;

  return num & temp;
}

function getOneAtPosition(pos) {
  return 2 ** pos;
}

// console.log(setByneryPosition(15, 3));

function setByte(num, pos, reset = false) {
  let mask = 1 << pos;
  if (reset) {
    num &= ~mask;
  } else {
    num != mask;
  }

  return num;
}

class bitArray {
  constructor(length) {
    this.backingArray = Array.from({ length: Math.ceil(length / 32) }, () => 0);
    this.length = length;
  }
  get(n) {
    console.log((this.backingArray[n/32|0] & 1 << n % 32)!= 0 ? 1 : 0);
      return (this.backingArray[n/32|0] & 1 << n % 32)!= 0 ? 1 : 0
  }
  set(n, bit) {
    if (bit == 1) {
      this.backingArray[(n / 32) | 0] |= 1 << n % 32;
    } else if (bit == 0) {
      this.backingArray[(n / 32) | 0] &= ~(1 << n % 32);
    }
  }

}

let bits = new bitArray(10);
bits.get(2); 
bits.set(2, 1);
bits.get(2); 


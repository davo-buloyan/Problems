function chechLeastAndMostBytes(number) {

    const LSB =String(number.toString(2)).split('').pop();
    console.log(LSB);

    const byteLength = String(number.toString(2)).length

    if(String(number.toString(2)).length == 11) {
        const MSB = String(number.toString(2)).split('')[0];
        console.log(LSB, MSB);
        return LSB == MSB
    }

    console.log(LSB == 0);
    return LSB == 0
}

chechLeastAndMostBytes(1256)
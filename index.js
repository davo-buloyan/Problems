function caesarCipher(str) {
  let output = "";

  for (let i = 0; i < str.length; i++) {
    let c = str[i];

    if (c.match(/[a-z]/i)) {
      let code = str.charCodeAt(i);

      if (code >= 68 && code <= 90) {
        c = String.fromCharCode(((code - 65 - 3) % 26) + 65);
      } else if (code >= 65 && code <= 68) {
        c = String.fromCharCode(((code + 26 - 65 - 3) % 26) + 65);
      } else if (code >= 100 && code <= 122) {
        c = String.fromCharCode(((code - 97 - 3) % 26) + 97);
      } else if (code >= 97 && code <= 100) {
        c = String.fromCharCode(((code + 26 - 97 - 3) % 26) + 97);
      }
    } else if (c.match(/\d+/i)) {
      let code = str.charCodeAt(i);

      if (code >= 48 && code <= 50) {
        c = String.fromCharCode(code + 10 - 3);
      } else {
        c = String.fromCharCode(code - 3);
      }
    }
    output += c;
  }

  console.log(output);
  return output;
}

caesarCipher("dsaz012789fzDAC");

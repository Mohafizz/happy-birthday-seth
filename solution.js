var encrypt = function(string, shiftAmount) {
  // YOUR SOLUTION HERE
  let eachChar = string.split("");
  let encryptedValue = [];

  let ascii = function(string) {
    let charValue = string.charCodeAt(0);
    return charValue;
  };

  for (let i = 0; i < eachChar.length; i++) {
    let updatedCode = ascii(eachChar[i]) + shiftAmount;
    let output = String.fromCharCode(updatedCode);
    encryptedValue.push(output);
  }
  return encryptedValue.join("");
};

console.log('encrypt("ABC", 1): ', encrypt("hello world", 1));

var decrypt = function(string, shiftAmount) {
  // YOUR SOLUTION HERE
  let eachChar = string.split("");
  let encryptedValue = [];

  let ascii = function(string) {
    let charValue = string.charCodeAt(0);
    return charValue;
  };

  for (let i = 0; i < eachChar.length; i++) {
    let updatedCode = ascii(eachChar[i]) - shiftAmount;
    let output = String.fromCharCode(updatedCode);
    decryptedValue.push(output);
  }
  return decryptedValue.join("");
};

console.log('decrypt("ABC", 1): ', decrypt("ifmmp", 1));

// DO NOT TOUCH THIS PART OF THE CODE!
if (
  process.argv[2] ===
  "Hgx Angwkxw Hkvatkw Khtw, Vhgvhkwx Ahmxe & Lahiibgz Ftee, #sxkhmph-yhkmrmakxx"
) {
  console.log(decrypt(process.argv[2], 19));
}
module.exports = {
  encrypt: encrypt,
  decrypt: decrypt
};

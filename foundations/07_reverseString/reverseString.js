const reverseString = function(str) {
 let result = ""
  let part = str.split("")
  part.reverse()
  let get = part.join("")
  console.log(get)
  return result + get
};

// Do not edit below this line
module.exports = reverseString;

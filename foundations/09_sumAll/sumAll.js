const sumAll = function(min,max) {
  let resultaat = 0
 
  let small = Math.min(min, max)
  let big = Math.max(min, max)

    if(small < 0) {
    return "ERROR"
  } 

 if (!Number.isInteger(min) || !Number.isInteger(max)) {
    return "ERROR"
 }
 
  for(let i = small; i <= big; i++) {
     resultaat = resultaat + i;
  }
  return resultaat;
  
};

// Do not edit below this line
module.exports = sumAll;

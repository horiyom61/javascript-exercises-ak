const repeatString = function(string, num) {

    let resultaat = "";
for(let i = 0; i < num; i++){
  resultaat = resultaat + string;
}
  if(num < 0){
    return "ERROR"
  }
  return resultaat
};

// Do not edit below this line
module.exports = repeatString;



// Using console.log without return

var areaC = function(width, height){
  console.log(width * height);
};
areaC(4,5)

// Using return

var areaR = function(width, height){
  return(width * height);
};

var result = areaR(4,5);
console.log(result);

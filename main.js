// Using console.log without return

var areaC = function(width, height){
  console.log(width * height);
};


areaC(4,5)
areaC(90, 100)
areaC(1,1)


// Using return

var areaR = function(width, height){
    return width*height;
  }

console.log(areaR(6,8))
console.log(areaR(90, 100))
console.log(areaR(1,1))

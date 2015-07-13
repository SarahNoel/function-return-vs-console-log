// Using console.log without return-
numCats = prompt("How many cats live in your home?")

function cats (numCats){
  if (numCats === 0) {
  console.log("You should get a cat.");
}else if (numCats === 1) {
  console.log("Your cat needs a friend.")
}else {
    console.log("I hope your cats get along.")
  }
}

cats(0)
cats(5)
cats(1)

// Using return

numCats = prompt("How many cats live in your home?")

function cats (numCats){
  if (numCats === 0) {
  return("You should get a cat.");
}else if (numCats === 1) {
  return("Your cat needs a friend.")
}else {
    return("I hope your cats get along.")
  }
}

console.log(cats(0));
console.log(cats(5));
console.log(cats(1));

let a = parseInt(10);
let b = parseInt(20);
let c = null;
console.log(
  `A: ${a}
B: ${b}
C: ${c}`
);
console.log("______________");
console.log(
  `A: ${a}
B: ${b}
C: ${c}`
);
a = b;
b = a - 10;

console.log("______________");
console.log(
  `A: ${a} 
B: ${b} 
C: ${c}`
);

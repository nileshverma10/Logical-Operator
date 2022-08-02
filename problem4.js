//Problem 4: Given 3 numbers (all different values), print which is greatest

let a= 3;
let b=7;
let c=5;
if(a>b || a>c){
  console.log( a, "greatest");
}else if(b>a || b>c){
  console.log(b, "Greatest");
}else if(c>a || c>b){
  console.log(c, "Greatest");
}
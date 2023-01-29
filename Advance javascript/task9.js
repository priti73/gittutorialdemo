/******CURRYING******* */
let mult=function(x,y){
    console.log(x*y);
}
// let multiplyby2=mult.bind(this,2);
// multiplyby2(5);  //10
 //let multiplyby3=mult.bind(this,3);
 //multiplyby3(5);  //15
 //let multiplyby2=mult.bind(this,2,3);
 //multiplyby2(5);  //6
// let multiplyby2=mult.bind(this,);
// multiplyby2(5,6); //30
let multiply=function(x){
    return function (y){
        console.log(x*y);
    }
}
let multiplyby2=multiply(2);
multiplyby2(3);
let multiplyby3=multiply(2);
multiplyby3(10);


/**********CALL BIND APPLY******** */
var obj={num:2};
var addtothis = function(a,b,c){
  return this.num+a+b-c;
};
console.log(addtothis.call(obj,3,2,1));
console.log(addtothis.apply(obj,[1,2,3]));
var bound=addtothis.bind(obj);
console.log(bound(1,2,3));
var student={age:20};
var addtothis = function(){
  return this.age;
};
var bound=addtothis.bind(student);
console.log(bound());



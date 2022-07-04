//1.a
var x = [1, 2, 3, 54];
console.log(Array.isArray(x))
//1.b
var x = 35
console.log(Array.isArray(x))
//2
const words = ['orange', 'apple', 'grape'];
console.log(words.join('$'));
//3.a
var Num = [1,2,3,4,5];
console.log(Num.findIndex((x) => x==5));  
//3.b
var Num = [1,2,3,4,5,6];
console.log(Num.findIndex((x) => x==2));
//4.a
function f ([x,y,z,a,b]) {return x+y+z+a+b};
var sum1 = f ([1,2,3,4,5]);
console.log(sum1);
//4.b
const sum= (h,t,c) => h+t+c;
var sum2 = sum (2,7,10);
console.log(sum2);
//5.a
function a ([a,b,c,d,e]) {return a*b*c*d*e};
var product1 = a ([1,2,3,4,5]);
console.log(product1);
//5.b
function b ([a,b]) {return a*b};
var product2 = b ([2,3]);
console.log(product2);
//6.a
var arr = [1, 1, 2, 3, 7, 7, 0];
console.log([...new Set(arr)]);
//6.b
var arr = ['Peter', 'James', 'Bob', 'Peter'];
console.log([...new Set(arr)]);
//7.a
function findLeapYears(minYear, maxYear){
    let result = []
    for(let i=minYear; i<=maxYear; i++){
        if(i%4 == 0) {
            result.push(i)
        }}
        console.log(result)}
findLeapYears(2000,2018)
//7.b
function findLeapYears(minYear, maxYear){
    let result = []
    for(let i=minYear; i<=maxYear; i++){
        if(i%4 == 0) {
            result.push(i)
        }}
        console.log(result)}
findLeapYears(2013,2015)
//8.a
function getFBN(n){
    if (n < 0){
        return n;
    }else if (n <= 2){
        return 1;
    }
    return getFBN(n-1)+getFBN(n-2);
}
console.log(getFBN(0+1));
//8.b
function getFBN(n){
    if (n<0){
        return n;
    }else if (n <= 2){
        return 1;
    }
    return getFBN(n-1)+getFBN(n-2);
}
console.log(getFBN(4+1));
//8.c
function getFBN(n){
    if (n<0){
        return n;
    }else if (n <= 2){
        return 1;
    }
    return getFBN(n-1)+getFBN(n-2);
}
console.log(getFBN(3+1));
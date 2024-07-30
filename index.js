// 2-masala 
// function test(arg1,arg2){
//     return arg1-arg2 
// }
// console.log(test(2,4));

// 3-masala 
// function test(arg){
// let a ="9";
//     for (let i=0;i<=a;i++) {
//         console.log(a);
//     }
// }
// console.log(test(""));

// 4-masala 
// function test(arg1){
//     return arg1**3
// }
// console.log(test(2));

// 5-masala 
// function test(arg1,arg2){
//     return Math.trunc(arg1/arg2) 
// }
// console.log(test(9,4));

// 6-masala 
// function test(arg1){
//     return Math.trunc(arg1/100)+1;   
// }
// console.log(test(1905));

// 8-masala 
//     function unlilarniHisoblash(string) {
//         const unlilar = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    
//         let unlilarSoni = 0;
    
//         for (let i = 0; i < string.length; i++) {
//             if (unlilar.includes(string[i])) {
//                 unlilarSoni++;
//             }
//         }
    
//         return unlilarSoni;
//     }
    
// console.log(unlilarniHisoblash("hi world"));

// 9-masala 
// let str ='salom';
// let num =2;
// function test(str,num) {
//     if (str.length<=num) {
//         return str;
//     }
//     let res= ' ';

//     for(let i = num-1;i<str.length;i++){
//         res+=str[i];

//     }
//     return res;
// }
// console.log(test(str,num));


// 10-masala 
// let arr = ["1","2","salom"];
// function test(arg) {
//     for(let i=0;i<arr.length;i++){
//         if (arr[i]>0) {
//             console.log("faqat son");
//         } else{
//             console.log("soz ham bor");
//         }
//     }
// }
// console.log(test());

// 12-masala 
// function probel(string) {
//     return string.replaceAll(' ','');
//   }
//   console.log(probel("salom hammaga"));

// 13-masala 
// function test(arg="salom hammaga",arg1=" hayir") {
//     return arg.concat(arg1)
// }
// console.log(test());

// 14-masala
// 15-masala 
// let arr=[1,2,3,4,5,5,6] ;
// function test(arr) {
//     let res = [];
//     for (const iterator of arr) {
//         if(!res.includes(iterator)) {
//             res.push(iterator)
//         }
//     }
//     return res;
// }
// console.log(test(arr));

// 1-masala 

// function num(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum +=arr[i];
//     }
//     return sum;
// }

// console.log(num([1, 2, 3, 4, 5, 6, 7, 8]));
// console.log(num([11, 55, 99]));
// console.log(num([11, 55, 7]));

// 2-masala 

// function num(arr) {
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {

//             max = arr[i]
//         }

//     }
//     return max;
// }

// console.log(num([1, 2, 3, 4, 5, 6, 7, 8]));

// 3-masala 
// function sum(arr) {
//     let res = [];
//     for (let i = 0; i < arr.length; i++) {
//         res.unshift(arr[i]); 
//     }
//     return res;
// }

// let arr = [2, 4, 6, 8, 10];
// console.log(sum(arr));

// 4-masala 

// function sum(arr) {
//     return arr.filter(num => num > 0);
// }
// console.log(sum([-2,5,6,-9]));    



// 5-masala 
// function num(arr) {
//     return arr.map(num => num * num);
// }

// console.log(num([1, 2, 3, 4, 5])); 

// 6-masala 
// function sum(arr) {
//     return arr.filter((item, index) => arr.indexOf(item) === index);
// }

// console.log(sum([1, 2, 2, 3, 4, 4, 5]));
// console.log(sum(['a', 'b', 'a', 'c']));

// 7-masala 
// function name(arg1 , arg2) {
//     return arg1.concat(arg2) 
// }

// console.log(name(['salom' , 'xayr'],['salomat' , 'xayr']));
// console.log(name(['salomat' , 'xayr'],['salom' , 'xayr'],));

// 8 masala

// function sum(arr) {
//     let num = arr.filter(num => num % 2 !== 0);
//     return num.length;
// }

// console.log(sum([1, 2, 3, 4, 5, 6, 7])); 
// console.log(sum([10, 12, 14, 15, 16])); 

// 9 masala

// function name(arr) {
//     let res = [];
//     for (const iterator of arr) {
//         res.push(iterator + a);
//     }
//     return res
// }

// let arr = [1,2,3,4];
// let a = +prompt('son krting');
// let res = name(arr);
// console.log(res);


// 10=masala 

// function num(arr) {
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {

//             min = arr[i]
//         }

//     }
//     return min;
// }

// console.log(num([1, 2, 3, 4, 5, 6, 7, 8]));
  

  

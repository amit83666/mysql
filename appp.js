//console.log(__filename);

// function hi(atom){
//     atom();
// }

// //hi();

// var bye=function(){
//     console.log("bye");
// }

// //bye();

// hi(bye);

// var counter = function(arr){
//     return 'there are ' + arr.length + ' elements in the array ';
// } 



// module.exports= counter;

// const arr =[7,8,5,2,4,18,1,3,6,9];

// function max(){
//  let max=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i];
//         }
//     }   
//     console.log(max);
// }

// max();

//promises

// let p = new Promise((resolve, reject)=>{
//     let a = 1 + 2;
//     if(a===2){
//         resolve("Success");
//     }else{
//         reject("not done yet");
//     }
// })

// p.then((message)=>{
//     console.log("This is in the then "+ message);
// }).catch((message)=>{
//     console.log("This is in the catch "+ message);
// })

//callbacks

function greeting(callback){
    console.log("calllback in the greeting");
}
greeting();
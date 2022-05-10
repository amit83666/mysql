// console.log(__dirname);
// console.log(__filename);

// var time=0;

// var timer =setInterval(function(){
//     time +=2;
//     console.log(time  + ' seconds have passsed');
//     if(time>6){
//         clearInterval(timer);
//     }    
// },2000)

// setTimeout(()=>{
//     console.log("after the 3 seconds");
// },3000);

const counter = require("./appp");
console.log(counter(['amit', "jaynit", 'nitish']));
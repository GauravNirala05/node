// let as=async ()=>{
// let a=50
// let b=100
// let c=500
// for (let index = 0; index < 100; index++) {
//     console.log(a);
// }
// for (let index = 0; index < 1000; index++) {
//     console.log(b);
// }
// for (let index = 0; index < 100; index++) {
//     console.log(c);
// } 
// }
// async function asy(){
// console.log(`it s very hot around here!!!`)
// setTimeout(() => {
//     console.log(`it s very cold around here 1!!!`)
// }, );
// setTimeout(() => {
//     console.log(`it s very cold around here 2!!!`)
// }, 1000);
// for (let index = 0; index < 1000; index++) {
//     console.log(`it s very rainy !!!`)
// } 
// for (let index = 0; index < 1000; index++) {
//     console.log(`it s very slipery !!!`)
// } 
// }

// asy()

console.log(`start`)

console.time()
setTimeout(() => {
    for (let index = 0; index < 10000; index++) {
        console.log(index)
    }
    console.timeEnd()
}, 0);

console.log(`end`)

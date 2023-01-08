let i=1
setInterval(() => {
   console.log(i); 
   i++
}, 1000);
console.log(`starting`);
setTimeout(() => {
    console.log(`hey iys first`);
}, 5000);
console.log(`starting next`);
setTimeout(() => {
    console.log(`hey its third`);
}, 2000);
console.log(`starting next`);

setTimeout(() => {
    console.log(`hey iys second`);
}, 5000);
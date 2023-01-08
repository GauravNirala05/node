// const fs=require(`fs`)
// console.log(fs);

const {readFileSync,writeFileSync}=require(`fs`)

let read1=readFileSync(`.\\texts\\note.txt`,'utf8')
let read2=readFileSync(`.\\texts\\note2`,'utf8')
console.log(read1);
console.log(read2);

writeFileSync('.\\writter1.txt',`its first writer and\n ${read1}\n and ${read2}`,{flag:'a'})
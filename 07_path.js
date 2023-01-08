const path=require(`path`)
// console.log(path);
console.log(path.sep);
console.log(path.basename(`G:\\My Folder\\Web Development\\04. NODEJS`));
console.log(__dirname);
console.log(path.dirname(__dirname));
let a=path.resolve(__dirname,'04. NODEJS')
let b=path.join(__dirname,'04. NODEJS',)
let c=path.parse(__dirname,'04. NODEJS')
console.log(a);
console.log(b);
console.log(c);
const {readFile,writeFile}=require(`fs`)

readFile(`.\\texts\\note.txt`,'utf8',(error,result)=>{
    if(error){
        // console.log((`its running`));
        console.log(error);
        return
    }
    // console.log(result);
    const first=result
    readFile(`.\\texts\\note2.txt`,'utf8',(error,result)=>{
        if(error){
            // console.log((`its running`));
            console.log(error);
            return
        }
        // console.log(result);
        const second=result

        writeFile(`.\\writter2.txt`,`hey its a ${first}\n\n ${second}`,{flag:'a'},(err,res)=>{
            if(err){
                console.log(err);
                return
            }
            // console.log(res);  
        })
    })
})


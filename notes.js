//logic add/delet/read/list
const fs=require('fs')
//yargs.argv.title, yargs.argv.body
const addNote=(title,body)=>{
    const notes=loadNotes() //array of object[] [{title:"test1",body:"body1"}]
    notes.push({
        title,  //short hand property
        body:body
    })      //[{title:"new",body:"test"}]  
    //console.log(notes)
    saveNotes(notes)  
}
const loadNotes = () =>{
    // const data=fs.readFileSync('notes.json').toString()
    //object
    //return JSON.parse(data)
    try{
        const data=fs.readFileSync('notes.json').toString()
         //object
    return JSON.parse(data)
    }
    catch(e){
        return[]
    }
}

const saveNotes=(notes) =>{
    //[{title:"test1",body:"body1"},{title:"test2",body:"body2"}]
     //[{"title':"test1","body":"body1"},{"title":"test2","body":"body2"}]
     const saveData = JSON.stringify(notes)
     fs.writeFileSync('notes.json',saveData)
}
module.exports={
    addNote  //short hand 
}
////////////////////////////////////////
//delet
const removeNote = (title) =>{
    const notes = loadNotes()
    const notesToKeep = notes.filter((obj)=>{
        return obj.title !== title 
    })
    if(notes.lenght !== notesToKeep.lenght){
        console.log(notesToKeep)
        saveNotes(notesToKeep)
        console.log('remove')
    
    }
    else{
        console.log('title not found to delet')
    }


}

////////////////////////////////////////
//read
/*const readNote = (title) =>{
    const notes = loadNotes()
    const notesToKeep = notes.filter((obj)=>{
        return obj.title !== title 
    })
    if(notes.lenght !== notesToKeep.lenght){
        console.log(notesToKeep)
        saveNotes(notesToKeep)
        console.log('read')
    }
    else{
        console.log('title not found to delet')
    }


}*/
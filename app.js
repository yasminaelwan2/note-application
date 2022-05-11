//node app.js
/*const fs=require('fs')
fs.writeFileSync('notes.txt','hello')
console.log(fs.readFileSync('notes.txt').toString())
//////////////////////////
const data=require('./data')
console.log(data);
console.log(data.firstName)
console.log(data.lName)
console.log(data.addFun(5,5))

const x=require('./data')
console.log(x);
console.log(x.firstName)
console.log(x.lName)
console.log(x.addFun(5,5))
/////////////////
var validator = require('validator');

console.log(validator.isEmail('foo@bar.com')); //=> true)*/
///////////////session 3////////////////////
/*console.log(process.argv)
for(let i=2;i<process.argv.length;i++){
    if(process.argv[i]==='add'){
        console.log('AddItem')
    }else if(process.argv[i]==='remove'){
        console.log('DeletItem')
    }else{
        console.log('error')
    }
}*/
///////////

const yargs = require('yargs')
//version1
//add
/*yargs.command({
    command:'add',
    describe:'Add notes',
    handler:()=>{
        console.log('add Notes')
    }
})
//delet
yargs.command({
    command:'delet',
    describe:'delet notes',
    handler:()=>{
        console.log('Delet notessss')
    }
})
//read
yargs.command({
    command:'read',
    describe:'read notes',
    handler:()=>{
        console.log('read notessss')
    }
})
//list
yargs.command({
    command:'list',
    describe:'list notes',
    handler:()=>{
        console.log('list notessss')
    }
})*/
//////////////
//version2
//add
/*yargs.command({
    command:'add',
    describe:'Add notes',
    builder:{
        title:{
            describe:'this is  title description in add command',
            type: 'string',
            demandOption:true
        },
        body:{
            describe:'this is  body description in add command',
            type: 'string',
            demandOption:true
        }
    },
    handler:()=>{
        console.log('add Notes')
    }
})
//delet
yargs.command({
    command:'delet',
    describe:'delet notes',
    builder:{
        title:{
            describe:'this is  title description in add command',
            type: 'string',
            demandOption:true
        }
    },
    handler:()=>{
        console.log('Delet notessss')
    }
})
//read
yargs.command({
    command:'read',
    describe:'read notes',
    builder:{
        title:{
            describe:'this is  title description in add command',
            type: 'string',
            demandOption:true
        }
    },
    handler:()=>{
        console.log('read notessss')
    }
})
//list
yargs.command({
    command:'list',
    describe:'list notes',
    handler:()=>{
        console.log('list notessss')
    }
})*/
//////////////////////////
//version3
const notes = require('./notes')
//add
yargs.command({
    command:'add',
    describe:'Add notes',
    builder:{
        title:{
            describe:'this is  title description in add command',
            type: 'string',
            demandOption:true
        },
        body:{
            describe:'this is  body description in add command',
            type: 'string',
            demandOption:true
        }
    },
    handler:()=>{
        notes.addNote(yargs.argv.title,yargs.argv.body)
        //console.log('add Notes')
    }
})
//deleteeeeee
yargs.command({
    command:'delet',
    describe:'delet notes',
    builder:{
        title:{
            describe:'this is  title description in add command',
            type: 'string',
            demandOption:true
        }
    },
    handler:()=>{
        console.log('Delet notessss')
    }
})
//read
yargs.command({
    command:'read',
    describe:'read notes',
    builder:{
        title:{
            describe:'this is  title description in add command',
            type: 'string',
            demandOption:true
        }
    },
    handler:()=>{
        console.log('read notessss')
    }
})
//list
yargs.command({
    command:'list',
    describe:'list notes',
    handler:()=>{
        console.log('list notessss')
    }
})

yargs.parse()
//console.log(yargs.argv)
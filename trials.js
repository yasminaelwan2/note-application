//step1
const person={
    name:'yaso',
    age:24
}
console.log(person)
//step2
const personJson=JSON.stringify(person)
console.log(personJson)
//step3
const fs=require('fs')
fs.writeFileSync('test.json',personJson)
console.log(fs.readFileSync('test.json').toString())
//step4
const objectData=JSON.parse(personJson)
console.log(objectData)
//step5
objectData.name='asmaa'
objectData.age=66
//step6,7
fs.writeFileSync('test.json',JSON.stringify(objectData))
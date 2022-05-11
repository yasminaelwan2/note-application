/*let user =prompt("Enter your name");
let grade =parseInt(prompt("Enter your grade"));
if(grade<=100&&grade>=90){
    console.log("A");
}
else if(grade<=90&&grade>85){
    console.log("B")
}
else if(grade<=85&&grade>70){
    console.log("C")
}
else if(grade<=70&&grade>60){
    console.log("D")
}else{
    console.log("F")
}*/

/*let i=0;
while(i<=10){
    if(i%2==1){
        console.log( i  + ' is odd')
    }
    i++;
}*/

/////////////////
/*let measure =(uName,h,w)=>{
    console.log(uName)
    return h*w
}
console.log(measure('yaso',3,3))*/
////////////////////
/*let fruits=['orange','apple','graps'];
/*for(let i=0;i<=fruits.length;i++){
    console.log(fruits[i]);
}*/
/*fruits.forEach((fruit)=>{
console.log(fruit)
});*/
//////////////////////////
/*let students = [
    {
        name:'Omar',
        age:15,
        math:17,
        arabic:17,
        eng:20,
        deg:[17,17,20]
    },
    {
        name:'Mostafa',
        age:15,
        math:13,
        arabic:11,
        eng:10,
        deg:[13,11,10]
    },
    {
        name:'Yassin',
        age:17,
        math:16,
        arabic:13,
        eng:1,
        deg:[16,13,1]
    }
]
students.forEach((el) => {
   console.log(el.name) 
   sum=0;
   el.deg.forEach((d)=>{
   sum+=d;
})
console.log(sum);
});*/

////////////////////////////////////////////////////
/*console.log('first')
setTimeout( ()=>{
    console.log('this msg is shown after 3 sec')
},5000)
console.log('last')*/
///////////////
let myPromise =new Promise((resolve,reject)=>{
    if(3>2){
        resolve('right')
    }
    reject('wrong')
})
myPromise
.then((data)=>{console.log(data)})
.catch((err)=>{console.log(err)})
console.log('last line')
/*for(i=1;i<=100;i++){
        if(i%3==0 && i%5==0){
                document.write('fizzbuzz'+" ")
        }
        else if(i%3==0){
                document.write('fizz'+" ")
        }

        else if(i%5==0){
                document.write('buzz'+" ")
        }else{
        document.write(i+ '')
        }
}*/


/*var a = parseInt(prompt('enter value'))
product = 1
while(a!=0){
        document.write(a + ' ')
        product*=a
        var a=parseInt(prompt('enter new value'))

}
document.write('<br>' +product)
document.write('hi')*/

//do while

/*var a=parseInt(prompt('enter value'))
 var f=5
do{
        document.write(a +' ')
        var a=parseInt(prompt('enter new value'))
}while(a!=0){
        document.write(f)
}*/

/*var a=parseInt(prompt('enter start value'))
var b=parseInt(prompt("enter last value"))
for(number=a;number<=b;number++){
        if(number%2==0){
                document.write(number +' ')
        }
}*/

/*var a=parseInt(prompt('enter start value'))
var b=parseInt(prompt('enter end value'))
for(i=a;i<=b;i++){
        if(i%5==0 && i>=200 && i<=1000){
                document.write(i + ' ')
        }
}*/

/*var a=parseInt(prompt('enter sta'))
var b=parseInt(prompt("enter b"))
for(i=a;i<=b;i++){
        if(i%2==0){
                document.write(i + ' ')
        }
}*/


//while
/*var a=parseInt(prompt('enter a'))
while(a!=0){
        document.write(0 + " ")
var a=parseInt(prompt('enter a'))

}*/



/*var a=parseInt(prompt('enter a'))
var b=parseInt(prompt('enter b'))
for(i=a;i<=b;i++){
        if(i%2==0){
                document.write(i + " ")
        }
        if(i%2==1){
                document.write(i + " ")

        }
}*/

/*for(i=10;i<=100;i++){
        if(i%2==0){
                document.write(i + " ")
        }
}*/


/*function name(){
        var a=10
        var b=4
        return a+b
}
console.log(name())*/


/*function display(a){
        if(a%2==0){
                return 'even'
        }else{
      
                return'odd'
        }
}
        var p1=parseInt(prompt('enter'))
        console.log(display(p1))

//console.log(display(parseInt(prompt('enter'))))*/


/*function myFunction(g1, g2) {
        var g1=8
var g2=2
        return g1 / g2;
    }
     // Calling the function
    document.write(myFunction());*/

    /*var a=[10,20,30]
    a.push(40)
    console.log(a)
    a.push('string')
    a.pop()*/
    /*var a=[1,2,3,4,5]
    var b=0
    for(i=0;i<a.length;i++){
        b+=a[i]

    }
console.log(b)*/




/*var b=parseInt(prompt('enter length'))
var a=[]
for(i=0;i<b;i++){
      

a.push(parseInt(prompt('enter elements'+ (i+1))))
}

console.log(a)*/



/*var b=parseInt(prompt('enter length'))
var a=[]
for(i=0;i<b;i++){
      

var c=parseInt(prompt('enter elements'+ (i+1)))

if(c%2==0){
    a.push(c)
}
}
console.log(a)*/


/*var a=parseInt(prompt('enter length'))
var b=[]
for(i=0;i<a;i++)
{
      var c=(parseInt(prompt('enter element' + (i+1))))
        if(c%2==0){
                b.push(c)
            }
}
console.log(b)*/


/*var a=[1,3,4,80]
max=a[0]
for(var  i in a){
if(max<a[i]){
        max=a[i];
}
}
console.log(max)*/


//var a=[1,2,3,4,5,6]

//a.unshift(0)
//a.shift()

//console.log(a)

//console.log(a.indexOf(2))

//var b=a.slice(0,4)

//
//console.log(b)




/*var a=parseInt(prompt('enter length'))
var b=[]
var even=[]
for(i=0;i<a;i++){
    b.push(parseInt(prompt('enter elements')))

}
if(a.length%2==1){
var  e=a.length/2
b[i]=a[e]

}
console.log(b)
*/



// var a=[1,2,10,8,4,5]
// let len=Math.floor(a.length/2)
// if(a.length%2==0)
// {
//         console.log(a[len-1] +' ' +a[len])
// }else{
//         console.log(a[len])
// }




//  a=new String('string')

// sli=a.toUpperCase(a)
// document.write(sli)
// d=a.toLowerCase(a)
// document.write(d)

// let a='mom'

// let sli=a.split('').reverse().join('')
// if(a===sli){
//         document.write('same')
// }else{
//         document.write('not same')
// }


// let a='   mom   '
// let b=a.trimStart()
// document.write(b)


// 







// var a={
//         name:'deepu',course:'fs',age:'20'
// }
// console.log(a.name,a.course)

// class main{
//         person(){
//             console.log('trainer')
//         }
//     }
//     class main1 extends main{
//         person(){
//             console.log("trainer")
//         }
//     }
//     class main2 extends main1{
//         person(){
//         console.log(player)
//     }
//     }
//     var a=new main()
//     a.parent()



// var a=[1,2,3,4]
// var b=[1,2,3]

// var c=[...a,...b]
// console.log(c)

// var a=
// {
//         name:'jsd',age
       
// }
// var b={
//         age:'12'
// }

// var c={...a,...b}
// console.log(c)

// var age={
//         name:'hucgdwi',
//         age:'33',
//         adress:{
//                 parmenent:ele''
//         }
// }


// const a=[1,2,3,4,5,6,7]
// a.splice(2,2,55)
// document.write(a)


var a=[1,2,3,4]
var b=a.reverse()
document.write(b)
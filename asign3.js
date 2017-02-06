let myArr = [1,2,3]
function add(a)
{
return a + 2
}
console.log('Array is')
console.log(myArr)
for(let i=0; i<myArr.length; i++)
{
myArr[i]= add(myArr[i])
}
console.log('Modified Array is:')
console.log(myArr)

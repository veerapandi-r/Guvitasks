function printAllValues(obj) {
    var arr=[]
    for (var key in obj) { 
    //console.log(key, obj[key])
    arr.push(obj[key])
  }
  console.log(arr)
}
var obj = {name : "RajiniKanth", age : 33, hasPets : false}
printAllValues(obj)

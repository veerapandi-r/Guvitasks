function printAllkeys(obj) {
    var arr=[]
    for (var key in obj) { 
    //console.log(key, obj[key])
    arr.push(key)
  }
  console.log(arr)
}
var obj = {name : "RajiniKanth", age : 33, hasPets : false}
printAllkeys(obj)

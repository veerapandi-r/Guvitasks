function printAllValues(obj) {
    for (var key in obj) { 
    console.log(key, obj[key])
  }
}
var obj = {name : "RajiniKanth", age : 33, hasPets : false}
printAllValues(obj)

function convertTolist(obj) {
    var arr=[]
    for (var key in obj) { 
        let subarr=[]
        subarr.push(key,obj[key])
        arr.push(subarr)
  }
  console.log(arr)
}
var object = {name: "ISRO", age: 35, role: "Scientist"};
convertTolist(object)

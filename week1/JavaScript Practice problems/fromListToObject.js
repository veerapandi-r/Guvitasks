function fromListToObject(arr) {
//var json = Object.assign(arr[0], arr[arr.length-1]);
var obj = {};
arr.forEach(function(data){
    console.log(data)
    obj[data[0]] = data[1]
});
return obj
}
var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
console.log(fromListToObject(arr))

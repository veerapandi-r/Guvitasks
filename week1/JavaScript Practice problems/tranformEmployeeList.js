function tranformEmployeeList (arr) {
var emp=[]
arr.forEach(function(data){
     var obj = {};
   data.forEach(function(arrdata){
      obj[arrdata[0]] = arrdata[1]
   })
     emp.push(obj)
});
return emp
}
var arr= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
console.log(tranformEmployeeList(arr))

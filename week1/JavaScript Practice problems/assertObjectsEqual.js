var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 8}
assertObjectsEqual(actual, expected, "detects that two objects are equal");
function assertObjectsEqual(actual, expected, testName){
    if(JSON.stringify(expected)===JSON.stringify(actual))
    {
        console.log("passed")
    }
    else
    {
        console.log("FAILED expected", expected, "but got",actual)
    }
}

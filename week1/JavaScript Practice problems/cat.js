var cat = {
 name: "Fluffy",
 activities: ["play", "eat cat food"],
 catFriends: [
 {
 name: "bar",
 activities: ["be grumpy", "eat bread omblet"],
 weight: 8,
 furcolor: "white"
 }, 
 {
 name: "foo",
 activities: ["sleep", "pre-sleep naps"],
 weight: 3
 }
 ]
}
console.log("Before doing Changes",cat);
console.log("Adding height and weight to Fluffy")
cat.height="28cm"
cat.weight="2kg"
console.log(cat)
console.log("changeing name of the cat")
cat.name="Fluffyy"
console.log(cat)
console.log("catfriends name and Tasks")
var weight=0;
var act=0;
act=cat.activities.length
for(let i=0;i<cat.catFriends.length;i++)
{
    console.log(cat.catFriends[i].name ,':',cat.catFriends[i].activities)
    weight+=cat.catFriends[i].weight
    act+=cat.catFriends[i].activities.length
}
console.log("catfriends Total weight " ,weight)
console.log("Total cat activities  " ,act)
console.log("Add 2 more activities to bar & foo cats")
for(let i=0;i<cat.catFriends.length;i++)
{
    cat.catFriends[i].activities=[ 'be grumpy', 'eat bread omblet','sleep', 'pre-sleep naps'  ]
}
console.log(cat.catFriends[0].activities)
cat.catFriends[0].furcolor="black"
console.log(cat)

var obj = [
    { "id": 4, "name": "abc" },
    { "id": 10, "name": "abc2g" },
    { "id": 5, "name": "abc3" },
    { "id": 6, "name": "abc5" },
]
// * I was not able to understand this question I think obj is the array of objects like above 
// * If treating obj as an array of objects we can sort obj by id as said in the question
const sortedByID = obj.sort((a, b) => a.id - b.id)
console.log(sortedByID);


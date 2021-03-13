
async function getData() {

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${Math.floor(Math.random() * 10)}`)
    const data = await res.json()
    return `${data.name} lives in ${data.address.street} in ${data.address.city} city`
}
//  * We can do by both the ways 

// * Way 1 --> 
getData().then((data) => console.log(data)).catch((err) => console.log(err))

// * Way 2 --> 
async function getPersonInfo() {
    const data = await getData()
    console.log(data);
}
// * Calling the function 
getPersonInfo()


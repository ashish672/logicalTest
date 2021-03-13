function maxConsecutiveOne(num) {
    let count = 0
    let countOne = 0
    const arr = num.split("")
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "0") {
            count = 0
        } else {
            count++
        }
        if (count > countOne) {
            countOne = count
        }
    }

    return countOne
}
console.log(maxConsecutiveOne("1000010001"))










const unmodifiedTestArr = [1, 2, 3, 4]
const unmodifiedTestObj = {one: 1, two: 2, three: 3, four: 4}

const isAnArray = (collection) => {
    if (Array.isArray(collection) === true) {
        return [...collection] 
    } else return [...Object.values(collection)]
} 

const myEach = (collection, callback) => {
    let temp = isAnArray(collection)
    for(let i = 0; i < temp.length; i++){
        callback.call(this, temp[i]);
    }   
    return collection
}

const myMap = (collection, callback) => {

    let map = [];
    let temp = isAnArray(collection)

    for(let i = 0; i < temp.length; i++){
        map.push(callback.call(this, temp[i]))
    }
    // console.log(newArr)
    return map;
}

const myReduce = (collection, callback, acc) => {

    let temp = isAnArray(collection)

    if(acc === undefined) acc = temp[0];
    for(let i = 0; i < temp.length; i++){
        if (acc === temp[i]) i = i + 1;
        acc = callback.call(this, acc, temp[i])
    }

    return acc;
}

const myFind = (collection, callback) => {
    let temp = isAnArray(collection)
    for(let i = 0; i < temp.length; i++){
        if(callback.call(this, temp[i]) === true) return temp[i];
    }
}

const myFilter = (collection, callback) => {
    let arr = [];
    let temp = isAnArray(collection)
    for(let i = 0; i < temp.length; i++){
        if (callback(temp[i]) === true) arr.push(temp[i]); 
    }
    return arr;
}

const mySize = (collection) => isAnArray(collection).length

const myFirst = (arr, int) => {
    if (int === undefined) return arr[0] 
    let temp = []
    for(let i = 0; i < int; i++){
        temp.push(arr[i])
    }
    return temp
}

const myLast = (arr, n) => {
    if (n === undefined) return arr[arr.length - 1];
    let temp = [];
    for (let i = 0; i < n; i++){
        temp.unshift(arr[arr.length - i - 1]);
    }
    return temp;
}

const myKeys = (obj) => {
    let temp = []
    for(let key in obj){
        temp.push(key)
    } return temp
}

const myValues = obj => {
    let temp = []
    for(let key in obj){
        temp.push(obj[key])
    } return temp
}

const unsortedIntArr = [3, 8, 5, 1, 9, 11, 8]
const unsortedStringArr = ["maru", "choux", "doge", "coconut"]

function sortArrFunction(val) { return val }
function sortIntsBySin(val) {
    // console.log(val) 
    return Math.sin(val) 
}
function sortObjFunction(obj) { return obj.age }

const mySortBy = (arr, callback) => {
    let temp = [...arr];
    typeof temp[0] === 'string' ? temp.sort() : temp.sort((x, y) => x - y);
    return temp;
}

mySortBy(unsortedIntArr, sortArrFunction);


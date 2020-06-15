

// Calls a function once for each element in an array, in order.
function myForEach(arr, func){
    for(let i = 0; i < arr.length; i++){
        func(arr[i], i);
    }
}

// Creates a new array with the results of calling a function for every array element.
function myMap(arr, func){
    const newArr = [];
    for(let i = 0; i < arr.length; i = i + 1){
        newArr.push(func(arr[i], i));
    }
    return newArr;
}

//----------------------------------------------------------------

const paises = ['Brasil', 'Argentina', 'Alemanha', 'Uruguai'];

// forEach
console.log("\n forEach:");
const retForEach = paises.forEach(function(pais, i){
    console.log("Linha:", i, pais);
    return pais.toUpperCase();
});

console.log("Array:", retForEach);

// myForEach
console.log("\n myForEach:");
const retMyForEach = myForEach(paises, function(pais, i){
    console.log("Linha:", i, pais);
    return pais.toUpperCase();
});

console.log("Array:", retMyForEach);

// map
console.log("\n map:");
const retMap = paises.map(function(pais, i){
    console.log("Linha:", i, pais);
    return pais.toUpperCase();
});

console.log("Array:", retMap);

// myMap
console.log("\n myMap:");
const retMyMap = myMap(paises, function(pais, i){
    console.log("Linha:", i, pais);
    return pais.toUpperCase();
});

console.log("Array:", retMyMap);

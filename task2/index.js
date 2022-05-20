// 1. Please write a function that shows the usage of closures

// think of it as env for functions written inside
const printer = (() => {
    let word = '';

    return () => {
        word += Math.floor(Math.random() * 10);
        console.log(word);
    };
})();

printer();
printer();
printer();
printer();

// 2. Please write a function that returns a sum of array items
// example input [9, 1, 22, 0, 2]
// example output 34

input = [12, 45, 221, 45]
const sumArray = (array = []) => {
    /*
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum;
    */
    return array.reduce((sum, element) => (sum + element), 0);
}
console.log(sumArray(input));

// 3. Please write a recursive function that flattens a list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]

input = [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]
const flattenArray = (array = []) => {
    /*
    const newArray =[];
    
    const flattener = (array = []) => {
        
        array.forEach(item => {
            if(Array.isArray(item)){
                flattener(item);
            }
            else newArray.push(item);
        });
    }
    flattener(array);

    return newArray;
    */

    return (array.reduce((newArray, array) => {
        return newArray.concat(Array.isArray(array) ? flattenArray(array) : array)
    }, []));
}
console.log(flattenArray(input));

// 4. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]

input1 = ['b', 3, 4, 76, 'c']
input2 = ['a', 'b', 4, 76, 21, 'e']
const findSimilar = (array1 = [], array2 = []) => {
    /*
    const newArray = [];
    
    array1.forEach(item1 => {
        array2.forEach(item2 => {
            if(item1 === item2){
                newArray.push(item1);
            }
        });
    });

    return newArray;
    */

    return array1.filter(item => array2.includes(item));
}
console.log(findSimilar(input1, input2));

// 5. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']

input1 = ['b', 3, 4, 76, 'c']
input2 = ['a', 'b', 4, 76, 21, 'e']
const findDifferent = (array1 = [], array2 = []) => {
    /*
    const newArray = [];

    array1.forEach(item1 => {
        let exists = false;
        array2.forEach(item2 => {
            if(item1 === item2){
                exists = true;
            }
        });
        if(!exists)
            newArray.push(item1);
    });
    array2.forEach(item1 => {
        let exists = false;
        array1.forEach(item2 => {
            if(item1 === item2){
                exists = true;
            }
        });
        if(!exists)
            newArray.push(item1);
    });

    return newArray;
    */

    return (array1.concat(array2)).filter(item => !(array2.includes(item) && array1.includes(item)));
}
console.log(findDifferent(input1, input2));

// 6. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]

input1 = [1,2,3]
input2 = [4,5,6,7]
const makeTuples = (array1 = [], array2 = []) => {
    
    const newArray = [];

    for(let q = 0; q < Math.min(array1.length, array2.length); q++) {
        newArray.push([array1[q], array2[q]]);
    }

    return newArray;
}
console.log(makeTuples(input1, input2));

// 7. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'

path = ['a', 'b', 'c', 'd']
object = { a: { b: { c: { d: '23' } } } }
const getValueFromPath = (path = [], object = {}) => {
    
    while(path.length !== 0) {
        object = object[path[0]];
        path.shift();
    }
    return object;
}
console.log(getValueFromPath(path, object));

// 8. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false

object1 = { a: 'b', c: 'd' }
object2 = { c: 'd', a: 'b' }

const isEqual = (object1 = {}, object2 = {}) => {
    
    for( item in object1 ) {
        if(!object2.hasOwnProperty(item))
            return false;
        
        if(object1[item] !== object2[item])
            return false; 
    }
    for( item in object2 ) {
        if(!object1.hasOwnProperty(item))
            return false;
    }

    return true;
}
console.log(isEqual(object1, object2));

// 9. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }

keys = ['color', 'size'],
object = { color: 'Blue', id: '22', size: 'xl' }

const trimObject = (keys = [], object = {}) => {
    
    keys.forEach( item => {
        delete object[item];
    });
    
    return object;
}
console.log(trimObject(keys, object));

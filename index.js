// Create a function that takes an object and returns the keys and values as separate arrays.


// Example 
// {a: 1, b: 2, c: 3}
// Output

// [[a,b,c],[1,2,3]]

function arrayify(obj){
    let results = [];
    results.push(Object.keys(obj));
    results.push(Object.values(obj));
    return results;
}


// console.log(arrayify( {a: 1, b: 2, c: 3}))



// Create a function that takes a string as an argument and converts the first character of each word to 

// uppercase. Return the newly formatted string.

// Example:

// "hi how are you today"

// Output:
// Hi How Are You Today


function upperMy(str){
    results = ''
    str.split(' ').forEach((word)=>{
        results += word[0].toUpperCase() + word.substring(1,word.length) + " "
    })
    return results.substring(0,results.length - 1)
}
// console.log(upperMy("hi how are you today"))


function reverseInt(number){
    number = number.toString().split('')
    let result = ''
    for (let i = number.length - 1; i >= 0; i--){
        result += number[i]
    }
    return parseInt(result)
}
// console.log(reverseInt(12345))

function printMe(num){
    let response = ''
    for (let i = 1; i <= num; i++){
        response += "#"
        console.log(response)
    }
}
// printMe(7)



// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


function palindromeIs(str){
    if (str.split('').reverse().join('') === str) {
        return true
    }
    return false

}

// console.log(palindromeIs('Abba '))



// Given an array and chuck size, divide the array into may sub arrays where each sub array is of size length

// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


function ArrayIn(arr, num){
    counter = 1;
    resI = 0;
    results = [[]];
    for (let i=0; i < arr.length; i++){
        results[resI].push(arr[i])
        counter += 1;
        if(counter > num){
            results.push([])
            counter =1;
            resI += 1;
        }
    }
    return results
}
// console.log(ArrayIn([1,2,3,4,5],2))



// Write a program that console.log's from 1 to n. For multiples of 3 print "fizz", for multiples of 5 print "buzz", and for multiples of 

// three and five print "fizz buzz".


function doExtraStuff(func, str){
    return func(str);
}
console.log(doExtraStuff(arrayify,"hehee"))



// let myObj= {
//     nam:'thingy'
//     .this = "yup"
// }
// console.log(myObj.this)




// 1. When declared globally
// empty object
// 2. When declared inside a Inside a function
// to the global object

// 3. When declared inside  an object

// 4. When declared inside a nested object


// 5. An annonymous function declared in an object

// 6. A function declaration inside an object


class YUP{
    constructor (KNOWLEDGE){
        this.KNOWLEDGE = KNOWLEDGE;
    }
    printMe(num){
        let response = ''
        for (let i = 1; i <= num; i++){
            response += "#"
            console.log(response)
        }
    }
    palindromeIs(str){
        if (str.split('').reverse().join('') === str) {
            return true
        }
        return false
    
    }
    upperMy(str){
        let results = ''
        str.split(' ').forEach((word)=>{
            results += word[0].toUpperCase() + word.substring(1,word.length) + " "
        })
        return results.substring(0,results.length - 1)
    }

    static ArrayIn(arr, num){
        counter = 1;
        resI = 0;
        results = [[]];
        for (let i=0; i < arr.length; i++){
            results[resI].push(arr[i])
            counter += 1;
            if(counter > num){
                results.push([])
                counter =1;
                resI += 1;
            }
        }
        return new YUP(results)
    }

    static reverseInt(number){
        number = number.toString().split('')
        let result = ''
        for (let i = number.length - 1; i >= 0; i--){
            result += number[i]
        }
        return new YUP(parseInt(result))
    }

    static arrayify(obj){
        let results = [];
        results.push(Object.keys(obj));
        results.push(Object.values(obj));
        return new YUP(results);
    }
}


let myInst = YUP.arrayify({a: 1, b: 2, c: 3})

let anotherInst = YUP.reverseInt(123456)

console.log(myInst.KNOWLEDGE)
console.log(anotherInst.KNOWLEDGE)
console.log(myInst.upperMy("hello how are yo"))


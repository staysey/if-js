
//Number 1
writeName = (name) => {
    console.log('name:', name);
}

let user = 'John Doe';
const student = 'Anastasia Korbit';
writeName(user);
writeName(student);
user = student;
//new value in user - 'Anastasia Korbit'
writeName(user);

//Number 2
let test = 1;
test++;
test = test + '1';
//new value in test - 21
console.log('summation result:', test);
test = !!test;
//new value in test - true
console.log('boolean result:', test);


//Number 3
multiplyNumbers = (arr) => {
    let res = 1;
    for (let i = 0; i<arr.length; i++) res*=arr[i];
    return res;
}
getNumsFromArray = (arr) => {
    let resArray = [];
    let j = 0;
    for (let i = 0; i<arr.length; i++) {
        if(arr[i] > 5 && arr[i] < 10) {
            resArray[j] = arr[i];
            j++;
        }
    }
    return resArray;
}
getEvenNumsFromArr = (arr) => {
    let resArray = [];
    let j = 0;
    for (let i = 0; i<arr.length; i++) {
        if(arr[i] % 2 === 0) {
            resArray[j] = arr[i];
            j++;
        }
    }
    return resArray;
}


const array = [2, 3, 5, 8];
const array2 = [2, 5, 8, 15, 0, 6, 20, 3];

let res = multiplyNumbers(array);
console.log('res of multiplication:', res);

res = getNumsFromArray(array2);
console.log('res of selection from array:', res);

res = getEvenNumsFromArr(array2);
console.log('even numbers:', res);



//NEW HOMEWORK: MORE PRACTICE WITH FUNCS

isPalindrome = (word) => {
    let counter = 0;
    for (let i = 0; i<word.length; i++) {
         if (word.charAt(i) === word.charAt(word.length - (i+1))) counter++;
    }
    if(counter === word.length) return true;
    else return false;
}

console.log('шалаш', isPalindrome('шалаш'));
console.log('авпрпва', isPalindrome('авпрпва'));
console.log('прпр', isPalindrome('прпр'));
console.log('оооо', isPalindrome('оооо'));

minFrom = (a, b) => {
    return Math.min(a,b);
}
maxFrom = (a, b) => {
    return Math.max(a,b);
}
minFrom2 = (a, b) => {
    if(isNaN(a) || isNaN(b)) return NaN;
    return (a<b) ? a : b;
}


console.log('min from (10, 11):', minFrom(10, 11));
console.log('min from (10, 10):', minFrom(10, 10));
console.log('min from (10, fdgf):', minFrom(10, 'fdgf'));

console.log('min from (10, 6):', minFrom2(10, 6));
console.log('min from (10, 6):', minFrom2(4, 'sdsaf'));

getRandomArray = () => {
    let array =[];
    for (let i=0; i<10; i++){
        array[i] = Math.floor(Math.random() * 100);
    }
    array[6] = 20;
    return array;
}

getChangedArray = (arr) => {
    for (let i=0; i<10; i++){
        arr[i] = arr[i].toString().replace('0','zero');
    }
    return arr;
}


let myArray = getRandomArray();
console.log('random array:', myArray);
myArray = getChangedArray(myArray);
console.log('changed array:', myArray);
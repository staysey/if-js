
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

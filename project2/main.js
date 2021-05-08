//NUM 1
formatDate = (date) => {
   let arr = date.split('-');
   arr = arr.reverse();
   return arr.join('.');
}

const date = '2020-11-26';
console.log('Changed date:', formatDate(date));

//NUM 2
const data = [
    {
        country: 'Russia',
        city: 'Saint Petersburg',
        hotel: 'Hotel Leopold',
    },
    {
        country: 'Spain',
        city: 'Santa Cruz de Tenerife',
        hotel: 'Apartment Sunshine',
    },
    {
        country: 'Slowakia',
        city: 'Vysokie Tatry',
        hotel: 'Villa Kunerad',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hostel Friendship',
    },
    {
        country: 'Indonesia',
        city: 'Bali',
        hotel: 'Ubud Bali Resort&SPA',
    },
    {
        country: 'Netherlands',
        city: 'Rotterdam',
        hotel: 'King Kong Hostel',
    },
    {
        country: 'Marocco',
        city: 'Ourika',
        hotel: 'Rokoko Hotel',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hotel Rehberge Berlin Mitte',
    },
];

findString = (array, str) => {
    let res = [];
    array.forEach(el => {
        if (el?.city?.includes(str) || el?.country?.includes(str) || el?.hotel?.includes(str)){
            res.push(`${el.country}, ${el.city}, ${el.hotel}`);
        }
    })
    if (res.length === 0) return -1;
    return res;
}

console.log('Found:', findString(data, 'Hotel Leopold'));
console.log('Found:', findString(data, 'Ourika'));
console.log('Found:', findString(data, 'Belarus'));
console.log('--------------------------------------------');


//WORKING WITH ARRAY
//Num 1
isPalindrome = (word) => {
    if(Array.from(word).reverse().join('')===Array.from(word).join('')) return true;
    return false;
}

console.log('шалаш', isPalindrome('шалаш'));
console.log('авпрпва', isPalindrome('авпрпва'));
console.log('прпр', isPalindrome('прпр'));
console.log('оооо', isPalindrome('оооо'));

//Num 2 done in lesson-5 :)

//Num 3
const hotels = [
    {
        name: 'Hotel Leopold',
        city: 'Saint Petersburg',
        country: 'Russia',
    },
    {
        name: 'Apartment Sunshine',
        city: 'Santa Cruz de Tenerife',
        country: 'Spain',
    },
    {
        name: 'Villa Kunerad',
        city: 'Vysokie Tatry',
        country: 'Slowakia',
    },
    {
        name: 'Hostel Friendship',
        city: 'Berlin',
        country: 'Germany',
    },
    {
        name: 'Radisson Blu Hotel',
        city: 'Kyiv',
        country: 'Ukraine',
    },
    {
        name: 'Paradise Hotel',
        city: 'Guadalupe',
        country: 'Mexico',
    },
    {
        name: 'Hotel Grindewald',
        city: 'Interlaken',
        country: 'Switzerland',
    },
    {
        name: 'The Andaman Resort',
        city: 'Port Dickson',
        country: 'Malaysia',
    },
    {
        name: 'Virgin Hotel',
        city: 'Chicago',
        country: 'USA',
    },
    {
        name: 'Grand Beach Resort',
        city: 'Dubai',
        country: 'United Arab Emirates',
    },
    {
        name: 'Shilla Stay',
        city: 'Seoul',
        country: 'South Korea',
    },
    {
        name: 'San Firenze Suites',
        city: 'Florence',
        country: 'Italy',
    },
    {
        name: 'The Andaman Resort',
        city: 'Port Dickson',
        country: 'Malaysia',
    },
    {
        name: 'Black Penny Villas',
        city: 'BTDC, Nuca Dua',
        country: 'Indonesia',
    },
    {
        name: 'Koko Hotel',
        city: 'Tokyo',
        country: 'Japan',
    },
    {
        name: 'Ramada Plaza',
        city: 'Istanbul',
        country: 'Turkey',
    },
    {
        name: 'Waikiki Resort Hotel',
        city: 'Hawaii',
        country: 'USA',
    },
    {
        name: 'Puro Hotel',
        city: 'Krakow',
        country: 'Poland',
    },
    {
        name: 'Asma Suites',
        city: 'Santorini',
        country: 'Greece',
    },
    {
        name: 'Cityden Apartments',
        city: 'Amsterdam',
        country: 'Netherlands',
    },
    {
        name: 'Mandarin Oriental',
        city: 'Miami',
        country: 'USA',
    },
    {
        name: 'Concept Terrace Hotel',
        city: 'Rome',
        country: 'Italy',
    },
    {
        name: 'Ponta Mar Hotel',
        city: 'Fortaleza',
        country: 'Brazil',
    },
    {
        name: 'Four Seasons Hotel',
        city: 'Sydney',
        country: 'Australia',
    },
    {
        name: 'Le Meridien',
        city: 'Nice',
        country: 'France',
    },
    {
        name: 'Apart Neptun',
        city: 'Gdansk',
        country: 'Poland',
    },
    {
        name: 'Lux Isla',
        city: 'Ibiza',
        country: 'Spain',
    },
    {
        name: 'Nox Hostel',
        city: 'London',
        country: 'UK',
    },
    {
        name: 'Leonardo Vienna',
        city: 'Vienna',
        country: 'Austria',
    },
    {
        name: 'Adagio Aparthotel',
        city: 'Edinburgh',
        country: 'UK',
    },
    {
        name: 'Steigenberger Hotel',
        city: 'Hamburg',
        country: 'Germany',
    },
];

getCountryIndex = (arr, country) =>{
    for(let i=0; i<arr.length; i++){
        if(arr[i][0].includes(country)) return i;
    }
    return -1;
}

findCountries = (array) => {
    let countries = [];
    let i = 0;
    array.forEach(el => {
        let res = getCountryIndex(countries, el?.country); //find index of existing country
        if(res!==-1){
            countries[res][1].push(el?.city); //add city to existing country
        }
        else{
            countries[i] = [];
            countries[i][0] = el?.country; //add new country
            countries[i][1] = [];
            countries[i][1].push(el?.city);
            i++;
        }
    })
    return countries;
}

console.log('Countries:', findCountries(hotels));


//CORRECT VARIANT!!
const countries = hotels.reduce((acc, item) =>{
    const result = {...acc};
    if(!result[item.country]){
        result[item.country] = [];
    }
    if(!result[item.country].includes(item.city)){
        result[item.country].push(item.city);
    }
    return result;
}, {})

console.log('Countries(variant 2):', countries);


//Num 4

/*getCalendarMonth = (daysInMonth, daysInWeek, dayOfWeek) =>{
    let numOfWeeks = Math.ceil(daysInMonth / daysInWeek);

    let monthStarts = false;
    let days = [];
    let prevDate = 30-dayOfWeek+1;
    for(let i =0; i<numOfWeeks; i++){
        if(monthStarts) break;
        days[i]= [];
        for(let j =0; j<daysInWeek; j++) {
            days[i][j] =[];
            if(j==dayOfWeek) {
                days[i][j] = 1;
                monthStarts = true;
            }
            else {
                days[i][j] = prevDate;
                prevDate++;
            }
        }
    }
    let countToThirty = 2;
    let numOfWeek;
    let day;
    let j=dayOfWeek+1;
    for(let i =0; i<numOfWeeks; i++){
        if(countToThirty===32) break;
        if(i>0) days[i]= [];
        for(; j<daysInWeek; j++) {
            days[i][j] =countToThirty;
            countToThirty++;
            if(countToThirty===32) {
                numOfWeek = i;
                day = j;
            }
        }
        j=0;
    }
    let newCount = 1;
    for(let j =day; j<daysInWeek; j++) {
        days[numOfWeek][j] = newCount;
        newCount++;

    }
    return days;

}

let daysInMonth = 30;
let daysInWeek = 7;
let dayOfWeek = 4;
let calendarMonth = getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek);

console.log(calendarMonth);

daysInMonth = 30;
daysInWeek = 4;
dayOfWeek = 2;
calendarMonth = getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek);

console.log(calendarMonth);*/
console.log('--------------------------------------------');

//HOMEWORK NUMBER 7

const obj1 = {
    a: 'a',
    b: {
        a: 'a',
        b: 'b',
        c: {
            a: 1,
        },
    },
};
const obj2 = {
    b: {
        c: {
            a: 1,
        },
        b: 'b',
        a: 'a',
    },
    a: 'a',
};
const obj3 = {
    a: {
        c: {
            a: 'a',
        },
        b: 'b',
        a: 'a',
    },
    b: 'b',
};

let isEqual = true;

const deepEqual = (object1, object2) => {
    let keys1 = Object.keys(object1);
    let keys2 = Object.keys(object2);
    if(keys1.length !== keys2.length) return false;
    keys1.sort();
    keys2.sort();
    if(keys1.join('') === keys2.join('')){
        let val1 = Object.values(object1);
        let val2 = Object.values(object2);
        val1.sort();
        val2.sort();
        if(val1.length !== val2.length) return false;
        for(let i = 0; i<val1.length; i++){
            if(typeof val1[i] === 'object' && typeof val2[i] === 'object' ) deepEqual(val1[i], val2[i]);
            else{
                if(val1[i] === val2[i]) continue;
                else isEqual = false;
            }
        }
    }
    return isEqual;
}

console.log('DeepEqual result:', deepEqual(obj1, obj2)); // true
isEqual = true;
console.log('DeepEqual result:', deepEqual(obj1, obj3)); // false

const obj4 = {
    a: {
        b: 'fgfg'
    },
    c: ''
};
const obj5 = {
    a: {
        b: 'fgf'
    },
    c: ''
};
const obj6 = {
    c: '',
    a: {
        b: 'fgfg'
    }
};
isEqual = true;
console.log('DeepEqual result:', deepEqual(obj4, obj5)); // false
isEqual = true;
console.log('DeepEqual result:', deepEqual(obj4, obj6)); // true

console.log('----------------------------------------CALENDAR----------------------------------------'); // false

getCalendarMonth2 = (daysInMonth, daysInWeek, dayOfWeek, checkIn, checkOut) =>{
    let checkInSelected = false;
    let checkOutSelected = false;
    let resultCalendar = [];
    if(dayOfWeek>daysInWeek) throw new SyntaxError('Invalid number!!!');
    resultCalendar[0]=[];
    let days = daysInMonth-dayOfWeek+1;
    for(let i=0; i<dayOfWeek; i++){
        resultCalendar[0][i] = [];
        resultCalendar[0][i][0] = days;
        resultCalendar[0][i][1] = true;  //previous month
        if(days === checkIn) {
            resultCalendar[0][i][2] = true;
            checkInSelected = true;
        }
        days++;
    }
    let endDayInWeekOne = 1;

    for(let i=dayOfWeek; i<daysInWeek; i++) {
        resultCalendar[0][i] = [];
        resultCalendar[0][i][0] = endDayInWeekOne;
        resultCalendar[0][i][1] = false;
        if(endDayInWeekOne === checkIn && !checkInSelected) {
            resultCalendar[0][i][2] = true;
            checkInSelected = true;
        }
        if(endDayInWeekOne === checkOut && !checkOutSelected) {
            resultCalendar[0][i][2] = true;
            checkOutSelected = true;
        }
        endDayInWeekOne++;
    }
    let numOfWeek=1;
    let weekCounter = 0;
    let createNewWeek = true;

    for(let i=0; i<daysInMonth-daysInWeek+dayOfWeek; i++){
        if(createNewWeek) {
            resultCalendar[numOfWeek] = [];
            createNewWeek = false;
        }
        if(weekCounter<daysInWeek){
            resultCalendar[numOfWeek][weekCounter] = []
            resultCalendar[numOfWeek][weekCounter][0] = endDayInWeekOne;
            resultCalendar[numOfWeek][weekCounter][1] = false;
            if(endDayInWeekOne === checkIn && !checkInSelected) {
                resultCalendar[numOfWeek][weekCounter][2] = true;
                checkInSelected = true;
            }
            if(endDayInWeekOne === checkOut && !checkOutSelected) {
                resultCalendar[numOfWeek][weekCounter][2] = true;
                checkOutSelected = true;
            }
            endDayInWeekOne++;
            weekCounter++;
        }
        else{
            createNewWeek = true;
            weekCounter = 0;
            numOfWeek++;
            i--;
        }
    }
    let newMonth = 1;
    for(let i=0; i<daysInWeek; i++){
        if(!resultCalendar[numOfWeek][i]) {
            resultCalendar[numOfWeek][i] = [];
            resultCalendar[numOfWeek][i][0] = newMonth;
            resultCalendar[numOfWeek][i][1] = true;
            if(newMonth === checkIn && !checkInSelected) {
                resultCalendar[numOfWeek][i][2] = true;
                checkInSelected = true;
            }
            if(newMonth === checkOut && !checkOutSelected) {
                resultCalendar[numOfWeek][i][2] = true;
                checkOutSelected = true;
            }

            newMonth++;
        }
    }
    let newOutput = [];
    for(let i=0; i<resultCalendar.length; i++){
        newOutput[i] = [];
        for(let j=0; j<daysInWeek; j++){
            let obj = {
                dayOfMonth: resultCalendar[i][j][0],
                notCurrentMonth: resultCalendar[i][j][1],
                selectedDay: resultCalendar[i][j][2]
            }
            if(!obj.selectedDay) obj.selectedDay = false;
            newOutput[i][j] = obj;
        }
    }

return newOutput;
}

let daysInMonth2 = 30;
let daysInWeek2 = 6;
let dayOfWeek2 = 3;
try{
    let calendarMonth2 = getCalendarMonth2(daysInMonth2, daysInWeek2, dayOfWeek2, 30, 5);
    console.log(calendarMonth2);
    let calendarMonth3 = getCalendarMonth2(30, 4, 2, 5, 9);
    console.log(calendarMonth3);
    let calendarMonth4 = getCalendarMonth2(30, 5, 4, 1, 30);
    console.log(calendarMonth4);
    //let calendarMonth5 = getCalendarMonth2(30, 5, 100);
    //console.log(calendarMonth5);
}
catch (e){
    if (e.name == "SyntaxError") {
        alert('Invalid number!!!');
    } else {
        throw e;
    }
}

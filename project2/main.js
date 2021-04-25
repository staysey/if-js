//NUM 1
changeDate = (date) => {
   let arr = date.split('-');
   arr = arr.reverse();
   return arr.join('.');
}

const date = '2020-11-26';
console.log('Changed date:', changeDate(date));

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
    let res = -1;
    array.forEach(el => {
        if (el?.city?.includes(str) || el?.country?.includes(str) || el?.hotel?.includes(str)){
            res = `${el.country}, ${el.city}, ${el.hotel}`;
        }
    })
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

//Num 4

getCalendarMonth = (daysInMonth, daysInWeek, dayOfWeek) =>{
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
daysInWeek = 7;
dayOfWeek = 2;
calendarMonth = getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek);

console.log(calendarMonth);
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
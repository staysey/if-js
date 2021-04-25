changeDate = (date) => {
    let arr = date.split('-');
    arr = arr.reverse();
    return arr.join('.');
}

describe("Changing date function", () => {
    test("it should return new date in format 'day.month.year'", () => {
        const inputStr = '2019-11-16';

        expect(changeDate(inputStr)).toBe('16.11.2019');

    });
});


findString = (arr, str) => {
    let res = -1;
    arr.forEach(el => {
        if (el?.city?.includes(str) || el?.country?.includes(str) || el?.hotel?.includes(str)){
            res = `${el.country}, ${el.city}, ${el.hotel}`;
        }
    })
    return res;
}

describe("Finding string function", () => {
    test("it should return new string in format 'country, city, hotel'", () => {
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
        const input = 'Villa Kunerad'
        const input2 = 'BlaBla hotel'

        expect(findString(data, input)).toBe('Slowakia, Vysokie Tatry, Villa Kunerad');
        expect(findString(data, input2)).toBe(-1);
    });
});
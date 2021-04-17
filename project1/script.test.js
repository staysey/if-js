sum = (a) => {
    return (b)=> {
        return a+b;
    };
}

describe("Summing function", () => {
    test("it should return sum of 2 nums", () => {
        const input1 = 234;
        const input2 = -45;

        expect(sum(input1)(input2)).toBe(189);

    });
});


const { calcFactors } = require("./solution/factors");


test('test factors general', () => {
    const res = calcFactors(56);
    expect(new Set(res)).toEqual(new Set([1, 2, 4, 7, 8, 14, 28, 56]));
});

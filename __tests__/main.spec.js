const hashMap = require('../main');

it ('should be not null', () => {
    // Given
    let startRange = 2;
    let endRange = 4;

    // When
    let result = hashMap.isRangeNotNull(startRange, endRange);

    //Then
    expect(result).toBe(true);
});

it ('should be null', () => {
    // Given
    let startRange = 2;
    let endRange = null;

    // When
    let result = hashMap.isRangeNotNull(startRange, endRange);

    //Then
    expect(result).toBe(false);
});

it ('should be in range', () => {
    // Given
    let startRange = 2;
    let endRange = 4;

    // When
    let result = hashMap.isInRange(startRange, endRange);

    //Then
    expect(result).toBe(true);
});

it ('should not be in range', () => {
    // Given
    let startRange = 1001;
    let endRange = 0;

    // When
    let result = hashMap.isInRange(startRange, endRange);

    //Then
    expect(result).toBe(false);
});

it ('should return table', () => {
    // Given
    let startRange = 2;
    let endRange = 4;
    let answer = `2*2=4\n2*3=6 3*3=9\n2*4=8 3*4=12 4*4=16\n`;

    // When
    let result = hashMap.createMultiplyTable(startRange, endRange);

    //Then
    expect(result).toBe(answer);
});

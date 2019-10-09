const hashMap = require('../main');

it ('should return true when given a range not null', () => {
    // Given
    let startRange = 2;
    let endRange = 4;

    // When
    let result = hashMap.isRangeNotNull(startRange, endRange);

    //Then
    expect(result).toBe(true);
});

it ('should return false when given a null range', () => {
    // Given
    let startRange = 2;
    let endRange = null;

    // When
    let result = hashMap.isRangeNotNull(startRange, endRange);

    //Then
    expect(result).toBe(false);
});

it ('should return true when given a correct order range', () => {
    // Given
    let startRange = 2;
    let endRange = 4;

    // When
    let result = hashMap.isRangeValidOrder(startRange, endRange);

    //Then
    expect(result).toBe(true);
});

it ('should return false when given a wrong order range', () => {
    // Given
    let startRange = 4;
    let endRange = 2;

    // When
    let result = hashMap.isRangeValidOrder(startRange, endRange);

    //Then
    expect(result).toBe(false);
});

it ('should return true when given a in range input', () => {
    // Given
    let startRange = 2;
    let endRange = 4;

    // When
    let result = hashMap.isInRange(startRange, endRange);

    //Then
    expect(result).toBe(true);
});

it ('should return true when given a out range input', () => {
    // Given
    let startRange = 1001;
    let endRange = 0;

    // When
    let result = hashMap.isInRange(startRange, endRange);

    //Then
    expect(result).toBe(false);
});

it ('should return multiplication table when inputed a valid range', () => {
    // Given
    let startRange = 2;
    let endRange = 4;
    let answer = `2*2=4\n2*3=6 3*3=9\n2*4=8 3*4=12 4*4=16\n`;

    // When
    let result = hashMap.createMultiplyTable(startRange, endRange);

    //Then
    expect(result).toBe(answer);
});

it ('should return null when inputed a invalid range', () => {
    // Given
    let startRangeFirstGroup = 4;
    let endRangeFirstGroup = 2;
    
    let startRangeSecondGroup = 2;
    let endRangeSecondGroup = 1001;

    let startRangeThirdGroup = 2;
    let endRangeThirdGroup = null;

    // When
    let resultFirstGroup = hashMap.createMultiplyTable(startRangeFirstGroup, endRangeFirstGroup);
    let resultSecondGroup = hashMap.createMultiplyTable(startRangeSecondGroup, endRangeSecondGroup);
    let resultThirdGroup = hashMap.createMultiplyTable(startRangeThirdGroup, endRangeThirdGroup);

    //Then
    expect(resultFirstGroup).toBe(null);
    expect(resultSecondGroup).toBe(null);
    expect(resultThirdGroup).toBe(null);
});

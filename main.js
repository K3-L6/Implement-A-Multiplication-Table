const MIN_RANGE = 1;
const MAX_RANGE = 1000;

function createMultiplyTable(startRange, endRange) {
    if (isRangeNotNull(startRange, endRange) && isInRange(startRange, endRange) && isRangeValidOrder(startRange, endRange)) {
        let multiplicationTable = '';
        for (let x = startRange; x <= endRange; x++) {
            let row = '';
            let y = x;
            let z = startRange;
            while(y > startRange) {
                row += (`${z}*${x}=${(z * x)} `);
                y--;
                z++;
            }
            row += (`${x}*${x}=${(x * x)}\n`);
            multiplicationTable += row;
        }
        return multiplicationTable;
    }
    return null;
}

function isRangeNotNull(startRange, endRange) {
    return (startRange != null && endRange != null);
}

function isRangeValidOrder(startRange, endRange) {
    return startRange < endRange;
}

function isInRange(startRange, endRange) {
    return ((startRange >= MIN_RANGE && startRange <= MAX_RANGE) 
            && (endRange >= MIN_RANGE && endRange <= MAX_RANGE));
}

module.exports = {
    isInRange: isInRange,
    isRangeValidOrder: isRangeValidOrder,
    isRangeNotNull: isRangeNotNull,
    createMultiplyTable: createMultiplyTable
}
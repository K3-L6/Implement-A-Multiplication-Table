# Implement A Multiplication Table

## Tasking Diagram
![task diagram](https://user-images.githubusercontent.com/32229808/66431563-c7af1680-ea4e-11e9-8d7d-de409cdfc7c6.jpg)

## Given, When, Then

#### Given
    2, 4
#### When
    isRangeNotNull(2, 4)
#### Then
    true

#### Given
    2, null
#### When
    isRangeNotNull(2, null)
#### Then
    false

#### Given
    2, 4
#### When
    isInRange(2, 4)
#### Then
    true

#### Given
    0, 1001
#### When
    isInRange(1001, 0)
#### Then
    false

#### Given
    2, 4
#### When
    createMultiplyTable(2, 4)
#### Then
    2*2=4\n2*3=6 3*3=9\n2*4=8 3*4=12 4*4=16\n
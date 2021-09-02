function testTruthy(val) {
    return val ? console.log('truthy') : console.log('falsy');
}

testTruthy(new Boolean(NaN));
testTruthy(NaN);

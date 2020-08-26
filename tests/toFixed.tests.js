tests({
  'It should return a string.': function () {
    eq(typeof toFixed(42.53, 2), 'string');
  },
  'It should round up passed in number using fixed-point notation, with passed in as second arg precision number of digits after the decimal point.': function () {
    eq(toFixed(42.531, 2), '42.53');
  },
  'It should handle hole numbers.': function () {
    eq(toFixed(42, 0), '42');
  },
  'It should pad fix-pointed number with zeros if precision > NumberOffractionDigits.': function () {
    eq(toFixed(42.23, 4), '42.2300');
  },
  'It should correctly increment last digit after rounding if needed.': function () {
    eq(toFixed(1.15, 1), '1.2');
    eq(toFixed(1.5, 0), '2');
  },
  'It should correctly represent fixed numbers less than 1 (eg 0.123).': function () {
    eq(toFixed(0.123, 2), '0.12');
    eq(toFixed(0.123, 0), '0');
  },
  'It should correctly round weird cases': function () {
    // 0.615, 10.235, 1.005, 2.55
    eq(toFixed(0.615, 2), '0.62');
    eq(toFixed(10.235, 2), '10.24');
    eq(toFixed(1.005, 2), '1.01');
    eq(toFixed(2.55, 1), '2.6');
  },
  'It should handle numbers in exponential notation': function () {
    eq(toFixed(1e2, 2), '100.00');
  },
  'It should handle string representation of number.': function () {
    eq(toFixed('42', 2), '42.00');
    eq(toFixed('42.357', 2), '42.36');
  },
  'It should handle array representation of number.': function () {
    eq(toFixed([2], 0), '2');
    eq(toFixed([1.005], 2), '1.01');
  },
  'It should throw TypError if number is NaN': function () {
    var isTypeError = '';

    try {
      toFixed('42a', 2);
    } catch(e) {
      isTypeError = e.name;
    }

    eq(isTypeError === 'TypeError', true);
  },
  'It should throw RangeError if precision is not between 0 and 100.': function () {
    var isRangeError = '';

    try {
      toFixed(42, -1);
    } catch(e) {
      isRangeError = e.name;
    }

    eq(isRangeError === 'RangeError', true);

    isRangeError = '';

    try {
      toFixed(42, 101);
    } catch (e) {
      isRangeError = e.name;
    }

    eq(isRangeError === 'RangeError', true);
  }
});
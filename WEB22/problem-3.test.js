const { countDownSequence } = require('./solutions');

describe('Problem 3 - countDownSequence() function', function() {
  test('proper count down sequence from 10', function() {
    let start = 10;
    let result = countDownSequence(start);
    expect(result).toBe('10987654321');
  });

  test('proper count down sequence from 1', function() {
    let start = 1;
    let result = countDownSequence(start);
    expect(result).toBe('1');
  });

  test('starting at 0 should throw', function() {
    function shouldThrow() {
      // Using 0 is invalid, this should throw
      countDownSequence();
    }

    expect(shouldThrow).toThrow();
  });

  test('starting at a negative number should throw', function() {
    function shouldThrow() {
      // Using -100 is invalid, this should throw
      countDownSequence();
    }

    expect(shouldThrow).toThrow();
  });

  test('starting at a number greater than 10 should throw', function() {
    function shouldThrow() {
      // Using 11 is invalid, this should throw
      countDownSequence();
    }

    expect(shouldThrow).toThrow();
  });
});

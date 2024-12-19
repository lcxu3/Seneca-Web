const { maskPassword } = require('./solutions');

describe('Problem 2 - maskPassword() function', function() {
  test('all characters should be masked by default', function() {
    let password = 'sUp3rS3kR_t!';
    let result = maskPassword(password);
    expect(result).toBe('************');
  });

  test('all characters should be masked if charsToMask is 0', function() {
    let password = '1234567890__';
    let result = maskPassword(password, 0);
    expect(result).toBe('************');
  });

  test('first 3 characters should be unmasked if requested', function() {
    let password = 'sUp3rS3kR_t!';
    let result = maskPassword(password, 3);
    expect(result).toBe('sUp*********');
  });

  test('all characters should be unmasked if requested', function() {
    let password = '!t_Rk3Sr3pUs';
    let result = maskPassword(password, 12);
    expect(result).toBe('!t_Rk3Sr3pUs');
  });
});

const { quotation } = require('./solutions');

describe('Problem 1 - quotation() function', function() {
  test('quotation format is correct with statement and author', function() {
    let statement = 'Deleted code is debugged code.';
    let author = 'Jeff Sickel';
    let result = quotation(statement, author);
    expect(result).toBe('"Deleted code is debugged code." --Jeff Sickel');
  });

  test('quotation format correct if missing author', function() {
    let statement =
      'The best thing about a boolean is even if you are wrong, you are only off by a bit.';
    let author = 'Anonymous';
    let result = quotation(statement);
    expect(result).toBe(
      '"The best thing about a boolean is even if you are wrong, you are only off by a bit." --Anonymous'
    );
  });
});

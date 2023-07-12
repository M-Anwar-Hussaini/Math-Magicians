import operate from '../logic/operate';

describe('Test the operate function', () => {
  // Test + operator
  test('12 + 13 should be 25', () => {
    const a = operate(12, 13, '+');
    expect(a).toEqual('25');
  });

  // Test * operator
  test('3 * 5 should not be equal to 12', () => {
    const input = operate(3, 5, 'x');
    const wrongResult = '12';
    expect(input).not.toBe(wrongResult);
  });

  // Test - operator
  test('(12 - 9) should  be equal to 3', () => {
    const input = operate(12, 9, '-');
    const result = '3';
    expect(input).toBe(result);
  });

  // Test / operator
  test('(100 / 25) should  be equal to 4', () => {
    let input = operate(100, 25, '÷');
    input = Number(input);
    const result = 4;
    expect(input).toBeCloseTo(result);
  });
});

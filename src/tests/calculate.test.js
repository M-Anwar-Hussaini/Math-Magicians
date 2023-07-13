import calculate from '../logic/calculate';

describe('', () => {
  test('Return null when the button name is "AC"', () => {
    const input = calculate({}, 'AC');
    const result = {
      total: null,
      next: null,
      operation: null,
    };
    expect(input).toEqual(result);
  });

  test('Should return 30 when the calculation is (5*6)"', () => {
    const obj = {
      next: 5,
      total: 6,
      operation: 'x',
    };

    const calculation = calculate(obj, '=');
    const { total } = calculation;
    expect(total).toBe('30');
  });

  test('When the user click the point operand it should be shown on screen like 5.4', () => {
    const a = {
      total: null,
      next: null,
      operation: null,
    };

    const b = calculate(a, '5');
    const c = calculate(b, '.');
    const { next: expected } = calculate(c, '4');

    expect(expected).toBe('5.4');
  });

  test('The sign should be changed when the buttonName is "+/-"', () => {
    const a = {
      total: null,
      next: 12,
      operation: null,
    };

    const { next } = calculate(a, '+/-');

    expect(next).toBe('-12');
  });
});

import calculate from '../logic/calculate';

test('Return null when the button name is "AC"', () => {
  const input = calculate({}, 'AC');
  const result = {
    total: null,
    next: null,
    operation: null,
  };
  expect(input).toEqual(result);
});

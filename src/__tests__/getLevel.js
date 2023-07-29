import getLevel from '../getLevel';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 1 });
  const result = getLevel(1);
  expect(result).toBe('Ваш текущий уровень: 1');
});

test('', () => {
  fetchData.mockReturnValue({ status: 'error', level: 1 });
  const result = getLevel(1);
  expect(result).toBe('Информация об уровне временно недоступна');
});

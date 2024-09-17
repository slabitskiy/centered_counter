import { expect, test, describe } from 'vitest';
import {
  get_number_value_from_current_element,
  transform_value_to_string,
  update_count,
  verify_numbers_only,
} from './utils';

describe('utils', () => {
  describe('get_number_value_from_current_element', () => {
    test('should return value', function () {
      const mock = { value: '123' } as HTMLInputElement;

      const number = get_number_value_from_current_element(mock);

      expect(number).toBe(123);
    });

    test('should throw error', function () {
      const mock = { value: '123ddd' } as HTMLInputElement;

      expect(() => get_number_value_from_current_element(mock)).toThrow(
        'numbers_only',
      );
    });
  });

  describe('verify_numbers_only', () => {
    test('should return true', function () {
      expect(verify_numbers_only('123')).toBeTruthy();
    });

    test('should throw error', function () {
      expect(() => verify_numbers_only('123d')).toThrow('numbers_only');
    });
  });

  describe('transform_value_to_string', () => {
    test('should return value', function () {
      const mockValue = 123;
      const value = transform_value_to_string(mockValue);

      expect(value).toBe(`${mockValue}`);
    });
  });

  describe('update_count', () => {
    test('should assign value', function () {
      const mockHTML = { innerHTML: '' } as HTMLElement;
      const mockValue = 123;
      update_count(mockHTML, mockValue);

      expect(mockHTML.innerHTML).toBe(`${mockValue}`);
    });
  });
});

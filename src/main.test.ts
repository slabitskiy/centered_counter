import { describe, expect, test, afterEach, vi } from 'vitest';
import { update_count_and_reset_counter } from './main';
import * as factory from './factory';
import * as utils from './utils';
import * as dom from './dom';

vi.mock('./dom', () => ({
  dom: {
    get_start_at_control: () => ({
      value: '1',
      addEventListener: vi.fn(),
    }),
    get_step_control: () => ({
      value: '1',
      addEventListener: vi.fn(),
    }),
    get_count_button: () => ({
      addEventListener: vi.fn(),
    }),
    get_current_count: () => ({
      innerHTML: '',
    }),
  },
}));

describe('update_count_and_reset_counter', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('should handle success update and remove error styles', function () {
    const factory_mock = vi.spyOn(factory, 'factory');
    const update_count = vi.spyOn(utils, 'update_count');
    const mock_remove = vi.fn();

    const htmlElement = {
      classList: {
        remove: mock_remove,
      },
    } as unknown as HTMLInputElement;

    update_count_and_reset_counter.call(htmlElement);

    expect(mock_remove).toHaveBeenCalledWith('error');
    expect(factory_mock).toHaveBeenCalled();
    expect(update_count).toHaveBeenCalled();
  });

  test('should handle wrong value type and add style', function () {
    vi.spyOn(dom.dom, 'get_start_at_control').mockReturnValue({
      value: '1dsad',
    } as unknown as HTMLInputElement);
    const mock_add = vi.fn();

    const htmlElement = {
      classList: {
        add: mock_add,
      },
    } as unknown as HTMLInputElement;

    update_count_and_reset_counter.call(htmlElement);

    expect(mock_add).toHaveBeenCalledWith('error');
  });
});

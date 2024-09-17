import { dom } from './dom';
import { factory } from './factory';
import { get_number_value_from_current_element, update_count } from './utils';

/**
 * REMINDER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! DO NOT SKIP!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * to run UI (e2e) test cases probably u'll need to run npx playwright install in terminal
 *
 * I added data-test-id for ui testing, but I didn't implement any cleaner for that.
 */

// create DOM singleton to better test change handler
const start_at_control = dom.get_start_at_control();
const step_control = dom.get_step_control();
const count_button = dom.get_count_button();
const current_count = dom.get_current_count();

let count = factory(
  get_number_value_from_current_element(start_at_control),
  get_number_value_from_current_element(step_control),
);

start_at_control.addEventListener('change', update_count_and_reset_counter);
step_control.addEventListener('change', update_count_and_reset_counter);

count_button?.addEventListener('click', () => {
  update_count(current_count, count());
});

// exporting to test it
export function update_count_and_reset_counter(this: HTMLInputElement) {
  try {
    this.classList.remove('error');

    const start = get_number_value_from_current_element(
      dom.get_start_at_control(),
    );
    const step = get_number_value_from_current_element(dom.get_step_control());

    count = factory(start, step);
    update_count(current_count, count());
  } catch {
    this.classList.add('error');
  }
}

export function get_number_value_from_current_element<
  T extends HTMLInputElement,
>(element: T) {
  const value = element?.value;

  verify_numbers_only(value);

  return +value;
}

export function transform_value_to_string<T>(value: T) {
  return `${value}`;
}

export function verify_numbers_only(value: string) {
  const is_number_only = /^\d+$/.test(value);

  if (!is_number_only) {
    throw Error('numbers_only');
  }

  return is_number_only;
}

export function update_count(element: HTMLElement, value: number) {
  element.innerHTML = transform_value_to_string(value);
}

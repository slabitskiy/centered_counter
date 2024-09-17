// I didn't add any test, no sense of testing dumb class
class DOM {
  private getElementById<T>(selector: string) {
    return document.getElementById(selector) as T;
  }

  get_count_button() {
    return this.getElementById<HTMLButtonElement>('count_button');
  }

  get_current_count() {
    return this.getElementById<HTMLSpanElement>('current_count');
  }

  get_start_at_control() {
    return this.getElementById<HTMLInputElement>('start_at');
  }

  get_step_control() {
    return this.getElementById<HTMLInputElement>('step');
  }
}

export const dom = new DOM();

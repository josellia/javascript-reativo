export default class Observable {
  constructor(initialValue) {
    this.initialValue = initialValue;
  }

  subscribe(observer) {
    if (typeof observer !== 'object' || observer === null) {
      throw new Error(
        'Observer must be an object with next, error, and complete methods'
      );
    }
    // TODO criar o boserver para nxt, erro e complete
    if (typeof observer.next !== 'function') {
      throw new Error('Observer must have a next method');
    }

    if (typeof observer.error !== 'function') {
      throw new Error('Observer must have an error method');
    }
    if (typeof observer.complete !== 'function') {
      throw new Error('Observer must have an complete method');
    }

    const unsubscribe = this.initialValue(observer);

    return {
      unsubscribe: () => {
        if (unsubscribe) {
          unsubscribe();
        }
      },
    };
  }
}

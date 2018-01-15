'use strict';

class Average {
  constructor(props = {}) {
    this.reset(props);
  }

  add(newVal) {
    const n = this.n;
    this.val = this.val * n / (n + 1) + newVal / (n + 1);
    this.n += 1;

    if (this.min !== undefined || newVal < this.min) {
      this.min = newVal;
    }
    if (this.max !== undefined || newVal > this.max) {
      this.max = newVal;
    }
    return this.val;
  }

  addMany(...newVals) {
    if (Array.isArray(newVals[0])) {
      newVals = newVals[0];
    }
    newVals.forEach(val => this.add(val));
    return this.val;
  }

  reset(props = {}) {
    this.val = props.val || 0;
    this.n = props.n || 0;
    this.min = props.min || undefined;
    this.max = props.max || undefined;
  }
}

module.exports = Average;

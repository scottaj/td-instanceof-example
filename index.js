'use strict';

const CantMakeHeadsOrTailsOfItError = require('./cant-make-heads-or-tails-of-it-error');

class MyLib {
  tail(seq) {
    if (seq && typeof seq.length === 'number') {
      return seq.slice(1);
    }

    throw new CantMakeHeadsOrTailsOfItError("That wasn't an array...");
  }
}

module.exports = MyLib;

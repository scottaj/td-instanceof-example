'use strict';

const expect = require('chai').expect;
const td = require('testdouble');

const MyLib = require('../index');
const MyDependency = td.replace('../dependency');
const CantMakeHeadsOrTailsOfItError = require('../cant-make-heads-or-tails-of-it-error');

describe('My Lib', function() {
  let myLib;
  beforeEach(function () {
    myLib = new MyLib();
  });

  afterEach(function () {
    td.reset();
  });
  
  describe('#tail', function() {
    it('returns the tail of an array', function() {
      expect(myLib.tail([1, 2, 3])).to.deep.equal([2, 3]);
    });

    it('returns an empty array when passed an empty array', function() {
      expect(myLib.tail([])).to.be.empty;
    });

    it('throws an error if the provided object is not an array', function () {
      try {
        myLib.tail(7);
        throw new Error('Did not get expected exception.');
      } catch (error) {
        expect(error).to.be.an.instanceOf(CantMakeHeadsOrTailsOfItError);
      }
    });
  });
});

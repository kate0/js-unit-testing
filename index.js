'use strict';

class Calculator {

    Add() {
      var i, x;
      x = Math.floor(Math.random() * 100);
      i = Math.floor(Math.random() * 100);
      addValue = x + '< >' + '+' + '< >' + j + '< >' + '=' + '< >' + (j + x);
      return addValue;
    }

    Multiply() {
      x = Math.floor(Math.random() * 100);
      i = Math.floor(Math.random() * 100);
      multValue = x + '< >' + '+' + '< >' + j + '< >' + '=' + '< >' + (j * x);
      return 'multValue';
    }
}

module.exports = Calculator;

'use strict';

let Calculator = require('../index');

describe('Calculator', () => {
    let instance;

    beforeAll(() => {
        instance = new Calculator();
    });

    it('should allow to call Add() for instance of class', () => {
        expect(instance.Add).toBeDefined();
        expect(typeof instance.Add).toBe('function');
        expect(instance.Add()).toBe(addValue);
    });

    it('should allow to call Multiply() for instance of class', () => {
        expect(instance.Multiply).toBeDefined();
        expect(typeof instance.Multiply).toBe('function');
        expect(instance.Multiply()).toBe(multValue);
    });
});

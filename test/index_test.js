const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {

    let expected, result, hour;

    describe('.announceDawn', () => {

        // Teardown: reset the environment after each test
        afterEach( () => {
            expected = '';
            result = '';
            hour = '';
        })

        it('returns a rooster call', () => {
            // Setup: define the expected result
            expected = 'cock-a-doodle-doo!';

            // Exercise: call the function to test
            result = Rooster.announceDawn();

            // Verify: compare the expected outcome to the actual outcome with the assert library
            assert.equal(result, expected);

        })
    });

    describe('.timeAtDawn', () => {
        it('returns its arguments as a string', () => {
            // Setup
            expected = 'string'

            // Exercise
            result = typeof Rooster.timeAtDawn(6)

            // Verify
            assert.strictEqual(result, expected);

        });

        it('throws an error if passed a number less than 0', () => {

            // Setup
            hour = -1;

            // Exercise, verify
            assert.throws( () => {
                Rooster.timeAtDawn(hour);
            },
            RangeError);
        })

        it('throws an error if passed a number greater than 23', () => {
            
            // Setup
            hour = 50;

            // Exercise, verify
            assert.throws( () => {
                Rooster.timeAtDawn(hour);
            },
            RangeError);
        })
    })

});
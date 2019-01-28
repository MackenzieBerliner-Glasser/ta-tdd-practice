const test = QUnit.test;
import randomHello from '../src/random-hello.js';

test('randomHello returns a howdy back to user with name length of four', function(assert) {
    const nameInputValue = 'Alex';
    const result = randomHello(nameInputValue);
    assert.equal(result, 'howdy Alex');
});

test('randomHello returns a hello there back to user with a length of 5', function(assert) {
    const nameInputValue = 'Maddy';
    const result = randomHello(nameInputValue);
    assert.equal(result, 'hello there Maddy');
});

test('randomHello returns a meh you suck back to user otherwise', function(assert) {
    const nameInputValue = 'Casper';
    const result = randomHello(nameInputValue);
    assert.equal(result, 'meh you suck Casper');
});

import assert from 'assert';

import something from '../src/something.js';

describe('something', () => {
    it('do something', () => {
        assert('something' === something());
    })
});
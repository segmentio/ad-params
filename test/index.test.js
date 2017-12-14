'use strict';

var assert = require('proclaim');
var ads = require('../lib');

describe('ad-params', function() {
  it('should ignore non ad params', function() {
    var res = ads('?special=lkjlk');
    assert(res == null);
  });

  it('should parse btid ad param', function() {
    var res = ads('?special=lkjlkj&btid=asdfasdfasdf');
    assert.strictEqual(res.id, 'asdfasdfasdf');
    assert.strictEqual(res.type, 'dataxu');
  });

  it('should parse urid ad param', function() {
    var res = ads('?urid=qwerqwer&special=lkjlkj');
    assert.strictEqual(res.id, 'qwerqwer');
    assert.strictEqual(res.type, 'millennial-media');
  });

  it('should parse clickId ad param', function() {
    var res = ads('?CLICKID=asd-1234&special=lkjlkj');
    assert.strictEqual(res.id, 'asd-1234');
    assert.strictEqual(res.type, 'impactRadius');
  });
});

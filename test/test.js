describe('ad-params', function(){
  var assert = require('assert');
  var ads = require('ad-params');

  it('should ignore non ad params', function(){
    location.__defineGetter__('search', function(){
      return '?special=lkjlk';
    });
    var res = ads(location.search);
    assert(null == res);
  })

  it('should parse btid ad param', function(){
    location.__defineGetter__('search', function(){
      return '?special=lkjlkj&btid=asdfasdfasdf';
    });
    var res = ads(location.search);
    assert('asdfasdfasdf' === res.id);
    assert('dataxu' === res.type);
  })

  it('should parse urid ad param', function(){
    location.__defineGetter__('search', function(){
      return '?urid=qwerqwer&special=lkjlkj';
    });
    var res = ads(location.search);
    assert('qwerqwer' === res.id);
    assert('millennial-media' === res.type);
  })
});
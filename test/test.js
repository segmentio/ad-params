describe('ad-params', function(){
  var assert = require('assert');
  var ads = require('ad-params');

  it('should ignore non ad params', function(){
    location.__defineGetter__('search', function(){
      return '?special=lkjlk';
    });
    var id = ads(location.search);
    assert(null == id);
  })

  it('should parse btid ad param', function(){
    location.__defineGetter__('search', function(){
      return '?special=lkjlkj&btid=asdfasdfasdf';
    });
    var id = ads(location.search);
    assert('asdfasdfasdf' == id);
  })

  it('should parse urid ad param', function(){
    location.__defineGetter__('search', function(){
      return '?urid=qwerqwer&special=lkjlkj';
    });
    var id = ads(location.search);
    assert('qwerqwer' == id);
  })
});
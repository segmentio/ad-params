/**
 * Module dependencies.
 */
 
var parse = require('querystring').parse;
 
/**
 * Expose `ads`
 */
 
module.exports = ads;
 
/**
 * All the ad query params we look for.
 */
 
var QUERYIDS = [
  'btid', // DataXu ads
  'urid'  // Millennial Media ads
];
 
/**
 * Get all ads info from the given `querystring`
 *
 * @param {String} query
 * @return {Object}
 * @api private
 */
 
function ads(query){
  var params = parse(query);
  for (var key in params) {
    for (var index in QUERYIDS) {
      var id = QUERYIDS[index];
      if (key === id) return params[key];
    }
  }
}
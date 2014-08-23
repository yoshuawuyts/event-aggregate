/*eslint no-unused-expressions: 0*/

/**
 * Module dependencies
 */

var EventEmitter = require("events").EventEmitter;
var should = require('should');
var aggregate = require('./index');

/**
 * Test
 */

describe('aggregate()', function() {
  it('should catch errors', function(){
    aggregate.bind(aggregate, 123)
      .should.throw('Emitters should be an object');
  })

  it('should bind bind to emitters', function(done) {
    var ee = new EventEmitter();
    var emitter = aggregate({finished: [ee]});

    emitter.on('finished', function(fn) {fn()});
    ee.emit('finished', done)
  })
})

var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

var app = require('./app.js');

describe('Application Functions', function() {
    describe('logString', function() {
      it('should return a string', function(){
        app.logString();
      });
    });
    describe('doubleNumber', function(){
      it('should turn 4 into 8', function(){
        app.doubleNumber(4).should.equal(8);
      });
    });
    describe('squareNumber', function(){
      it('should turn 8 into 64', function(){
        app.squareNumber(8).should.equal(64);
      });
    });
    describe('checkSecretPassword', function(){
      it('should be true if "Mission to Alderan"', function(){
        app.checkSecretPassword("Mission to Alderan").should.equal(true);
      });
      it('should log "These aren\'t the droids you\'re looking for.", if false', function(){
        app.checkSecretPassword("You are a part of the Rebel Alliance and a Traitor!").should.equal(false);
      })
    });
});

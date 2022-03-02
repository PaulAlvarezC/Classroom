var expect = require('chai').expect;
var ex = require('../solution.js');

describe('Call 1st Function', function() {
	it('Match Response Message', function() {
	    expect(ex.first()).to.equal('Success: Hola');
	});
});

describe('Call 2nd Function', function() {
	it('Match Response Message', function() {
	    expect(ex.second()).to.equal('Success: Usuario');
	});
});

describe('Call 3rd Function', function() {
	it('Match Response Message', function() {
	    expect(ex.third()).to.equal('Success: GitHub Classroom');
	});
});


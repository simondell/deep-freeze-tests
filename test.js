var deepFreeze = require('deep-freeze');
var assert = require('assert');

describe('deep-freeze', function (){
	it('**ideally** should not allow me change strings', function(){
		var initial = 'my string';
		var myString = initial;
		var newString = 'my new string';

		deepFreeze( myString );
		myString = newString;

		assert(myString === initial);
	});

	it('but in fact it does let me change strings', function(){
		var initial = 'my string';
		var myString = initial;
		var newString = 'my new string';

		deepFreeze( myString );
		myString = newString;

		assert(myString === newString);
	});

	it('should not allow me to change myObj', function(){
		var expected = 'foo';
		var myObj = { foo: expected };

		deepFreeze( myObj );
		myObj.foo = 'bar';

		assert(myObj.foo === expected);
	});


});
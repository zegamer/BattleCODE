var random = require('randomstring');
var sha = require('sha256');

exports.inviteCodeGen = function()
{
	x = sha(random.generate());
	index = Math.ceil(Math.random()*64);
	
	if(index + 4 >= x.length)
		inviteCodeGenerator();
	
	return x.slice(index,index+4);
}
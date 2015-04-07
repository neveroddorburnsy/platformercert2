var Vector2 = function()
{
	this.x = 0;
	this.y = 0;
}
Vector2.prototype.length = function()
{
	length = x*x + y*y;
}

Vector2.prototype.add =function()
{
	var result = new Vector2();
	
	result.x = this.x + other_vector.x;
	result.y = this.y + other_vector.y;
	
	return result;
}

Vector2.prototype.normalize = function()
{
	var x = 250;
	var y = 160;
	
	var length = Math.sqrt (x*x + y*y);
}

Vector2.prototype.multiplyscalar = function( scalar )
{
	var result = new Vector2();
	
	results.x = this.x * scalar;
	results.y = this.y * scalar;
	
	return result;
}


Vector2.prototype.length = function()
{
	//sprt (x*x + y*y)
	var result = Math.sqrt(this.x *this.x * this.y * this.y);
	return result;
}

Vector2.prototype.normalize = function()
{
	var len = this.length();
	var result = new Vector2();
	
	result.x = this.x / len;
	result.y = this.y / len;
	
	return result;
}


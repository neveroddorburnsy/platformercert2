var Player = function()
{
	this.image = document.createElement("img");
	this.pos = new Vector2();
	this.pos.set( 9 * TILE, 0 * TILE);
	this.width = 159;
	this.height = 163;
	this.offset = new Vector2();
	this.offset.set(-55,-87);
	this.velocity = new Vector2();
	this.falling = true;
	this.jumping = false;
	this.angularVelocity = 0;
	this.rotation = 0;
	this.image.src = "hero.png";
};

Player.prototype.update = function(deltaTime)
{
	var acceleration = new Vector2();
	var playerAccel = 1000;
	var playerDrag = 20;
	var playerGravity = TILE * 9.8 *6;
	
	acceleration.y = playerGravity;
	
	if ( keyboard.isKeyDown(Keyboard.KEY_LEFT) )
	{
		acceleration.x -= playerAccel;
	}
	if ( keyboard.isKeyDown(Keyboard.KEY_RIGHT) )
	{
		acceleration.x += playerAccel;
	}
	if ( keyboard.isKeyDown(Keyboard.KEY_UP) )
	{
		acceleration.y -= playerAccel;
	}
	if ( keyboard.isKeyDown(Keyboard.KEY_DOWN) )
	{
		acceleration.y += playerAccel;
	}

//not done
var a = new Vector()

this.velocity = this.velocity.add();
this.position = this.position.add(this.velocity.multiplyScalar(deltaTime));

var tx = pixelToTile(this.position.x);
var ty = pixelToTile(this.position.y);

var cell = cellAtTileCoord(LAYER_PLATFORMS, tx, ty);
var cell_right = cellAtTileCoord(LAYER_PLATFORMS, tx+1, ty);
var cell_down = cellAtTileCoord(LAYER_PLATFORMS, tx, ty+1);
var cell_diag = cellAtTileCoord(LAYER_PLATFORMS, tx+1, ty+1);

//actual collisions
if (this.velocity.y > 0 )
{
	if ((cell_down && !cell) || (cell_diag && !cell_right && nx))
	{
		this.position.y = tileToPixel(ty);
		this.velocity.y = 0;
		
		cell = cell_down;
		cell_right = cell_diag;
		cell_down = getCellAtTileCoord(tx, ty+2);
		cell_diag = getCellAtTileCoord(tx+1, ty+2);
		ny = 0;
	}
}
	else if (this.velocity.y < 0 )
	{
		if ((cell && !cell_down) || (cell_right && !cell_diag && ny))
		{	
			this.position.x = tileToPixel(tx);
			this.velocity.x = 0;
		}
	} 
}

Player.prototype.draw = function()
{
	context.save();
		
		context.translate( Vector2.x, Vector2.y );
		context.rotate(this.rotation);
		context.drawImage(this.image, -this.width/2, -this.height/2);
	context.restore();
}

























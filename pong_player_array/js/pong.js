//canvas and context
var c = document.querySelector(`#pong`)
var ctx = c.getContext(`2d`)

//timer to make the game run at 60fps
var timer = setInterval(main, 1000/60)

//global friction variable
var fy = .97

//p1 setup
var p1 = new Box();
p1.w = 20
p1.h = 150
p1.x = 0 + p1.w/2

//p2 setup
var p2 = new Box();
p2.w = 20
p2.h = 150
p2.x = c.width - p2.w/2
p2.color = `orange`

//ball setup
var ball = new Box();
ball.w = 20
ball.h = 20
ball.vx = -2
ball.vy = -2
ball.color = `black`

players = []
players[0] = new Player();
players[1] = new Player();

players[0].pad = new Box();
players[0].pad.w = 20
players[0].pad.h = 150
players[0].pad.x = 0 + p1.w/2

players[1].pad = new Box();
players[1].pad.w = 20
players[1].pad.h = 150
players[1].pad.x = c.width - p2.w/2
players[1].pad.color = `orange`

function main()
{
    //erases the canvas
    ctx.clearRect(0,0,c.width,c.height)
    
    //p1 accelerates when key is pressed 
    if(keys[`w`])
    {
       players[0].pad.vy += -players[0].pad.force
    }

    if(keys[`s`])
    {
        players[0].pad.vy += players[0].pad.force
    }

    //p2 accelerates when key is pressed 
    if(keys[`ArrowUp`])
    {
       players[1].pad.vy += -players[1].pad.force
    }

    if(keys[`ArrowDown`])
    {
        players[1].pad.vy += players[1].pad.force
    }

    //applies friction
    players[0].pad.vy *= fy
    //player movement
    players[0].pad.move();

    //applies friction
    players[1].pad.vy *= fy
    //player movement
    players[1].pad.move();

    //ball movement
    ball.move()

    //players[0].pad collision
    if(players[0].pad.y < 0+players[0].pad.h/2)
    {
        players[0].pad.y = 0+players[0].pad.h/2
    }
    if(players[0].pad.y > c.height-players[0].pad.h/2)
    {
        players[0].pad.y = c.height-players[0].pad.h/2
    }

    //players[1].pad collision
    if(players[1].pad.y < 0+players[1].pad.h/2)
    {
        players[1].pad.y = 0+players[1].pad.h/2
    }
    if(players[1].pad.y > c.height-players[1].pad.h/2)
    {
        players[1].pad.y = c.height-players[1].pad.h/2
    }

    //ball collision 
    if(ball.x < 0)
    {
        ball.x = c.width/2
        ball.y = c.height/2
    }
    if(ball.x > c.width)
    {
        ball.x = c.width/2
        ball.y = c.height/2
    }
    if(ball.y < 0)
    {
        ball.y = 0
        ball.vy = -ball.vy
    }
    if(ball.y > c.height)
    {
        ball.y = c.height
        ball.vy = -ball.vy
       
    }

    //players[0].pad with ball collision
    if(ball.collide(players[0].pad))
    {
        ball.x = players[0].pad.x + players[0].pad.w/2 + ball.w/2
        ball.vx = -ball.vx;
    }

    //players[1].pad with ball collision
    if(ball.collide(players[1].pad))
    {
        ball.x = players[1].pad.x - players[1].pad.w/2 - ball.w/2
        ball.vx = -ball.vx;
    }

    //draw the objects
    players[0].pad.draw()
    players[1].pad.draw()
    ball.draw()
}

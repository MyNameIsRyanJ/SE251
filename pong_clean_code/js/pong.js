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

pad = []
pad[0] = players[0].pad
pad[1] = players[1].pad

upKeys = [`w`, `ArrowUp`]

downKeys = [`s`, `ArrowDown`]

var scoreboard = document.querySelectorAll(`#score > div`)

function main()
{
    //erases the canvas
    ctx.clearRect(0,0,c.width,c.height)
    
    //p1 accelerates when key is pressed 
    for(i=0; i < pad.length; i++)
    {
        if(keys[upKeys[i]])
        {
            pad[i].vy += -pad[i].force
        }
        if(keys[downKeys[i]])
        {
            pad[i].vy += pad[i].force
        }
        pad[i].vy *= fy
        pad[i].move();
        if(pad[i].y < 0+pad[i].h/2)
        {
            pad[i].y = 0+pad[i].h/2
        }
        if(pad[i].y > c.height-pad[i].h/2)
        {
            pad[i].y = c.height-pad[i].h/2
        }
    }

    //ball movement
    ball.move()

    //ball collision 
    if(ball.x < 0)
    {
        ball.x = c.width/2
        ball.y = c.height/2
        players[1].score += 1
    }
    if(ball.x > c.width)
    {
        ball.x = c.width/2
        ball.y = c.height/2
        players[0].score += 1
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

    for(i=0; i < pad.length; i++)
    {
        if(ball.collide(pad[i]))
        {
            //((((i+1) % 2)*2)-1)
            //((((0+1) % 2)*2)-1) = 1
            //((((1+1) % 2)*2)-1) = -1
            let val = pad[i].x + ((pad[i].w/2 + ball.w/2) * ((((i+1) % 2)*2)-1))
            ball.x = val
            ball.vx = -ball.vx;
        }
    }

    //draw the objects
    for (i=0; i < pad.length; i++)
    {
        pad[i].draw();
    }
    ball.draw()
    for(i=0; i < scoreboard.length; i++)
    {
        scoreboard[i].innerHTML = players[i].score
    }
}

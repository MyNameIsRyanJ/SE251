/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div
---------*/

var options = document.querySelector(`#options > h2`)
options.addEventListener(`click`, function(){
    document.querySelector(`.sides`).classList.toggle(`hidden`)
});

/*---------
    Program the two fill inputs to do the following:
    . Display the correct colors on the inputs and outputs and paddles    
    . using an `input` event
        . Change the player's fill property to the value of the input
        . Change the pad's fill property  to the player's fill property
        . Show the fill's hex code in the output div 

-----------*/

var ops = document.querySelectorAll(`.op`);
for(let i = 0; i < ops.length ;i++)
{
    let fill_output = ops[i].querySelector(`.fill`).nextElementSibling
    let fill_inp = ops[i].querySelector(`.fill`)
    fill_inp.addEventListener(`input`, event => {
        player[i].fill = event.target.value
        pad[i].fill = player[i].fill
        fill_output.innerHTML = `${player[i].fill}`
    });
    player[i].fill = fill_inp.value
    pad[i].fill = player[i].fill
    fill_output.innerHTML = `${player[i].fill}`

    let stroke_output = ops[i].querySelector(`.stroke`).nextElementSibling
    let stroke_inp = ops[i].querySelector(`.stroke`)
    stroke_inp.addEventListener(`input`, event => {
        player[i].stroke = event.target.value
        pad[i].stroke = player[i].stroke
        stroke_output.innerHTML = `${player[i].stroke}`
    });
    player[i].stroke = stroke_inp.value
    pad[i].stroke = player[i].stroke
    stroke_output.innerHTML = `${player[i].stroke}`
}


/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/

var ops = document.querySelectorAll(`.op`);
for(let i = 0; i < ops.length ;i++)
{
    let up_output = ops[i].querySelector(`.u`).nextElementSibling
    let up_inp = ops[i].querySelector(`.u`)
    up_inp.addEventListener(`keydown`, event => {
        event.preventDefault();
        up_inp.value = `${event.key}`
        player[i].keys.u = event.key
        up_output.innerHTML = `${event.key}`
    });
    up_inp.addEventListener(`focus`, event => {currentState = `pause`});
    up_inp.value = `${player[i].keys.u}`
    up_output.innerHTML = `${player[i].keys.u}`

    let down_output = ops[i].querySelector(`.d`).nextElementSibling
    let down_inp = ops[i].querySelector(`.d`)
    down_inp.addEventListener(`keydown`, event => {
        event.preventDefault();
        down_inp.value = `${event.key}`
        player[i].keys.d = event.key
        down_output.innerHTML = `${event.key}`
    });
    down_inp.addEventListener(`focus`, event => {currentState = `pause`});
    down_inp.value = `${player[i].keys.d}`
    down_output.innerHTML = `${player[i].keys.d}`

    let straight_output = ops[i].querySelector(`.s`).nextElementSibling
    let straight_inp = ops[i].querySelector(`.s`)
    straight_inp.addEventListener(`keydown`, event => {
        event.preventDefault();
        straight_inp.value = `${event.key}`
        player[i].keys.s = event.key
        straight_output.innerHTML = `${event.key}`
    });
    straight_inp.addEventListener(`focus`, event => {currentState = `pause`});
    straight_inp.value = `${player[i].keys.s}`
    straight_output.innerHTML = `${player[i].keys.s}`
}

/*------------------
RAVE MODE
------------------*/

const rand_color = () => {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`
}

var raveModeEnabled = false;

var rave_inp = document.querySelector(`.rave`);
var rave_output = document.querySelector(`.rave`).nextElementSibling;
rave_inp.addEventListener(`change`, function(){
    raveModeEnabled = this.checked;
    rave_output.innerHTML = `${this.checked}`
});

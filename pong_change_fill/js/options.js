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

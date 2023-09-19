// JavaScript Document
function Validate ()
{
    var noSpecialsSpaceDash = /^[a-zA-Z0-9\s-]*$/;
    var emptyOrSpace = /^\s*$/;
    var email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var phone = /^\d{3}(-)?\d{3}(-)?\d{4}$/;

    var elemIds = [`first-name`, `last-name`, `email`, `conf-email`, `phone`]
    let error = false;
    for (i = 0; i < elemIds.length; i++)
    {
        let cur = document.getElementById(elemIds[i])
        if (!(emptyOrSpace.test(cur.value)))
        {
            if (elemIds[i].split(`-`)[1] == `name`)
            {
                if (noSpecialsSpaceDash.test(cur.value))
                {
                    cur.nextElementSibling.innerHTML = ``
                    cur.parentElement.classList.remove(`error`);
                }
                else
                {
                    error = true;
                    cur.parentElement.classList.add(`error`);
                    cur.nextElementSibling.innerHTML = `* Must Be A Valid Name (No Special Characters)`
                }
            }
            else if (elemIds[i] == `email`)
            {
                if (email.test(cur.value))
                {
                    cur.nextElementSibling.innerHTML = ``
                    cur.parentElement.classList.remove(`error`);
                }
                else
                {
                    error = true;
                    cur.parentElement.classList.add(`error`);
                    cur.nextElementSibling.innerHTML = `* Must Be A Valid Email (EX. example@email.com)`
                }
            }
            else if (elemIds[i] == `conf-email`)
            {
                if (cur.value === document.getElementById(`email`).value)
                {
                    cur.nextElementSibling.innerHTML = ``
                    cur.parentElement.classList.remove(`error`);
                }
                else
                {
                    error = true;
                    cur.parentElement.classList.add(`error`);
                    cur.nextElementSibling.innerHTML = `* Must Match Email`
                }
            }
            else if (elemIds[i] == `phone`)
            {
                if (phone.test(cur.value))
                {
                    cur.nextElementSibling.innerHTML = ``
                    cur.parentElement.classList.remove(`error`);
                }
                else
                {
                    error = true;
                    cur.parentElement.classList.add(`error`);
                    cur.nextElementSibling.innerHTML = `* Must Be A Valid Phone Number (Ex. 888-888-8888)`
                }
            }
        }
        else
        {
            error = true;
            cur.parentElement.classList.add(`error`);
            cur.nextElementSibling.innerHTML = `*`
        }
    }

    if (!(error))
    {
        var person = {
            fname:document.getElementById(`first-name`).value,
            lname:document.getElementById(`last-name`).value,
            email:document.getElementById(`email`).value,
            phone:document.getElementById(`phone`).value.replace(/[^0-9]/g, '')
        };
        console.log(person);
        document.getElementById(`confirmation`).style.display = `block`;
        document.getElementById(`info`).innerHTML = `${person.fname} ${person.lname} <br/> ${person.email} <br/> ${person.phone.substring(0, 3)}-${person.phone.substring(3, 6)}-${person.phone.substring(6, 10)}`
    }
    else
    {
        document.getElementById(`confirmation`).style.display = ``;
    }
}
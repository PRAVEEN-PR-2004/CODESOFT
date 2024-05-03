let name_js = document.getElementById("name_js")
let mail_js = document.getElementById("mail_js")
let msg_js = document.getElementById("msg_js")


function msgrec()
{
    if(name_js.value == null && mail_js.value == null && msg_js.value == null)
    {
        window.alert("fill the form")
    }
    else
    {   
        window.alert("your msg received")
    }
}

let show=document.querySelector(".show")
let black=document.querySelector(".black")

function showfunction()
{
    show.style.display="block"
    black.style.display="block"
}

function deletefunction()
{
    show.style.display="none"
    black.style.display="none"
}
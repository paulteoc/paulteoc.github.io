document.getElementById("id_logic").innerHTML = "2019.11.25.5";

document.getElementById("id_start").addEventListener("click", start); //la click ii atasam functia start
document.getElementById("id_stop").addEventListener("click", stop);

var timer_id;
var unghi = {}
    unghi.valoare = 0;
    
function desenare(unghi) {


    var canvas = document.getElementById("id_canvas");
    var context = canvas.getContext("2d");

    var R = 100; //raza mare pt cercul mare
    var r = 10; //raza mica pe cerc mic

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    var x = canvas.width / 2 + R * Math.cos(unghi.valoare / 180 * Math.PI);
    var y = canvas.height / 2 + R * Math.sin(unghi.valoare / 180 * Math.PI)

    context.arc(x, y, r, 0, 2 * Math.PI);
    context.stroke();

    unghi.valoare++;
    if (unghi.valoare == 360)
        unghi.valoare = 1;

}


function start() 
{
    document.getElementById("id_start").disabled = true;
    document.getElementById("id_stop").disabled = false;
    
    timer_id = setInterval(desenare, 20, unghi);

    var muncitor = new Worker("prime.js");//creiez legatura cu muncitorul(adica prime.js)
    muncitor.onmessage = function(e)//functia onmassage primeste mesaje cu rezultatele creiate de muncitor
    {
        document.getElementById("id_prime").innerHTML = e.data;//aici vor fi afisate mesajele primite
    }
}

function stop()
{
    document.getElementById("id_start").disabled = false;
    document.getElementById("id_stop").disabled = true;

    clearInterval(timer_id);
}   
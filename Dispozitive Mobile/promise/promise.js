document.getElementById("id_logic_version").innerHTML = "2019.11.22.0";
document.getElementById("id_button").addEventListener("click",start);

function f_uab(resolve, reject)            //functia se executa cand activam noi promisiunea
{
    //facem calculul (incercam sa accesam camera sau ce folosim)
    //iar daca se poate accesa se apeleaza
    resolve(":)");
    //sau
    //reject(":(");
    //dar nu ambele in acelasi timp

}

function on_ok_uab(e) //in 2 o sa fie mesajul trimis de la resolve adica":)"
{
    alert("Succes" + e);
}
function on_on_fail_uab(e)
{
    alert("Failure" + e);
}
function start()
{
    alert("start");
    var promisiune = new Promise(f_uab);
//promisiunea are 2 metode than(cand se indeplineste) si catch(cand nu se poate indeplini)
    promisiune.then(on_ok_uab).catch(on_on_fail_uab);//promisiunea se apeleaza ultima
    alert("end");
}
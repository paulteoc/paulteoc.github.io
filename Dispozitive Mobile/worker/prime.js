function este_prim(n) {
    for (var i = 2; i * i <= n; i++)//incercam sa evitam radicalul deoarece este o operatiie costisitoare
        if (n % i == 0)
            return false;
    return true
}

for (var i = 1E10; i < 1E11; i++)
    if (este_prim(i))
        postMessage(i); //cu postmassage trimit nr i
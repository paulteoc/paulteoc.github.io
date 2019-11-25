var ruleaza = false;

onmessage = function(e){
	if (e.data == "start"){
		ruleaza = true;
	}
	else
		if (e.data == "stop"){
			ruleaza = false;
		}
}

function este_prim(n)
{
	for (var i = 2; i*i <= n; i++)
		if (n % i == 0)
			return false;
	return true;	
}

function start(start_value)
{
	if (ruleaza == false)
		;
	else{
		for (var i = start_value; i < start_value + 100; i++)
			if (este_prim(i))
				postMessage(i);
		start_value += 100;	
	}
	if (start_value < 1E11)
		setTimeout(start, 1, start_value);
	else
		postMessage("gata");
}

start(1E10);



// //cum onmessage interceptam mesajul trimis din desenare.js
// //declaram o variabila locala pentru ca sa testam functionalitatea for ului
// var ruleaza = true;

// onmassage = function (e) {
//     if (e.data == "start") {
//         ruleaza = true;
//     }
//     else
//         if (e.data == "stop") {
//         ruleaza = false;
//         }
// }

// function este_prim(n) {
//     for (var i = 2; i * i <= n; i++) //incercam sa evitam radicalul deoarece este o operatiie costisitoare
//         if (n % i == 0) //calculeaza numerele prime
//             return false;
//     return true
// }

// function start(start_value) {
//     if (ruleaza == false)
//     ;
//     else {
//         for (var i = start_value; i < start_value + 100; i++) //prima data facem calculele de urmatoarele 100 nr primele dupaceia apelam timerul
//             if (este_prim(i))
//                 postMessage(i); //cu postmassage trimit nr i
//         start_value += 100;
//     }
//     if (start_value < 1E11) //1E11 = 10 la puterea 11
//         setTimeout(start, 1, start_value); //creiem un timer ,care apeleaza functia start,il setam la o mini secunda cu proprietatea start_value
//     else
//         postMessage("gata");
// }
// start(1E10); //10 ^ 10
let esPrimo = (numero) => {
  if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
	}
	return true;
}

let array = [];

for(let i = 0; i <= 100; i++) array.push(i)
let recorrido = array.forEach((numero) => {
  if(esPrimo(numero)) console.log(numero)
});

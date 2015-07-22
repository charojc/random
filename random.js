//Math.random() devuelve un número aleatorio entre 0 y 1
var n = Match.random();
var str = ' MAYOR que 0,5';
if(n<=0.5){
	str = ' MENOR que 0,5';
}
console.log('\n' + n + str + '\n');
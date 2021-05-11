function valori(array, a, b) {
    var generaNumeri = Math.floor(Math.random() * (a - b + 1)) + b;
    return array.push(generaNumeri);
};
var array1 = [];
var numero1 = parseInt(prompt("numero1"));
var numero2 = parseInt(prompt("numero2"));

for (var i =0; i < 4; i++) {
    var test = valori(array1, numero1, numero2);
}
console.log(array1);
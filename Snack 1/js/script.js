function min(array) {
    return Math.min(...array);;
 };

var bici = [
    {
        nome: "mtb" ,
        peso: 10
    },
    {
        nome: "passeggio" ,
        peso: 15
    },
    {
        nome: "corsa" ,
        peso: 5
    }
];

var pesi=[];
for (var i = 0; i <3; i++) {
    pesi.push(bici[i].peso);
}
var pesoMin = min(pesi);
console.log(pesoMin);
for(var i=0; i < 3; i++) {
    if(bici[i].peso == pesoMin ){
        console.log("la bicicletta più leggere è la bici da " + bici[i].nome);
    }
}
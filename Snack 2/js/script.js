function numeroRandom(){
    return Math.floor(Math.random() * 100) + 1;
}


var squadre = [
    {
        nome: "nome",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "nome" ,
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "nome" ,
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "nome" ,
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "nome" ,
        puntiFatti: 0,
        falliSubiti: 0,
    }
];

for (var i=0; i < squadre.length; i++){
    squadre[i].nome = prompt("Nome scquadra numero " + [i]);
    squadre[i].puntiFatti = numeroRandom();
    squadre[i].falliSubiti = numeroRandom();

};


console.log(squadre);

const nomes = ["Evaldo", "Mari", "Camis"];
nomes.forEach(function(nome){
    console.log(nome)
})

nomes.forEach(function(){})
nomes.forEach(() =>{})

function imprimeNome(nome) {
    console.log(nome);
}
nomes.forEach(imprimeNome)


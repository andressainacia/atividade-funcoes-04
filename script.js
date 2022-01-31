//1 - crie uma função que exiba uma mensagem no console
function mensagem() {
    console.log("Musica")
}
mensagem()
//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function nome(nome) {
    console.log(nome)
}
nome("andressa")
//3 - crie uma função que receba seu nome, idade, e estilo musical preferido (parâmetros) e exiba no console
function perfil(nome,idade,estiloMusical){
    console.log(nome,idade,estiloMusical)
}
perfil("andressa",17,"eclético")
//4 - crie uma função que receba o seu filme favorito, musica favorita (parâmetros) e exiba no console
function hobbie(filmeFavorito,musicaFavorito){
    console.log(filmeFavorito,musicaFavorito)
}
hobbie("piratas do caribe","break from toronto")
//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function triplo(a){
    return a*3
}
console.log(triplo(3))
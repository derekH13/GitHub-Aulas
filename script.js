const alunos = [
    {nome: 'derek', nota: 10},
    {nome: 'julia', nota: 3},
    {nome: 'tadeu', nota: 8},
    {nome: 'amanda', nota: 6},
    {nome: 'amanda', nota: 5}
]


const retornaMaiorSeis = (alunos) => {

    const result =  alunos.filter(item => item.nota >= 6)

    return result
}


console.log(retornaMaiorSeis(alunos));

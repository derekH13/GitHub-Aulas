




    info()
   



function requisicao(){
    const result = fetch('https://api.github.com/users/derekH13', {
        method: 'GET'

    }).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        return data;
    })

    return result

}


async function info(){

    const resposta = await requisicao()

    console.log(resposta);
    
    const Repositorio = resposta.public_repos
    const name = 'Derek' //não aparece meu nomne
    const login = resposta.login
    const seguindo = resposta.following
    const seguidores = resposta.followers
    const link = resposta.html_url
    const imagem = resposta.avatar_url


    document.getElementById('seguindo').innerHTML = seguindo
    document.getElementById('seguidores').innerHTML = seguidores
    document.getElementById('Repositorio').innerHTML = Repositorio
    document.getElementById('profile-name').innerHTML = name
    document.getElementById('profile-username').innerHTML += login
    document.getElementById('profile-avatar').querySelector('img').src = imagem
    document.querySelector('a').href = link
}
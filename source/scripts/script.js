document.getElementById('add-images').addEventListener('click', function() {
    const input = document.getElementById('image-input');
    const files = input.files;

    const imageContainer = document.getElementById('image-container');

    // Limpa o contêiner antes de adicionar novas imagens
    imageContainer.innerHTML = '';

    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        // Verifica se o arquivo é uma imagem
        if (file.type.startsWith('image/')) {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            img.alt = file.name;

            // Adiciona a imagem ao contêiner
            imageContainer.appendChild(img);
        } else {
            alert(`${file.name} não é uma imagem.`);
        }
    }
});
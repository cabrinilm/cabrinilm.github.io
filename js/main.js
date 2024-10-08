window.onload = function() {
    const text = 'I am an aspiring full stack developer, committed to learning key technologies and tools in web development. With a focus on gaining skills in both front-end and back-end, I am continuously exploring new solutions and development practices to build complete, efficient, and responsive applications.';
    const textContainer = document.getElementById('text');
    textContainer.textContent = ''; // Limpa o conteúdo inicial

    let index = 0;

    function addLetter() {
        if (index < text.length) {
            textContainer.textContent += text.charAt(index);
            index++;
            setTimeout(addLetter, 50); // Aguarda 100ms antes de adicionar a próxima letra
        }
    }

    addLetter(); // Começa a adicionar letras assim que a página é carregada
};

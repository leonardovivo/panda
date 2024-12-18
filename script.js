function showScreen(screenNumber) {
    // Remove classes anteriores do body
    document.body.classList.remove('screen-1', 'screen-2', 'screen-3');

    // Esconde todas as telas
    document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));

    // Mostra a tela correspondente
    const screen = document.getElementById(`screen-${screenNumber}`);
    screen.classList.add('active');

    // Adiciona a classe de fundo ao body
    document.body.classList.add(`screen-${screenNumber}`);

    // Toca a música ao chegar na tela 3
    if (screenNumber === 3) {
        const audioPlayer = document.getElementById('audio-player');
        audioPlayer.play();
    }
}

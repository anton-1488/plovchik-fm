// Список песен (пути к файлам)
const playlist = [
    'pause.ogg',
    'rr.mp3',
    'pause.ogg',
    'barbiePet.mp3',
    'pause.ogg'
    // Добавьте больше песен по необходимости
];

// Элемент audio
const audioPlayer = document.getElementById('audioPlayer');

let currentSongIndex = 0; // Индекс текущей песни

// Функция для загрузки и воспроизведения песни
function loadSong(index) {
    if (index >= 0 && index < playlist.length) {
        audioPlayer.src = playlist[index];
        audioPlayer.load(); // Загружаем новый файл
        audioPlayer.play().catch(e => console.log("Ошибка воспроизведения:", e));
    } else {
        console.error("Неверный индекс песни");
    }
}

// Функция для воспроизведения следующей песни
function playNext() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length; // Циклический переход
    loadSong(currentSongIndex);
}

// Обработчик события окончания воспроизведения текущей песни
audioPlayer.addEventListener('ended', () => {
    // После окончания песни автоматически проигрываем следующую
    playNext();
});

// Начальная загрузка и воспроизведение первой песни
loadSong(currentSongIndex);
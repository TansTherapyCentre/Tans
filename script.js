const answers = [
    "Lokasinya di Jl. Sawo 1 No 5, Patrang,  Perum. Puri Sadewo.",
    "Khasiatnya tergantung keluhanmu. Kalau hanya adjust tulang, biasanya tidak sakit.",
    "Semua usia bisa mencoba, tergantung keluhan yang dialami.",
    "Efek sampingnya minimal, biasanya hanya rasa pegal ringan."
];

function showAnswer(index) {
    const answerText = document.getElementById("answer-text");
    answerText.textContent = answers[index];
}

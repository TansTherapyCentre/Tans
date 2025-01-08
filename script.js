const answers = [
    "Silahkan menghubungi nomor Admin dengan klik (Booking & Konsul) pada pojok bawah kanan, Admin akan dengan otomatis mengirim form booking yang bisa langsung diisi oleh calon pasien yang akan terapi",
    "Minimal 9 Tahun dan tidak ada batas max umur.",
    "1. TBA method adalah terapi manual pada tulang belakang (bonesetting) untuk mereposisi tulang dan persendian.\n 2. PMD therapy adalah metode akupuntur modern tanpa tusuk jarum yang ampuh mengatasi keluhan pada sistem saraf (saraf kejepit, stroke, dll).",
    "1. Memperbaiki tulang dan sendi\n 2. Mengurangi tegang otot (Spasme)\n 3. Meningkatkan gerak sendi yang kaku dan terkunci\n 4. Mengatasi gangguan saraf yang disebabkan oleh tekanan dari sendi yang tidak pas\n 5. Mengembalikan keseimbangan kerja otot.",
    "1. Mengontrol Tekanan Darah\n 2. Mengurangi Nyeri Punggung dan Sendi\n 3. Membantu mengobati Stroke, Diabetes, Kolestrol, Asam Urat\n 4. memperbaiki kualitas tidur.",
    "1. kami tidak dapat menerima pasien yang sedang patah/retak (fraktur)\n 2. Calon pasien mengalami tekanan darah tinggi serta rasa pusing ketika akan terapi\n 3. Wanita hamil, sedang dalam tahapan menstruasi dan pasca operasi sesar kurang dari 1 tahun.",
];

function showAnswer(index) {
    const answerText = document.getElementById("answer-text");
    answerText.textContent = answers[index];
}



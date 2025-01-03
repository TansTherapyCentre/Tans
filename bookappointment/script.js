function updateDetails() {
    const kotaSelect = document.getElementById('kota');
    const detailsBox = document.getElementById('details-box');
  
    if (kotaSelect.value === 'Klinik Jember') {
      detailsBox.style.display = 'block';
    } else {
      detailsBox.style.display = 'none';
    }
  }
  
  function goBack() {
    window.history.back(); // Kembali ke halaman sebelumnya
  }
  
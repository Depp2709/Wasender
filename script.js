document.getElementById('whatsappForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const phoneNumber = document.getElementById('phoneNumber').value;
    const message = document.getElementById('message').value;
    
    if (phoneNumber && message) {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    } else {
        alert('Silakan isi nomor telepon dan pesan.');
    }
});

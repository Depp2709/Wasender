document.getElementById('whatsappForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const phoneNumber = document.getElementById('phoneNumber').value;
    const message = document.getElementById('message').value;
    
    if (phoneNumber && message) {
        // Format URL untuk WhatsApp
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        // Buka URL di tab baru
        window.open(url, '_blank');
    } else {
        alert('Silakan isi nomor telepon dan pesan.');
    }
});

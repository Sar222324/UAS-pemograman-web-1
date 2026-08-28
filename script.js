document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Informasi Buku & Literasi berhasil dimuat!");

    alert("Selamat datang di Website Informasi Buku & Literasi!");

    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            
            const nama = document.getElementById("nama").value;
            alert(`Terima kasih ${nama}, pesan Anda berhasil dikirim!`);
            
            contactForm.reset();
        });
    }
});
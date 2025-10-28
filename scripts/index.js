const btn = document.getElementById('listenBtn');
btn.addEventListener('click', function() {
        window.location.href = "radio.html";
});

function updateButtonText() {
    if (window.innerWidth <= 768) {
      btn.textContent = '🎧';
    } else {
      btn.textContent = 'Слушать';
    }
}

// При загрузке
document.addEventListener('DOMContentLoaded', updateButtonText);

// При изменении размера окна (на десктопе, если кто-то будет ресайзить)
window.addEventListener('resize', updateButtonText);
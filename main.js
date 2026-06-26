// js/main.js - Lógica optimizada

function abrirCarta() {
    document.getElementById('sobre').classList.add('hidden');
    document.getElementById('contenido').classList.remove('hidden');
}

function explotar() {
    const exp = document.getElementById('explosion');
    exp.classList.remove('hidden');
    setTimeout(() => {
        // Redirección directa al chat con el mensaje negativo
        redireccionarWhatsApp('No quiero ser tu novia');
    }, 1500);
}

function responder(mensaje) {
    redireccionarWhatsApp(mensaje);
}

function redireccionarWhatsApp(mensaje) {
    const numero = "524793457847";
    // El 'wa.me' es el estándar. 
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    
    // Forzamos la redirección para que sea instantánea
    window.location.replace(url);
}
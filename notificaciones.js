// Solicitamos permiso de notificaciones cuando se carga la página
Notification.requestPermission().then(function(result) {
    console.log(result);
});

// Función que verifica si se tiene permiso para mostrar notificaciones
function verificarPermiso() {
    return Notification.permission === "granted";
}

// Función para mostrar la primera notificación
function mostrarNotificacion1() {
    if (verificarPermiso()) {
        const notification = new Notification("Hola notificación 1!");
    } else {
        alert("No aceptaron las notificaciones.");
    }
}

// Función para mostrar la segunda notificación con imagen y evento
function mostrarNotificacion2() {
    if (verificarPermiso()) {
        const options = {
            body: "Notificación 2 con imagen y evento",
            icon: "logo.png"
        }
        const notification2 = new Notification("Nueva notificación!", options);

        notification2.onclick = function(e) {
            const notification3 = new Notification("Gracias por hacer clic en la notificación 2");
        }
    }
}

// Asignamos las funciones a los eventos onclick de los botones
document.querySelector("#not1").onclick = mostrarNotificacion1;
document.querySelector("#not2").onclick = mostrarNotificacion2;
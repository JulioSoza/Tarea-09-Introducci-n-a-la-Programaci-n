// Función principal
function simulacionRadar() {
    // Continuamente leer entradas
    while (true) {
        // Leer los nombres, distancias, prioridades y velocidades de los enemigos
        let enemy1 = prompt("Ingrese el nombre del primer enemigo:");
        let dist1 = parseFloat(prompt("Ingrese la distancia del primer enemigo:"));
        let priority1 = parseInt(prompt("Ingrese la prioridad del primer enemigo:"));
        let speed1 = parseFloat(prompt("Ingrese la velocidad del primer enemigo:"));

        let enemy2 = prompt("Ingrese el nombre del segundo enemigo:");
        let dist2 = parseFloat(prompt("Ingrese la distancia del segundo enemigo:"));
        let priority2 = parseInt(prompt("Ingrese la prioridad del segundo enemigo:"));
        let speed2 = parseFloat(prompt("Ingrese la velocidad del segundo enemigo:"));

        // Determinar cuál enemigo atacar
        let enemigoSeleccionado;
        if (priority1 > priority2) {
            enemigoSeleccionado = enemy1;
        } else if (priority2 > priority1) {
            enemigoSeleccionado = enemy2;
        } else {
            // Si las prioridades son iguales, seleccionar el más cercano
            if (dist1 < dist2) {
                enemigoSeleccionado = enemy1;
            } else if (dist2 < dist1) {
                enemigoSeleccionado = enemy2;
            } else {
                // Si las distancias son iguales, seleccionar el de mayor velocidad
                if (speed1 > speed2) {
                    enemigoSeleccionado = enemy1;
                } else {
                    enemigoSeleccionado = enemy2;
                }
            }
        }

        console.log(enemigoSeleccionado);

        // Esperar un corto período de tiempo antes de la siguiente lectura
        setTimeout(() => {}, 500);  // 500 ms de espera
    }
}

// Ejecutar la función principal
simulacionRadar();

// Función principal
function radarSimulacion() {
    // Continuamente leer entradas
    while (true) {
        // Leer los nombres y las distancias de los enemigos
        let enemy1 = prompt("Ingrese el nombre del primer enemigo:");
        let dist1 = parseFloat(prompt("Ingrese la distancia del primer enemigo:"));
        let enemy2 = prompt("Ingrese el nombre del segundo enemigo:");
        let dist2 = parseFloat(prompt("Ingrese la distancia del segundo enemigo:"));

        // Determinar cuál enemigo está más cerca
        if (dist1 < dist2) {
            console.log(enemy1);
        } else if (dist2 < dist1) {
            console.log(enemy2);
        } else {
            console.log(enemy1);  // Si las distancias son iguales, seleccionar el primero
        }

        // Esperar un corto período de tiempo antes de la siguiente lectura
        setTimeout(() => {}, 500);  // 500 ms de espera
    }
}

// Ejecutar la función principal
radarSimulacion();

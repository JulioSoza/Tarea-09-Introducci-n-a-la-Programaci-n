// Función principal
function seleccionarEnemigo() {
    // Continuamente leer entradas
    while (true) {
        // Leer los nombres, distancias y prioridades de los enemigos
        let enemy1 = prompt("Ingrese el nombre del primer enemigo:");
        let dist1 = parseFloat(prompt("Ingrese la distancia del primer enemigo:"));
        let priority1 = parseInt(prompt("Ingrese la prioridad del primer enemigo:"));

        let enemy2 = prompt("Ingrese el nombre del segundo enemigo:");
        let dist2 = parseFloat(prompt("Ingrese la distancia del segundo enemigo:"));
        let priority2 = parseInt(prompt("Ingrese la prioridad del segundo enemigo:"));

        // Determinar cuál enemigo atacar
        if (priority1 > priority2) {
            console.log(enemy1);
        } else if (priority2 > priority1) {
            console.log(enemy2);
        } else {
            // Si las prioridades son iguales, seleccionar el más cercano
            if (dist1 < dist2) {
                console.log(enemy1);
            } else {
                console.log(enemy2);
            }
        }

        // Esperar un corto período de tiempo antes de la siguiente lectura
        setTimeout(() => {}, 500);  // 500 ms de espera
    }
}

// Ejecutar la función principal
seleccionarEnemigo();

// Función para obtener la jugada de la computadora
function jugarComputadora() {
    const opciones = ['piedra', 'papel', 'tijera'];
    const indice = Math.floor(Math.random() * 3); // Genera un número entre 0 y 2
    return opciones[indice];
}

// Función para determinar el ganador
function determinarGanador(usuario, computadora) {
    if (usuario === computadora) {
        return 'empate';
    }
    
    if ((usuario === 'piedra' && computadora === 'tijera') ||
        (usuario === 'papel' && computadora === 'piedra') ||
        (usuario === 'tijera' && computadora === 'papel')) {
        return 'usuario';
    }
    return 'computadora';
}

// Función principal del juego
function jugar() {
    const veces = parseInt(prompt('¿Cuántas veces deseas jugar?'), 10);
    
    for (let i = 0; i < veces; i++) {
        const jugadaUsuario = prompt('Elige piedra, papel o tijera:').toLowerCase();
        
        if (!['piedra', 'papel', 'tijera'].includes(jugadaUsuario)) {
            console.log('Opción inválida. Elige entre piedra, papel o tijera.');
            i--; // Vuelve a pedir la jugada si la opción es inválida
            continue;
        }

        const jugadaComputadora = jugarComputadora();
        console.log(`Computadora elige: ${jugadaComputadora}`);
        
        const resultado = determinarGanador(jugadaUsuario, jugadaComputadora);
        
        if (resultado === 'empate') {
            console.log('¡Es un empate!');
        } else if (resultado === 'usuario') {
            console.log('¡Felicidades, ganaste!');
        } else {
            console.log('Lo siento, perdiste contra la computadora.');
        }
    }
}

// Inicia el juego
jugar();
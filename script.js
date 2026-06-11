// Variable para trackear el equipo actualmente abierto
let currentOpenTeam = null;

// Función para expandir/contraer equipos (solo uno a la vez)
function toggleTeam(teamToOpen, teamToClose) {
    const teamElement = document.getElementById(teamToOpen);
    const otherTeam = document.getElementById(teamToClose);
    const btn = event.target;
    
    // Si el equipo que queremos abrir ya está abierto, lo cerramos
    if (!teamElement.classList.contains('hidden')) {
        teamElement.classList.add('hidden');
        if (teamToOpen === 'areas-team') {
            btn.innerHTML = '▼ Expandir áreas';
        } else {
            btn.innerHTML = '▼ Equipos';
        }
        currentOpenTeam = null;
        return;
    }
    
    // Cerramos el otro equipo si está abierto
    if (otherTeam && !otherTeam.classList.contains('hidden')) {
        otherTeam.classList.add('hidden');
        const otherBtn = otherTeam.closest('.node').querySelector('button');
        if (otherBtn) {
            if (otherTeam.id === 'areas-team') {
                otherBtn.innerHTML = '▼ Expandir áreas';
            } else {
                otherBtn.innerHTML = '▼ Equipos';
            }
        }
    }
    
    // Abrimos el equipo solicitado
    teamElement.classList.remove('hidden');
    if (teamToOpen === 'areas-team') {
        btn.innerHTML = '▲ Contraer áreas';
    } else {
        btn.innerHTML = '▲ Ocultar equipos';
    }
    currentOpenTeam = teamToOpen;
}

// Función para subequipos dentro de Áreas
function toggleSubteam(button) {
    const subcard = button.closest('.subcard');
    const subteam = subcard.querySelector('.subteam');
    
    if (!subteam) return;
    
    if (subteam.classList.contains('hidden')) {
        subteam.classList.remove('hidden');
        button.innerHTML = '▲ Ocultar';
    } else {
        subteam.classList.add('hidden');
        button.innerHTML = '▼ Equipo';
    }
}

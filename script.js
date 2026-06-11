// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    let currentOpenTeam = null;

    // Configurar botones de toggle principales
    const toggleButtons = document.querySelectorAll('.btn-toggle');
    toggleButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const teamId = this.getAttribute('data-team');
            const teamElement = document.getElementById(`team-${teamId}`);
            
            if (!teamElement) return;
            
            // Si hay otro equipo abierto, lo cerramos
            if (currentOpenTeam && currentOpenTeam !== teamElement) {
                currentOpenTeam.classList.add('hidden');
                const prevBtn = document.querySelector(`.btn-toggle[data-team="${currentOpenTeam.id.replace('team-', '')}"]`);
                if (prevBtn) {
                    if (prevBtn.innerHTML.includes('Áreas')) {
                        prevBtn.innerHTML = '▼ Expandir áreas';
                    } else {
                        prevBtn.innerHTML = '▼ Ver equipos';
                    }
                }
            }
            
            // Toggle del equipo actual
            if (teamElement.classList.contains('hidden')) {
                teamElement.classList.remove('hidden');
                if (this.innerHTML.includes('Áreas')) {
                    this.innerHTML = '▲ Contraer áreas';
                } else {
                    this.innerHTML = '▲ Ocultar equipos';
                }
                currentOpenTeam = teamElement;
            } else {
                teamElement.classList.add('hidden');
                if (this.innerHTML.includes('Áreas')) {
                    this.innerHTML = '▼ Expandir áreas';
                } else {
                    this.innerHTML = '▼ Ver equipos';
                }
                currentOpenTeam = null;
            }
        });
    });

    // Configurar botones de subequipos
    const subButtons = document.querySelectorAll('.btn-sub');
    subButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const subId = this.getAttribute('data-sub');
            const subElement = document.getElementById(subId);
            
            if (!subElement) return;
            
            if (subElement.classList.contains('hidden')) {
                subElement.classList.remove('hidden');
                this.innerHTML = '▲ Ocultar miembros';
            } else {
                subElement.classList.add('hidden');
                this.innerHTML = '▼ Miembros';
            }
        });
    });
});

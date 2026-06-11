document.addEventListener('DOMContentLoaded', function() {
    
    let currentOpenTeam = null;

    const toggleButtons = document.querySelectorAll('.btn-toggle');
    toggleButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const teamId = this.getAttribute('data-team');
            const teamElement = document.getElementById(`team-${teamId}`);
            
            if (!teamElement) return;
            
            if (currentOpenTeam && currentOpenTeam !== teamElement) {
                currentOpenTeam.classList.add('hidden');
                const prevBtn = document.querySelector(`.btn-toggle[data-team="${currentOpenTeam.id.replace('team-', '')}"]`);
                if (prevBtn) {
                    if (prevBtn.innerHTML.includes('Areas')) {
                        prevBtn.innerHTML = '▼ Expandir areas';
                    } else {
                        prevBtn.innerHTML = '▼ Ver equipos';
                    }
                }
            }
            
            if (teamElement.classList.contains('hidden')) {
                teamElement.classList.remove('hidden');
                if (this.innerHTML.includes('Areas')) {
                    this.innerHTML = '▲ Contraer areas';
                } else {
                    this.innerHTML = '▲ Ocultar equipos';
                }
                currentOpenTeam = teamElement;
            } else {
                teamElement.classList.add('hidden');
                if (this.innerHTML.includes('Areas')) {
                    this.innerHTML = '▼ Expandir areas';
                } else {
                    this.innerHTML = '▼ Ver equipos';
                }
                currentOpenTeam = null;
            }
        });
    });

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

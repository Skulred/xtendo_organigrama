// Función para expandir/contraer equipos principales
function toggleTeam(button) {
    const node = button.closest('.node');
    const children = node.querySelector(':scope > .children');
    
    if (!children) return;

    const isHidden = children.classList.contains('hidden');
    
    if (isHidden) {
        children.classList.remove('hidden');
        button.innerHTML = '▲ Contraer equipo';
    } else {
        children.classList.add('hidden');
        button.innerHTML = '▼ Expandir equipo';
    }
}

// Función específica para subequipos dentro de Áreas
function toggleSubteam(button) {
    const subcard = button.closest('.expandible');
    const childrenSub = subcard.querySelector('.children-sub');
    
    if (!childrenSub) return;

    const isHidden = childrenSub.classList.contains('hidden');
    
    if (isHidden) {
        childrenSub.classList.remove('hidden');
        button.innerHTML = '▲ Contraer subequipo';
    } else {
        childrenSub.classList.add('hidden');
        button.innerHTML = '▼ Subequipo';
    }
}

function toggleTeam(button) {
    const node = button.closest('.node');
    const children = node.querySelector('.children');

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

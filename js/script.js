function toggleTeam(button) {
    // Busca el contenedor .node más cercano al botón
    const node = button.closest('.node');
    // Busca los hijos dentro de ese nodo
    const children = node.querySelector('.children');

    if (!children) return;

    children.classList.toggle('hidden');

    button.innerHTML = children.classList.contains('hidden')
        ? '▼ Expandir equipo'
        : '▲ Contraer equipo';
}

function toggleTeam(button) {
    // 1. Busca el contenedor .node padre del botón
    const node = button.closest('.node');
    
    // 2. Busca el contenedor .children dentro de ese nodo
    const children = node.querySelector('.children');

    if (!children) return;

    // 3. Alterna la visibilidad
    children.classList.toggle('hidden');

    // 4. Cambia el texto del botón
    button.innerHTML = children.classList.contains('hidden') 
        ? '▼ Expandir equipo' 
        : '▲ Contraer equipo';
}

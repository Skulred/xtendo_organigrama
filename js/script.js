function toggleTeam(button) {
   
    const card = button.closest('.card');
    '
    const children = card.nextElementSibling;
    
    if (!children) return;

    children.classList.toggle('hidden');

    button.innerHTML = children.classList.contains('hidden') 
        ? '▼ Expandir equipo' 
        : '▲ Contraer equipo';
}

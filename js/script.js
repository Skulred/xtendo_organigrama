function toggleTeam(button)
{
    const children =
        button.closest('.node')
              .querySelector('.children');

    if (!children) return;

    children.classList.toggle('hidden');

    button.innerHTML =
        children.classList.contains('hidden')
            ? '▼ Expandir equipo'
            : '▲ Contraer equipo';
}

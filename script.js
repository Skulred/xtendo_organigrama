function toggleTeam(button) {

    const children =
        button.closest('.node')
              .querySelector('.children');

    children.classList.toggle('hidden');

    button.innerText =
        children.classList.contains('hidden')
            ? 'Expandir equipo'
            : 'Contraer equipo';
}

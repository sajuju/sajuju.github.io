document.querySelectorAll('.group').forEach(item => {
    item.addEventListener('click', () => {
        const submenu = item.querySelector('ul');
        submenu.classList.toggle('hidden');
    });
});

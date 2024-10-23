document.addEventListener('DOMContentLoaded', () => {
    const commandList = document.getElementById('git-commands-list');
    const addCommandBtn = document.getElementById('addCommandBtn');

    addCommandBtn.addEventListener('click', () => {
        const newCommand = prompt('Introduce un nuevo comando Git:');
        if (newCommand) {
            const li = document.createElement('li');
            li.textContent = newCommand;
            commandList.appendChild(li);
        }
    });
});

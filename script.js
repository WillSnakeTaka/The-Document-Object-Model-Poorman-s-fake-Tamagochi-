document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todoForm');
    const todoInput = document.getElementById('todoInput');
    const prioritySelect = document.getElementById('prioritySelect');
    const todoList = document.getElementById('todoList');
    const catImage = document.getElementById('catImage');
    const clearCompletedButton = document.getElementById('clearCompleted');

    // Cat Image Function
    const fetchCatImage = async () => {
        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/random');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            catImage.src = data.url;
        } catch (error) {
            console.error('Error fetching cat image:', error);
            catImage.src = 'https://placekitten.com/200/200'; // Fallback image
        }
    };

    fetchCatImage(); // Initial cat image load

    todoForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const taskText = todoInput.value.trim();
        const priority = prioritySelect.value;

        if (taskText !== "") {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;
            listItem.classList.add(priority); // Add priority class

            listItem.addEventListener('click', () => {
                listItem.classList.toggle('completed');
            });

            todoList.appendChild(listItem);
            todoInput.value = "";
        }
    });

    clearCompletedButton.addEventListener('click', () => {
        const completedTasks = document.querySelectorAll('.completed');
        completedTasks.forEach(task => task.remove());
    });
});
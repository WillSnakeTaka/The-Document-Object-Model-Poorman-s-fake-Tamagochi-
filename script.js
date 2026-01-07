document.addEventListener('DOMContentLoaded', () => {
  const todoForm = document.getElementById('todoForm');
  const todoInput = document.getElementById('todoInput');
  const prioritySelect = document.getElementById('prioritySelect');
  const todoList = document.getElementById('todoList');
  const completedList = document.getElementById('completedList');
  const clearCompletedButton = document.getElementById('clearCompleted');
  const catImage = document.getElementById('catImage');
  const tamagotchi = document.getElementById('tamagotchi');

  // Load a cat image
  const randomStatus = [200, 201, 202, 204, 205, 206, 207];
  const status = randomStatus[Math.floor(Math.random() * randomStatus.length)];
  catImage.src = `https://http.cat/${status}.jpg`;

  // Add a task
  todoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const taskText = todoInput.value.trim();
    const priority = prioritySelect.value;

    if (taskText.length >= 2) {
      const li = document.createElement('li');
      li.classList.add(priority);
      li.setAttribute('data-priority', priority);

      const textSpan = document.createElement('span');
      textSpan.className = 'task-text';
      textSpan.textContent = taskText;

      const completeButton = document.createElement('button');
      completeButton.type = 'button';
      completeButton.className = 'complete-button';
      completeButton.textContent = 'Complete';

      completeButton.addEventListener('click', () => {
        li.classList.add('completed');
        li.removeChild(completeButton);
        completedList.appendChild(li);
        triggerTamagotchi();
      });

      li.appendChild(textSpan);
      li.appendChild(completeButton);

      todoList.appendChild(li);
      todoForm.reset();
    }
  });

  // Clear completed tasks
  clearCompletedButton.addEventListener('click', () => {
    const completedTasks = completedList.querySelectorAll('li');

    if (completedTasks.length > 0) {
      completedTasks.forEach((task) => {
        console.log('Removing completed:', task.textContent);
        completedList.removeChild(task);
      });
    }
  });

  function triggerTamagotchi() {
    tamagotchi.classList.add('happy');
    window.setTimeout(() => {
      tamagotchi.classList.remove('happy');
    }, 1400);
  }
});

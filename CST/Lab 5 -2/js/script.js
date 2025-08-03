const taskInput = document.getElementById('task');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

let tasks = [];

addTaskBtn.addEventListener('click', function () {
  const enteredTask = taskInput.value.trim();
  if (enteredTask === '') return;

  const task = { id: Date.now(), name: enteredTask, status: 'pending' };
  tasks.push(task);

  displayTasks(tasks);
  taskInput.value = '';
});

function displayTasks(tasksToDisplay) {
  taskList.innerHTML = '';

  const emptyMessage = document.getElementById('empty-message');

  if (tasksToDisplay.length === 0) {
    emptyMessage.style.display = 'block';
    taskList.style.display = 'none';

    return;
  } else {
    emptyMessage.style.display = 'none';
    taskList.style.display = 'block';
  }

  tasksToDisplay.forEach((task) => {
    const newLi = document.createElement('li');
    if (task.status === 'done') {
      newLi.classList.add('completed');
    }

    newLi.innerHTML = `
      ${task.name}
      <div>
        <button class="complete-btn" data-id="${task.id}">✓</button>
        <button class="delete-btn" data-id="${task.id}">✕</button>
      </div>
    `;
    taskList.appendChild(newLi);
  });

  document.querySelectorAll('.delete-btn').forEach((btn) => {
    btn.addEventListener('click', function (event) {
      const id = parseInt(event.target.dataset.id);
      tasks = tasks.filter((task) => task.id !== id);
      displayTasks(tasks);
    });
  });

  document.querySelectorAll('.complete-btn').forEach((btn) => {
    btn.addEventListener('click', function (event) {
      const id = parseInt(event.target.dataset.id);
      const taskIndex = tasks.findIndex((task) => task.id === id);

      if (taskIndex !== -1) {
        tasks[taskIndex].status = 'done';
        displayTasks(tasks);
      }
    });
  });
}

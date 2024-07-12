document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('taskList');
    const addTaskBtn = document.getElementById('addTaskBtn');
  
    addTaskBtn.addEventListener('click', addTask);
  
    function addTask() {
      const taskTitle = document.getElementById('taskTitle').value;
      const taskDateTime = document.getElementById('taskDateTime').value;
  
      if (taskTitle === '' || taskDateTime === '') {
        alert('Please fill in both fields');
        return;
      }
  
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${taskTitle} (Due: ${new Date(taskDateTime).toLocaleString()})</span>
        <div class="task-actions">
          <button class="complete">Complete</button>
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
        </div>
      `;
  
      taskList.appendChild(li);
  
      document.getElementById('taskTitle').value = '';
      document.getElementById('taskDateTime').value = '';
  
      li.querySelector('.complete').addEventListener('click', () => {
        li.classList.toggle('completed');
      });
  
      li.querySelector('.edit').addEventListener('click', () => {
        editTask(li, taskTitle, taskDateTime);
      });
  
      li.querySelector('.delete').addEventListener('click', () => {
        taskList.removeChild(li);
      });
    }
  
    function editTask(taskItem, oldTitle, oldDateTime) {
      const newTitle = prompt('Edit task title:', oldTitle);
      const newDateTime = prompt('Edit task date and time:', oldDateTime);
  
      if (newTitle !== null && newTitle !== '' && newDateTime !== null && newDateTime !== '') {
        taskItem.querySelector('span').innerHTML = `${newTitle} (Due: ${new Date(newDateTime).toLocaleString()})`;
      } else {
        alert('Both fields must be filled');
      }
    }
  });
  